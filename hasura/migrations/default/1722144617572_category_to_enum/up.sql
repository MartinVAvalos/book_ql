-- Migration: convert categories table to single-text PK (Hasura enum compatible)
-- Creates a new text-keyed categories table, migrates values using sanitized slugs, updates book_categories FKs and PK.
BEGIN;

-- 1) create new categories table with text PK and optional comment
CREATE TABLE IF NOT EXISTS public.categories_new (
  id text PRIMARY KEY,
  comment text
);

-- 2) build a mapping from old uuid -> GraphQL-safe slug and populate new table
CREATE TEMP TABLE mapped AS
SELECT old_id, name,
  CASE WHEN rn = 1 THEN slug0 ELSE slug0 || '_' || rn::text END AS slug
FROM (
  SELECT old_id, name, slug0, row_number() OVER (PARTITION BY slug0 ORDER BY old_id) AS rn
  FROM (
    SELECT id AS old_id, name,
      -- slug0: ensure it starts with a letter; fallback to c_<md5> when base becomes empty
      CASE
        WHEN base_slug = '' THEN 'c_' || substr(md5(name),1,8)
        WHEN base_slug ~ '^[a-z]' THEN base_slug
        ELSE 'c_' || base_slug
      END AS slug0
    FROM (
      SELECT id, name,
        trim(both '_' from regexp_replace(lower(coalesce(name,'')), '[^a-z0-9]+', '_', 'g')) AS base_slug
      FROM public.categories
    ) s1
  ) s2
) s3;

INSERT INTO public.categories_new (id, comment)
SELECT slug, name FROM mapped
ON CONFLICT (id) DO NOTHING;

-- 3) add a temporary text column to book_categories and populate it by joining the mapping on old uuid
ALTER TABLE public.book_categories ADD COLUMN IF NOT EXISTS category_id_text text;

UPDATE public.book_categories bc
SET category_id_text = m.slug
FROM mapped m
WHERE bc.category_id = m.old_id;

-- 4) drop constraints that reference the old uuid column (if they exist)
ALTER TABLE public.book_categories DROP CONSTRAINT IF EXISTS book_categories_category_id_fkey;
ALTER TABLE public.book_categories DROP CONSTRAINT IF EXISTS book_categories_pkey;

-- 5) remove the old uuid column and rename the new text column
ALTER TABLE public.book_categories DROP COLUMN IF EXISTS category_id;
ALTER TABLE public.book_categories RENAME COLUMN category_id_text TO category_id;

-- 6) add FK to the new categories table and recreate primary key
ALTER TABLE public.book_categories
  ADD CONSTRAINT book_categories_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories_new(id) ON DELETE RESTRICT;

ALTER TABLE public.book_categories
  ADD CONSTRAINT book_categories_pkey PRIMARY KEY (book_id, category_id);

-- 7) drop the old categories table and rename the new one
DROP TABLE IF EXISTS public.categories;
ALTER TABLE public.categories_new RENAME TO categories;

COMMIT;
