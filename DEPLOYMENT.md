# Book Library Project Production Deployment

This document describes how to deploy the Book Library project to production at the `/project/library` endpoint.

## Overview

The Book Library project consists of:

- **Frontend**: Vue.js SPA with Vite build system
- **Backend**: Hasura GraphQL Engine
- **Database**: PostgreSQL

The project will be accessible at: `https://vigilantmuse.com/project/library/`

## Prerequisites

1. Docker and Docker Buildx installed
2. Access to the production server
3. Environment variables configured

## Environment Configuration

The project uses the existing environment configuration from `/projects/book_ql/docker/.env`. For production, these values are hardcoded in `docker-compose.prod.yml`:

**Database Configuration:**

- User: `muse`
- Password: `Muse1997!`
- Database: `postgres`

**Hasura Configuration:**

- Admin Secret: `vigilantmuse`

**Frontend Configuration:**

- GraphQL URL: `https://vigilantmuse.com/project/library/graphql`

**Google Books API:**

- API Key: `AIzaSyBdNS6ZbJILIrZcJPzjZLgWAp6FDq_yp68`

> **Note**: For enhanced security in production, consider using Docker secrets or environment variables instead of hardcoded values.

## Deployment Commands

### Build and Deploy Everything

```bash
# Build and push all images including book library
make prod-build-images

# Deploy all services including book library
make prod-deploy
```

### Book Library Specific Commands

```bash
# Build only the book library frontend
make bookql-build

# Deploy only book library services
make bookql-deploy

# Full book library deployment (build + deploy)
make bookql-full

# View book library logs
make bookql-logs
```

### Configuration Updates

```bash
# Push updated configuration files
make prod-compose-push

# Update and reload Caddy configuration
make prod-caddy
```

## Architecture

### Routing (Caddyfile)

- `/project/library/` → Book Library Vue.js frontend
- `/project/library/graphql/` → Hasura GraphQL API

### Services (docker-compose.prod.yml)

- `bookql_frontend`: Vue.js app served by nginx
- `bookql_hasura`: Hasura GraphQL Engine
- `bookql_postgres`: PostgreSQL database

### Networks

- `webnet`: External network for web-facing services
- `bookql_internal`: Internal network for database communication

## Database Management

### Migrations

Database migrations are automatically applied on Hasura startup using the mounted volumes:

- `/projects/book_ql/hasura/migrations` → `/hasura-migrations`
- `/projects/book_ql/hasura/metadata` → `/hasura-metadata`

### Backup

```bash
# Connect to the production database
ssh god_is_for_me@137.184.184.115 "cd ~/apps/vm && docker compose -f docker-compose.prod.yml exec bookql_postgres pg_dump -U bookql_user bookql > backup.sql"
```

## Troubleshooting

### Check Service Status

```bash
make prod-ps
```

### View Logs

```bash
# All book library services
make bookql-logs

# Specific service
ssh god_is_for_me@137.184.184.115 "cd ~/apps/vm && docker compose -f docker-compose.prod.yml logs -f bookql_frontend"
```

### Restart Services

```bash
# Restart all book library services
ssh god_is_for_me@137.184.184.115 "cd ~/apps/vm && docker compose -f docker-compose.prod.yml restart bookql_frontend bookql_hasura bookql_postgres"
```

## Security Notes

1. Hasura console is disabled in production (`HASURA_GRAPHQL_ENABLE_CONSOLE: "false"`)
2. Database is isolated on internal network
3. Use strong passwords for database and Hasura admin secret
4. GraphQL endpoint is protected by Hasura's built-in security features

## URLs

- **Production Frontend**: https://vigilantmuse.com/project/library/
- **GraphQL API**: https://vigilantmuse.com/project/library/graphql/ (requires admin secret)

## Development vs Production

- **Development**: Uses `docker/docker-compose.yml` with exposed ports
- **Production**: Uses `docker-compose.prod.yml` with internal networking and reverse proxy
- **Base Path**: Production frontend is configured with `/project/library/` base path
