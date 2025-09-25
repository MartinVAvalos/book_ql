-- Seed: populate public.book_inventory with a random quantity >= 1 for each book
-- Usage: psql -U <user> -d <db> -f hasura/seeds/exports/seed_book_inventory.sql
BEGIN;

-- Insert or update inventory for every book. Quantities are random 1..10.
INSERT INTO public.book_inventory (book_id, quantity)
SELECT b.id, (floor(random()*10) + 1)::int
FROM public.books b
ON CONFLICT (book_id) DO UPDATE
  SET quantity = EXCLUDED.quantity;

COMMIT;
