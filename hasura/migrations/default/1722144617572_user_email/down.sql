BEGIN;

-- Remove the email column if rolling back
ALTER TABLE public."Users"
DROP COLUMN email;

COMMIT;