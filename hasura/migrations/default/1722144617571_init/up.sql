SET check_function_bodies = false;
BEGIN;

-- Books and related tables
CREATE TABLE IF NOT EXISTS public.books (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  google_volume_id text UNIQUE,
  title text,
  description text,
  publisher text,
  published_date text,
  page_count integer,
  print_type text,
  language text,
  image_thumbnail_url text,
  info_link text,
  preview_link text,
  canonical_volume_link text,
  average_rating numeric,
  ratings_count integer,
  industry_identifiers jsonb,
  sale_info jsonb,
  access_info jsonb,
  raw jsonb
);

CREATE TABLE IF NOT EXISTS public.authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE
);

CREATE TABLE IF NOT EXISTS public.book_authors (
  book_id uuid REFERENCES public.books(id) ON DELETE CASCADE,
  author_id uuid REFERENCES public.authors(id) ON DELETE RESTRICT,
  ord smallint NOT NULL DEFAULT 1,
  PRIMARY KEY (book_id, author_id)
);

CREATE TABLE IF NOT EXISTS public.categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE
);

CREATE TABLE IF NOT EXISTS public.book_categories (
  book_id uuid REFERENCES public.books(id) ON DELETE CASCADE,
  category_id uuid REFERENCES public.categories(id) ON DELETE RESTRICT,
  PRIMARY KEY (book_id, category_id)
);

ALTER TABLE public.books ADD COLUMN IF NOT EXISTS is_fiction boolean;

-- Users and user_books
CREATE TABLE IF NOT EXISTS public.users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE
);

CREATE TABLE IF NOT EXISTS public.user_books (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  book_id uuid NOT NULL REFERENCES public.books(id) ON DELETE CASCADE,
  purchased_at timestamp DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, book_id)
);

-- Helper view
CREATE OR REPLACE VIEW public.books_with_inferred_genre AS
SELECT b.*,
  (
    EXISTS (
      SELECT 1 FROM jsonb_array_elements_text(coalesce(b.raw->'volumeInfo'->'categories','[]'::jsonb)) AS cat(name) WHERE cat.name ILIKE '%fiction%'
    )
    AND NOT EXISTS (
      SELECT 1 FROM jsonb_array_elements_text(coalesce(b.raw->'volumeInfo'->'categories','[]'::jsonb)) AS cat(name) WHERE cat.name ILIKE '%non%fiction%'
    )
  ) AS inferred_is_fiction
FROM public.books b;

COMMIT;
