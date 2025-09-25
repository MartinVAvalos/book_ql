// Seed script: fetch books from Google Books and upsert into Hasura via GraphQL
// Usage examples:
//  node seed_books.js --query='intitle:"rust"'        (uses SEED_LIMIT env or default 1)
//  node seed_books.js --isbns=9781491927281,9780596805524

const HASURA_URL = process.env.HASURA_URL || "http://host.docker.internal:5050/v1/graphql";
const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET || "vigilantmuse";
const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY || "";
const SEED_LIMIT = Number(process.env.SEED_LIMIT || process.env.SEED_COUNT || 1) || 1;

// small fetch polyfill for older Node versions
let _fetch = globalThis.fetch;
if (!_fetch) {
  try {
    const nodeFetchModule = await import('node-fetch');
    _fetch = nodeFetchModule.default ?? nodeFetchModule;
  } catch (e) {
    console.error('fetch not available. Please run on Node 18+ or install node-fetch in the container.');
    process.exit(1);
  }
}

function die(msg, code = 1) { console.error(msg); process.exit(code); }

async function gql(query, variables = {}) {
  const res = await _fetch(HASURA_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(HASURA_ADMIN_SECRET ? { "x-hasura-admin-secret": HASURA_ADMIN_SECRET } : {})
    },
    body: JSON.stringify({ query, variables }),
    timeout: 20000
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.errors) {
    const err = json.errors?.[0]?.message || JSON.stringify(json);
    throw new Error(`Hasura error: ${err}`);
  }
  return json.data;
}

async function gbFetchByQuery(query, totalWanted = 1, offset = 0) {
  // Google Books API allows maxResults up to 40 per request. This helper
  // will fetch in pages of up to 40, starting at `offset`, until `totalWanted`
  // items are collected or there are no more results.
  const results = [];
  const pageSize = 40;
  for (let start = offset; results.length < totalWanted; start += pageSize) {
    const url = new URL('https://www.googleapis.com/books/v1/volumes');
    url.searchParams.set('q', query);
    // request no more than remaining wanted items, but never more than pageSize
    url.searchParams.set('maxResults', String(Math.min(pageSize, totalWanted - results.length)));
    url.searchParams.set('startIndex', String(start));
    if (GOOGLE_BOOKS_API_KEY) url.searchParams.set('key', GOOGLE_BOOKS_API_KEY);

    const res = await _fetch(url.toString());
    const json = await res.json();
    const items = (json.items || []);
    if (!items.length) break; // no more results

    results.push(...items);
    if (results.length >= totalWanted) break;
    // If API reports totalItems and we've already reached or passed it, stop
    if (typeof json.totalItems === 'number' && start >= json.totalItems) break;
  }
  return results.slice(0, totalWanted);
}

async function gbFetchByISBN(isbn) {
  const url = new URL('https://www.googleapis.com/books/v1/volumes');
  url.searchParams.set('q', `isbn:${isbn}`);
  if (GOOGLE_BOOKS_API_KEY) url.searchParams.set('key', GOOGLE_BOOKS_API_KEY);
  const res = await _fetch(url.toString());
  const json = await res.json();
  return (json.items || []).slice(0,1);
}

function volumeToBookObj(v) {
  const info = v.volumeInfo || {};
  return {
    google_volume_id: v.id,
    title: info.title || null,
    description: info.description || null,
    publisher: info.publisher || null,
    published_date: info.publishedDate || null,
    page_count: info.pageCount || null,
    print_type: info.printType || null,
    language: info.language || null,
    // Hasura expects image_thumbnail_url (matches migration and GraphQL schema)
    image_thumbnail_url: info.imageLinks?.extraLarge
        || info.imageLinks?.large
        || info.imageLinks?.medium
        || info.imageLinks?.small
        || info.imageLinks?.thumbnail
        || info.imageLinks?.smallThumbnail
        || null,
    info_link: info.infoLink || null,
    preview_link: info.previewLink || null,
    canonical_volume_link: info.canonicalVolumeLink || null,
    average_rating: info.averageRating ?? null,
    ratings_count: info.ratingsCount ?? null,
    industry_identifiers: info.industryIdentifiers ? JSON.stringify(info.industryIdentifiers) : null,
    sale_info: v.saleInfo ? JSON.stringify(v.saleInfo) : null,
    access_info: v.accessInfo ? JSON.stringify(v.accessInfo) : null,
    raw: JSON.stringify(v)
  };
}

