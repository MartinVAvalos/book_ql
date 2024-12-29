BEGIN;

CREATE TABLE "Books" (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    description TEXT
);

CREATE TABLE "UserBooks" (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES "Users"(id) ON DELETE CASCADE,
    book_id UUID NOT NULL REFERENCES "Books"(id) ON DELETE CASCADE,
    purchased_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, book_id) -- Ensures a user cannot buy the same book twice
);

COMMIT;
