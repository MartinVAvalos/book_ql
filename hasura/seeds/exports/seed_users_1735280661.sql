--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: muse
--

COPY public."Users" (id, name, email) FROM stdin;
a17562b7-9ea9-4a33-a0f8-edf1535e20cf	John Doe	john.doe@example.com
ed8cd3fe-61c5-4def-9e33-aefb98b17b3f	Martin Smith	martin.smith@example.com
ddfa8a13-cd78-49d9-b9d3-d7ccb2f33947	Jesus Christ	my.savior@example.com
eeb38982-b410-44c0-87db-121a40159ada	Alice Wonderland	alice@example.com
\.

--
-- Data for Name: Books; Type: TABLE DATA; Schema: public; Owner: muse
--

COPY public."Books" (id, title, author, description) FROM stdin;
a17562b7-9ea9-4a33-a0f8-edf1535e21aa	Harry Potter	J.K. Rowling	A fantasy novel about a young wizard.
ed8cd3fe-61c5-4def-9e33-aefb98b17b3a	A Series of Unfortunate Events	Lemony Snicket	A dark comedy following the Baudelaire orphans.
ddfa8a13-cd78-49d9-b9d3-d7ccb2f33948	We Who Wrestle with God	Samuel Levi	A philosophical exploration of faith and struggle.
eeb38982-b410-44c0-87db-121a40159adf	The Hobbit	J.R.R. Tolkien	A fantasy adventure featuring Bilbo Baggins.
aaea1982-b411-44c0-87db-121a40159adf	To Kill a Mockingbird	Harper Lee	A classic novel about justice and morality in the Deep South.
\.

--
-- Data for Name: UserBooks; Type: TABLE DATA; Schema: public; Owner: muse
--

COPY public."UserBooks" (id, user_id, book_id, purchased_at) FROM stdin;
b26562b7-9ea9-4a33-a0f8-edf1535e21bb	a17562b7-9ea9-4a33-a0f8-edf1535e20cf	a17562b7-9ea9-4a33-a0f8-edf1535e21aa	2024-12-23 12:00:00
b36562b7-9ea9-4a33-a0f8-edf1535e21cc	a17562b7-9ea9-4a33-a0f8-edf1535e20cf	ed8cd3fe-61c5-4def-9e33-aefb98b17b3a	2024-12-23 12:10:00
b46562b7-9ea9-4a33-a0f8-edf1535e21dd	ed8cd3fe-61c5-4def-9e33-aefb98b17b3f	a17562b7-9ea9-4a33-a0f8-edf1535e21aa	2024-12-23 12:20:00
b56562b7-9ea9-4a33-a0f8-edf1535e21ee	ed8cd3fe-61c5-4def-9e33-aefb98b17b3f	ddfa8a13-cd78-49d9-b9d3-d7ccb2f33948	2024-12-23 12:30:00
b66562b7-9ea9-4a33-a0f8-edf1535e21ff	ddfa8a13-cd78-49d9-b9d3-d7ccb2f33947	eeb38982-b410-44c0-87db-121a40159adf	2024-12-23 12:40:00
b76562b7-9ea9-4a33-a0f8-edf1535e21aa	ddfa8a13-cd78-49d9-b9d3-d7ccb2f33947	aaea1982-b411-44c0-87db-121a40159adf	2024-12-23 12:50:00
\.

--
-- PostgreSQL database dump complete
--