const MUTATION_UPSERT_BOOK = `mutation UpsertBook($book: books_insert_input!) {
  insert_books_one(
    object: $book
    on_conflict: {
      constraint: books_google_volume_id_key
      update_columns: [
        title
        description
        publisher
        published_date
        page_count
        print_type
        language
        image_thumbnail_url
        info_link
        preview_link
        canonical_volume_link
        average_rating
        ratings_count
        industry_identifiers
        sale_info
        access_info
        raw
      ]
    }
  ) { id google_volume_id title }
}`;

const MUTATION_UPSERT_AUTHOR = `mutation UpsertAuthor($name: String!) { insert_authors_one(object: { name: $name }, on_conflict: { constraint: authors_name_key, update_columns: [name] }) { id } }`;
const MUTATION_UPSERT_BOOK_AUTHOR = `mutation UpsertBookAuthor($book_id: uuid!, $author_id: uuid!, $ord: smallint!) { insert_book_authors_one(object: { book_id: $book_id, author_id: $author_id, ord: $ord }, on_conflict: { constraint: book_authors_pkey, update_columns: [ord] }) { book_id author_id ord } }`;

const MUTATION_UPSERT_CATEGORY = `mutation UpsertCategory($id: String!, $comment: String!) { insert_categories_one(object: { id: $id, comment: $comment }, on_conflict: { constraint: categories_new_pkey, update_columns: [comment] }) { id } }`;
const MUTATION_UPSERT_BOOK_CATEGORY = `mutation UpsertBookCategory($book_id: uuid!, $category_id: String!) { insert_book_categories_one(object: { book_id: $book_id, category_id: $category_id }, on_conflict: { constraint: book_categories_pkey, update_columns: [category_id] }) { book_id category_id } }`;

// upsert inventory row for a book (set quantity, on conflict update quantity)
const MUTATION_UPSERT_INVENTORY = `mutation UpsertInventory($inv: book_inventory_insert_input!) { insert_book_inventory_one(object: $inv, on_conflict: { constraint: book_inventory_pkey, update_columns: [quantity] }) { book_id quantity } }`;

// helper: create GraphQL-safe slug ids for categories (matches migration logic)
function slugifyCategory(name) {
  if (!name) return null;
  const base = String(name).toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
  let slug0 = base;
  if (!slug0) slug0 = 'c_' + require('crypto').createHash('md5').update(name).digest('hex').slice(0,8);
  if (!/^[a-z]/.test(slug0)) slug0 = 'c_' + slug0;
  return slug0;
}

async function upsertVolume(v) {
  const bookObj = volumeToBookObj(v);
  const data = await gql(MUTATION_UPSERT_BOOK, { book: bookObj });
  const book = data.insert_books_one;
  console.log(`Upserted book: ${book.title} (${book.id})`);

  const info = v.volumeInfo || {};
  // authors
  if (Array.isArray(info.authors)) {
    for (let i = 0; i < info.authors.length; i++) {
      const name = info.authors[i];
      try {
        const ad = await gql(MUTATION_UPSERT_AUTHOR, { name });
        const authorId = ad.insert_authors_one.id;
        await gql(MUTATION_UPSERT_BOOK_AUTHOR, { book_id: book.id, author_id: authorId, ord: i + 1 });
      } catch (e) {
        console.error('Author upsert error', e.message || e);
      }
    }
  }

  // categories
  if (Array.isArray(info.categories)) {
    for (const cname of info.categories) {
      try {
        const slug = slugifyCategory(cname);
        if (!slug) continue;
        // ensure category row exists with id=slug and comment=cname
        await gql(MUTATION_UPSERT_CATEGORY, { id: slug, comment: cname });
        // link book -> category using text category_id
        await gql(MUTATION_UPSERT_BOOK_CATEGORY, { book_id: book.id, category_id: slug });
      } catch (err) {
        console.error('Category upsert error', err.message || err);
      }
    }
  }

  // inventory: set a random quantity between 1 and 10 (inclusive)
  try {
    const quantity = Math.floor(Math.random() * 10) + 1; // 1..10
    await gql(MUTATION_UPSERT_INVENTORY, { inv: { book_id: book.id, quantity } });
    console.log(`Set inventory for book ${book.id} -> quantity=${quantity}`);
  } catch (err) {
    console.error('Inventory upsert error', err.message || err);
  }

  return book;
}

