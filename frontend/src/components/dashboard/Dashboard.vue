<template>
  <div class="dashboard-container">
    <img
      src="/library-logo-color-black.svg"
      alt="Cerritos Library"
      class="library-logo">
    <form id="searchForm" @submit.prevent="onSearch" class="search-form">
      <input 
        id="q"
        v-model="q"
        placeholder="Search books (title)"
        class="grow"
        ref="searchInput" />

      <select class="form-select" v-model="selectedCategoryId">
        <option class="form-select-option" value="">All categories</option>
        <option class="form-select-option"
          v-for="c in categories?.categories || []"
          :key="c.id"
          :value="c.id">
            {{ c.comment }}
        </option>
      </select>
    </form>

    <div v-if="booksFetching">Loading books...</div>
    <div v-if="booksError" class="error">Error loading books: {{ booksError.message }}</div>

    <Shelf
      :books="booksData?.books || []"
      @checked-out="onShelfCheckedOut"
      @returned="onShelfReturned"
    />

    <div class="toolbar">
      <button class="btn btn-info" @click="prevPage" :disabled="offset <= 0">Prev</button>
      <button class="btn btn-info" @click="nextPage" :disabled="offset + limit >= total">Next</button>
      <span id="pageInfo" style="color:#444;">{{ pageInfo }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, nextTick } from 'vue';
import { useQuery, useMutation } from '@urql/vue';
import { useRoute } from 'vue-router';
import {
  useGetBooksPagedQuery,
  useGetCategoriesQuery,
  useGetBooksByCategoryPagedQuery,
  useActiveLoansForBookQuery,
  useReturnLoanMutation,
  useGetEligibleUsersForBookQuery,
} from 'gql/api';
import * as api from '@/assets/generated/api';
import gql from 'graphql-tag';
import Shelf from '@/components/shelf/Shelf.vue';

const route = useRoute();
const q = ref('');
const selectedCategoryId = ref<string>("");
const offset = ref(0);
const limit = ref(10);

const usingCategory = computed(() => !!selectedCategoryId.value);

const ilikeQ = computed(() => (q.value.trim() ? `%${q.value.trim()}%` : '%%'));
const searchInput = ref<HTMLInputElement | null>(null);

// Categories
const { data: categories } = useGetCategoriesQuery();

onMounted(() => {
  // Check if there's a search query parameter in the URL
  if (route.query.q) {
    q.value = route.query.q as string;
    // Trigger a search with the query parameter
    onSearch();
  }
  
  // Focus the search input
  searchInput.value?.focus();
});

// ALL BOOKS
const allVars = computed(() => ({
  q: ilikeQ.value,
  limit: limit.value,
  offset: offset.value,
  order: 'asc' as const,
}));

const {
  data: allBooksData,
  fetching: allBooksFetching,
  error: allBooksError,
  executeQuery: reexecAll,
} = useGetBooksPagedQuery({
  variables: allVars,
  requestPolicy: 'cache-and-network',
  pause: usingCategory, // ref<boolean>
});

// CATEGORY BOOKS
const catVars = computed(() =>
    usingCategory.value
      ? {
          categoryId: selectedCategoryId.value,
          q: ilikeQ.value,
          limit: limit.value,
          offset: offset.value,
          order: 'asc' as const,
        }
      : {
          categoryId: '00000000-0000-0000-0000-000000000000',
          q: '%%',
          limit: 0,
          offset: 0,
          order: 'asc' as const,
        }
);

const {
  data: catBooksData,
  fetching: catBooksFetching,
  error: catBooksError,
  executeQuery: reexecCat,
} = useGetBooksByCategoryPagedQuery({
  variables: catVars,
  requestPolicy: 'cache-and-network',
  pause: computed(() => !usingCategory.value),
});

// Bindings
const booksData = computed(() => (usingCategory.value ? catBooksData.value : allBooksData.value));
const booksFetching = computed(() => (usingCategory.value ? catBooksFetching.value : allBooksFetching.value));
const booksError = computed(() => (usingCategory.value ? catBooksError.value : allBooksError.value));

