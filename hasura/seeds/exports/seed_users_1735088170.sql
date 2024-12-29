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
ed8cd3fe-61c5-4def-9e33-aefb98b17b3f	martin	guerovera37@icloud.com
ddfa8a13-cd78-49d9-b9d3-d7ccb2f33947	Jesus	mysavior@loves.me
eeb38982-b410-44c0-87db-121a40159ada	Alice Wonderland	alice.johnson@example.com
\.


--
-- PostgreSQL database dump complete
--