async function main() {
  // simple ESM-safe arg parser (avoids require('minimist'))
  const argv = {};
  for (const raw of process.argv.slice(2)) {
    if (raw.startsWith('--')) {
      const eq = raw.indexOf('=');
      if (eq === -1) {
        const key = raw.slice(2);
        argv[key] = true;
      } else {
        const key = raw.slice(2, eq);
        const val = raw.slice(eq + 1);
        argv[key] = val;
      }
    }
  }
  const query = argv.query || argv.q;
  const genreArg = (argv.genre || argv.g || '').toString().toLowerCase();
  const offset = Number(argv.offset || argv.o || 0);
  const isbns = argv.isbns || argv.isbn;
  const sortMode = (argv.sort || argv.s || '').toString().toLowerCase();
  const poolSizeArg = Number(argv.pool || argv.p || 0);

  let volumes = [];
  if (isbns) {
    const list = String(isbns).split(',').map(s => s.trim()).filter(Boolean);
    for (const isbn of list) {
      const items = await gbFetchByISBN(isbn);
      volumes.push(...items);
      if (volumes.length >= SEED_LIMIT) break;
    }
  } else if (query) {
    // apply optional genre subject qualifier if provided
    const finalQuery = (genreArg === 'fiction' || genreArg === 'nonfiction')
      ? `${query} subject:"${genreArg === 'fiction' ? 'Fiction' : 'Nonfiction'}"`
      : query;

    if (sortMode === 'alpha' || sortMode === 'title') {
      // When alphabetical sorting is requested, fetch a larger pool, sort by title,
      // then slice using numeric offset and SEED_LIMIT so we seed in title order.
      const defaultPool = Math.min(1000, Math.max(SEED_LIMIT * 10, 200));
      const desiredPool = poolSizeArg > 0 ? poolSizeArg : defaultPool;
      console.log(`Fetching pool of ${desiredPool} items to sort alphabetically...`);
      const pool = await gbFetchByQuery(finalQuery, desiredPool, 0);
      pool.sort((a, b) => {
        const ta = (a.volumeInfo?.title || '').toString();
        const tb = (b.volumeInfo?.title || '').toString();
        return ta.localeCompare(tb, undefined, { sensitivity: 'base' });
      });
      volumes = pool.slice(offset, offset + SEED_LIMIT);
    } else {
      volumes = await gbFetchByQuery(finalQuery, SEED_LIMIT, offset);
    }
  } else {
    // default to fiction books when no query/isbn provided
    if (sortMode === 'alpha' || sortMode === 'title') {
      const finalQuery = 'subject:"Fiction"';
      const defaultPool = Math.min(1000, Math.max(SEED_LIMIT * 10, 200));
      const desiredPool = poolSizeArg > 0 ? poolSizeArg : defaultPool;
      console.log(`Fetching pool of ${desiredPool} items to sort alphabetically...`);
      const pool = await gbFetchByQuery(finalQuery, desiredPool, 0);
      pool.sort((a, b) => {
        const ta = (a.volumeInfo?.title || '').toString();
        const tb = (b.volumeInfo?.title || '').toString();
        return ta.localeCompare(tb, undefined, { sensitivity: 'base' });
      });
      volumes = pool.slice(offset, offset + SEED_LIMIT);
    } else {
      volumes = await gbFetchByQuery('subject:"Fiction"', SEED_LIMIT, offset);
    }
  }

  if (!volumes.length) {
    console.log('No volumes found for the given query/ISBNs.');
    return;
  }

  for (let i = 0; i < Math.min(volumes.length, SEED_LIMIT); i++) {
    try {
      await upsertVolume(volumes[i]);
    } catch (e) {
      console.error('Failed to upsert volume', e.message || e);
    }
  }

  console.log('Seeding complete.');
}

// Run main when executed directly. In ESM, importing the module won't trigger this.
if (typeof process !== 'undefined' && process.argv && process.argv[1] && import.meta.url === `file://${process.argv[1]}`) {
  main().catch(err => { console.error(err); process.exit(1); });
}
