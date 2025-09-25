BEGIN;

-- 1) Inventory: how many copies of each book the library owns
CREATE TABLE IF NOT EXISTS public.book_inventory (
  book_id  uuid PRIMARY KEY REFERENCES public.books(id) ON DELETE CASCADE,
  quantity integer NOT NULL DEFAULT 0 CHECK (quantity >= 0)
);

-- 2) Loans: one row per borrowed copy
CREATE TABLE IF NOT EXISTS public.book_loans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  book_id    uuid NOT NULL REFERENCES public.books(id)  ON DELETE CASCADE,
  user_id    uuid NOT NULL REFERENCES public.users(id)  ON DELETE CASCADE,
  borrowed_at timestamptz NOT NULL DEFAULT now(),
  due_at      timestamptz,
  returned_at timestamptz
);

-- Index for fast lookups of active loans
CREATE INDEX IF NOT EXISTS idx_book_loans_active
  ON public.book_loans (book_id)
  WHERE returned_at IS NULL;

-- Optional: prevent a user from having multiple active loans of the same book
CREATE UNIQUE INDEX IF NOT EXISTS uniq_active_loan_per_user_book
  ON public.book_loans (user_id, book_id)
  WHERE returned_at IS NULL;

-- 3) View: availability = inventory - active loans
CREATE OR REPLACE VIEW public.book_availability AS
SELECT
  bi.book_id,
  bi.quantity,
  COALESCE(al.active_loans, 0)   AS checked_out,
  bi.quantity - COALESCE(al.active_loans, 0) AS available
FROM public.book_inventory bi
LEFT JOIN (
  SELECT book_id, count(*)::int AS active_loans
  FROM public.book_loans
  WHERE returned_at IS NULL
  GROUP BY book_id
) al USING (book_id);

-- 4) View: current borrowers (who has what)
CREATE OR REPLACE VIEW public.book_current_borrowers AS
SELECT
  bl.book_id,
  bl.id AS loan_id,
  u.id  AS user_id,
  u.name,
  u.email,
  bl.borrowed_at,
  bl.due_at
FROM public.book_loans bl
JOIN public.users u ON u.id = bl.user_id
WHERE bl.returned_at IS NULL;

COMMIT;
