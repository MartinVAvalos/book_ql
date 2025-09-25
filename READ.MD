# Before running project you have to complete this list

- Aqcuire API Key: [Google Cloud API Services](https://console.cloud.google.com/apis/credentials?project=checkout-bcdb3)
  - Click "+ Create credentials"
  - Click "API key"
- Place api key in docker/.env
  - GOOGLE_BOOKS_API_KEY={YOUR_KEY}
- Make your passwords and postgres user
  - HASURA_GRAPHQL_ADMIN_SECRET={PASSWORD_TO_ENTER_HASURA_CONSOLE}
  - POSTGRES_PASSWORD={DB_PASSWORD}
  - POSTGRES_USER=muse={DB_USER}

# Project quick start

To start the project

- Start services (dev):

  make dev

- Seed development data:

  make seed_dev

- Open the Hasura console and track fields/relationships:

  http://localhost:5050/console/data/default/schema/public

  Click: "Track fields and relationships" for any untracked tables.

- Open the frontend:

  http://localhost:4200/

Side note

- Create users here:

  http://localhost:4200/user

Notes

- If you run into port conflicts, check for other services using ports 5050 or 4200.
- The `Makefile` targets above are the recommended entry points for local development.

# Project Summary

Project implements vue, hasura (GraphQL), and Postgres to manage a library. Manage users and the books they have checked out all under a dockerized container, making this project capable of being pushed onto servers easier and therefore apt for incremental updates
