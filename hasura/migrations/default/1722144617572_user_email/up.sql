BEGIN;

-- Add a new column 'email' to the Users table
ALTER TABLE public."Users"
ADD COLUMN email text NOT NULL;

COMMIT;