const total = computed(() => Number(booksData.value?.books_aggregate?.aggregate?.count ?? 0));
const pageInfo = computed(() => {
  const t = total.value;
  if (!t) return 'No results';
  const start = Math.min(offset.value + 1, t);
  const end = Math.min(offset.value + limit.value, t);
  return `Showing ${start}-${end} of ${t}`;
});

// Handlers
function onSearch() {
  offset.value = 0;
  scrollToTop();
}

function nextPage() { 
  offset.value = Math.min(offset.value + limit.value, Math.max(0, total.value - limit.value)); 
  scrollToTop();
}

function prevPage() { 
  offset.value = Math.max(0, offset.value - limit.value); 
  scrollToTop();
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// handlers for shelf events
function onShelfCheckedOut(bk: any) {
  openCheckout(bk);
}

function onShelfReturned(_: any) {
  if (usingCategory.value) {
    reexecCat({ requestPolicy: 'network-only' });
  } else {
    reexecAll({ requestPolicy: 'network-only' });
  }
}

watch(usingCategory, (useCat: boolean) => {
  if (useCat) {
    reexecCat({ requestPolicy: 'network-only' });
  } else {
    reexecAll({ requestPolicy: 'network-only' });
  }
});

// Ensure changing the selected category (including switching between non-empty
// categories) triggers a refetch. Also reset pagination.
watch(selectedCategoryId, async (newId: string, oldId: string) => {
  offset.value = 0;
  await nextTick(); // let pause/catVars recompute
  if (newId) {
    reexecCat({ requestPolicy: 'network-only' });
  } else {
    reexecAll({ requestPolicy: 'network-only' });
  }
});

watch(booksData, (books: any) => {
  // reactive hook left intentionally empty
});

// --- Checkout modal state & users ---
const showCheckoutModal = ref(false);
const checkoutBook = ref<any>(null);

async function openCheckout(book: any) {
  checkoutBook.value = book;
  showCheckoutModal.value = true;
  await nextTick(); // ensure usersVars/pause recompute with the new bookId
  usersExec({ requestPolicy: 'network-only' });
}

function closeCheckout() {
  showCheckoutModal.value = false;
  checkoutBook.value = null;
  qUsers.value = '';
}

// hamburger moved to Navbar component

// return modal moved to Book.vue

// --- Checkout users (server-side filtered to exclude active borrower of this book) ---
const qUsers = ref('');

const usersVars = computed(() => ({
  bookId: checkoutBook.value?.id ?? '00000000-0000-0000-0000-000000000000',
  q: qUsers.value.trim() ? `%${qUsers.value.trim()}%` : '%%',
}));

const {
  data: usersData,
  fetching: usersFetching,
  error: usersError,
  executeQuery: usersExec,
} = useGetEligibleUsersForBookQuery({
  variables: usersVars,
  requestPolicy: 'cache-and-network',
  pause: computed(() => !showCheckoutModal.value || !checkoutBook.value?.id),
});

// list comes straight from server; no client-side exclusion needed
const filteredUsers = computed(() => usersData.value?.users ?? []);


const InsertLoanDoc = gql`
  mutation InsertLoan($object: book_loans_insert_input!) {
    insert_book_loans_one(object: $object) { id }
  }
`;
// create a mutation handler and a compatibility wrapper for executing it.
// Some versions of @urql/vue return a tuple [result, execute] while others
// expose an object with `.executeMutation`. Support both shapes.
const insertLoanMutation = useMutation(InsertLoanDoc) as any;
const executeInsertLoan = async (vars: any) => {
  // tuple style [result, execute]
  if (Array.isArray(insertLoanMutation) && typeof insertLoanMutation[1] === 'function') {
    return await insertLoanMutation[1](vars);
  }
  // object style with executeMutation
  if (insertLoanMutation && typeof insertLoanMutation.executeMutation === 'function') {
    return await insertLoanMutation.executeMutation(vars);
  }
  throw new Error('useMutation returned unexpected shape');
};

const checkingOut = ref(false);

async function selectUser(u: any) {
  if (!checkoutBook.value || !checkoutBook.value.id) return;
  checkingOut.value = true;
  try {
    const object = {
      book_id: checkoutBook.value.id,
      user_id: u.id,
      borrowed_at: new Date().toISOString(),
      due_at: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    };

    const res = await executeInsertLoan({ object });
    if (res.error) {
      console.error('Insert loan failed', res.error);
    } else {
      // refresh book list counts
      if (usingCategory.value) {
        reexecCat({ requestPolicy: 'network-only' });
      } else {
        reexecAll({ requestPolicy: 'network-only' });
      }
      closeCheckout();
    }
  } catch (err) {
    console.error('Checkout error', err);
  } finally {
    checkingOut.value = false;
  }
}
</script>


<style scoped lang="scss">
$blue: #0069A4;
$green: #388528;
$orange: #D85300;
$yellow: #F1B700;
.dashboard-container {
  padding: 3rem 2rem;
}

.library-logo {
  width: 10rem;
}

/* search form */
.search-form {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 0.75rem;
  border-radius: .5rem;
  background-image: linear-gradient(to right, $blue 0%, $green 33%, $orange 66%, $yellow 100%);

  
  select.form-select {
    appearance: none;
    -webkit-appearance: none;
    color: black;
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: .25rem;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 0.2s ease;    

    &:hover {
        border: 2px solid $blue;
    }
    option.form-select-option {}
  }
}

/* form elements */
input,
select,
button {
  padding: 0.5rem 0.6rem;
  font: inherit;
}

/* book card */
.card {
  border: 1px solid #e3e3e3;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
}

.row {
  display: flex;
  gap: var(--gap);
}

.grow {
  flex: 1 1 auto;
  min-width: 0;
}

img {
  max-height: 120px;
  border-radius: 0.25rem;
}

.title {
  font-weight: 650;
  margin-bottom: 0.2rem;
}

.meta {
  color: #555;
  font-size: 0.9rem;
  margin: 0.15rem 0 0.4rem;
}

.desc {
  color: #222;
}

/* top-right hamburger */
.top-right {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.hamburger-btn {
  width: 40px;
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 6px;
  cursor: pointer;
}
.hamburger-btn .bar {
  height: 3px;
  background: #333;
  border-radius: 2px;
}
.hamburger-menu {
  position: absolute;
  top: 3.25rem;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  z-index: 40;
}
.hamburger-menu ul {
  list-style: none;
  padding: 0.5rem 0.75rem;
}
.hamburger-menu li {
  padding: 0.35rem 0.25rem;
}
.hamburger-menu a {
  color: #111;
  text-decoration: none;
}


/* collapsed description (clamp to 3 lines) */
.desc.collapsed {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* standard property for broader compatibility */
  line-clamp: 3;
}

/* toolbar */
.toolbar {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  align-items: center;
}

.toolbar button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.error {
  color: #b00020;
  white-space: pre-wrap;
}

/* responsive */
@media (max-width: 800px) {
  .search-form {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-form input,
  .search-form select {
    width: 100%;
  }
}

@media (max-width: 720px) {
  .row {
    flex-direction: column;
  }

  img {
    max-height: 160px;
    width: auto;
  }
}

/* modal styles */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
}

.modal {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  width: min(760px, 96%);
  max-height: 80vh;
  overflow: auto;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.modal .search {
  width: 100%;
  margin-bottom: 0.5rem;
}

.user-list-modal {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.user-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #eee;
  border-radius: 6px;
}

.user-row .name {
  font-weight: 600;
}

.user-row .email {
  color: #666;
  font-size: 0.9rem;
}

.status {
  margin: 0.5rem 0;
  color: #444;
}

.status.error {
  color: #b00020;
}

.btn {
    padding: .5rem 1rem;
    border-radius: .25rem;
    transition: all 0.3s ease;
    cursor: pointer;
}
.btn-info {
    border: 2px solid $blue;
    background: #fff;

    &:hover {
        background: $blue;
        color: #fff;
    }
}
</style>
