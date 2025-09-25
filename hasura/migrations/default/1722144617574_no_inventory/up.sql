BEGIN;

-- ───────────────────────────────────────────────────────────────
-- A) Prevent creating an active loan when no copies are available
--    (fires on INSERT and on UPDATEs that (re)activate a loan)
-- ───────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.assert_available_copy()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
  owned int;
  out_now int;
BEGIN
  -- Only enforce for "active" loans (returned_at IS NULL)
  IF (TG_OP = 'INSERT' AND NEW.returned_at IS NULL)
     OR (TG_OP = 'UPDATE' AND NEW.returned_at IS NULL
         AND (OLD.returned_at IS NOT NULL OR OLD.book_id <> NEW.book_id)) THEN

    SELECT quantity INTO owned
    FROM public.book_inventory
    WHERE book_id = NEW.book_id;

    IF owned IS NULL THEN
      RAISE EXCEPTION 'No inventory row for book %', NEW.book_id
        USING ERRCODE = '23514';
    END IF;

    SELECT count(*) INTO out_now
    FROM public.book_loans
    WHERE book_id = NEW.book_id
      AND returned_at IS NULL
      -- exclude the current row if UPDATE
      AND (TG_OP = 'INSERT' OR id <> NEW.id);

    IF out_now + 1 > owned THEN
      RAISE EXCEPTION 'No copies available to loan (owned=%, out=%)', owned, out_now
        USING ERRCODE = '23514';
    END IF;
  END IF;

  RETURN NEW;
END
$$;

DROP TRIGGER IF EXISTS trg_assert_available_copy_ins ON public.book_loans;
CREATE TRIGGER trg_assert_available_copy_ins
BEFORE INSERT ON public.book_loans
FOR EACH ROW
EXECUTE FUNCTION public.assert_available_copy();

DROP TRIGGER IF EXISTS trg_assert_available_copy_upd ON public.book_loans;
CREATE TRIGGER trg_assert_available_copy_upd
BEFORE UPDATE OF book_id, returned_at ON public.book_loans
FOR EACH ROW
EXECUTE FUNCTION public.assert_available_copy();


-- ───────────────────────────────────────────────────────────────
-- B) Prevent inventory reductions below active loans
--    (fires when quantity changes)
-- ───────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.prevent_inventory_below_active_loans()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
  active_cnt int;
BEGIN
  IF NEW.quantity < 0 THEN
    RAISE EXCEPTION 'Quantity cannot be negative'
      USING ERRCODE = '23514';
  END IF;

  SELECT count(*) INTO active_cnt
  FROM public.book_loans
  WHERE book_id = NEW.book_id
    AND returned_at IS NULL;

  IF NEW.quantity < active_cnt THEN
    RAISE EXCEPTION
      'Cannot set quantity (%) below active loans (%) for book %',
      NEW.quantity, active_cnt, NEW.book_id
      USING ERRCODE = '23514';
  END IF;

  RETURN NEW;
END
$$;

DROP TRIGGER IF EXISTS trg_inventory_not_below_loans ON public.book_inventory;
CREATE TRIGGER trg_inventory_not_below_loans
BEFORE UPDATE OF quantity ON public.book_inventory
FOR EACH ROW
EXECUTE FUNCTION public.prevent_inventory_below_active_loans();


-- ───────────────────────────────────────────────────────────────
-- C) Prevent deleting inventory if there are active loans
-- ───────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.prevent_delete_inventory_with_active_loans()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
  active_cnt int;
BEGIN
  SELECT count(*) INTO active_cnt
  FROM public.book_loans
  WHERE book_id = OLD.book_id
    AND returned_at IS NULL;

  IF active_cnt > 0 THEN
    RAISE EXCEPTION
      'Cannot delete inventory: % active loans exist for book %',
      active_cnt, OLD.book_id
      USING ERRCODE = '23514';
  END IF;

  RETURN OLD;
END
$$;

DROP TRIGGER IF EXISTS trg_inventory_delete_guard ON public.book_inventory;
CREATE TRIGGER trg_inventory_delete_guard
BEFORE DELETE ON public.book_inventory
FOR EACH ROW
EXECUTE FUNCTION public.prevent_delete_inventory_with_active_loans();

COMMIT;
