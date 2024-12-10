SET check_function_bodies = false;
CREATE TABLE public."Users" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL
);
ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
