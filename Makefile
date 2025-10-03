-include docker/.env
.EXPORT_ALL_VARIABLES:

# Variables
DC=docker compose
DOCK_PATH=docker/docker-compose.yml
FRONTEND_PORT ?= $(FRONTEND_PORT)
HASURA_PORT   ?= $(HASURA_PORT)
FrontendStr=echo "Frontend http://localhost:$(FRONTEND_PORT)"
BackendStr=echo "Hasura http://localhost:$(HASURA_PORT)"
# Start up message
START_UP_MESSAGE=$(FrontendStr) && $(BackendStr)
RUN=$(DC) -f $(DOCK_PATH)
POSTGRES_USER ?= $(POSTGRES_USER)
# docker compose comands have to be ran within the docker file
Exec=cd docker
# Inside containers, talking to service name is robust:
HASURA_ENDPOINT  ?= http://graphql-engine:8080/v1/graphql
# Prefer .env's HASURA_GRAPHQL_ADMIN_SECRET, but keep Makefile name HASURA_SECRET
# If no admin secret provided, default to 1234
HASURA_SECRET    ?= $(if $(HASURA_GRAPHQL_ADMIN_SECRET),$(HASURA_GRAPHQL_ADMIN_SECRET),1234)
GOOGLE_BOOKS_API_KEY ?= $(GOOGLE_BOOKS_API_KEY)
FRONTEND_CONT     ?= docker-frontend-1
SEED_SCRIPT_PATH  ?= /app/seed_books.js
# DEFAULT_QUERY     ?= Fiction
# Allow "make seed_books 1" where 1 is COUNT
SEED_COUNT ?= $(word 2,$(MAKECMDGOALS))

wait-for-hasura:
	@echo "Waiting for Hasura GraphQL Engine to be ready..."
	@sleep 30
	@while ! curl -s "http://localhost:$(HASURA_PORT)/healthz" > /dev/null; do \
		echo "Hasura is not ready. Retrying..."; \
		sleep 2; \
	done
	@echo "Hasura is ready!"


dev:
	$(RUN) up -d --no-build || $(RUN) up --build -d
	@make wait-for-hasura
	@make migrate
	@make reload-metadata
	@$(START_UP_MESSAGE)

check-db-tables:
	docker exec -i docker-postgres-1 psql -U $(POSTGRES_USER) -d postgres -c "\dt"

debug: # TODO: May need to be updated. Here's the original command: $(RUN) up --build && ${START_UP_MESSAGE}
	$(RUN) up --build
# @make wait-for-hasura
# @make migrate	
# ${START_UP_MESSAGE}

stop:
	$(RUN) down

restart:
	$(RUN) restart

# status:
# exec -it -u hasurauser api hasura-cli --database-name default migrate status
# docker exec -it -u hasura docker-graphql-engine-1 hasura-cli --database-name default migrate status

migrate:
	docker exec -it docker-graphql-engine-1 hasura-cli --project /hasura --endpoint http://graphql-engine:8080 --admin-secret $(HASURA_SECRET) migrate apply --database-name default

reload-metadata:
	docker exec -it docker-graphql-engine-1 hasura-cli --project /hasura --endpoint http://graphql-engine:8080 --admin-secret $(HASURA_SECRET) metadata reload

new-migration:
	@source ops/helpers.sh; new_migration

status:
	docker exec -it docker-graphql-engine-1 hasura-cli --project /hasura --endpoint http://graphql-engine:8080 --admin-secret $(HASURA_SECRET) --database-name default migrate status

psql-pipe:
#Ex:  make psql-pipe < ./hasura/migrations/default/1722144617571_init/down.sql 
	docker exec -i docker-postgres-1 psql -U $(POSTGRES_USER) -d postgres

generate-types:
	$(Exec) && $(DC) exec frontend sh -c 'cd /app && npm run generate'

build-frontend:
	$(Exec) && $(DC) exec frontend sh -c 'cd /app && npm run build'

build-frontend-fast:
	$(Exec) && $(DC) exec frontend sh -c 'cd /app && npm run build:skip-check'

build-prod: build-frontend
	@echo "Production build completed. Check frontend/dist/ directory."


export: // needs work
	docker exec -it docker-graphql-engine-1 hasura-cli --project /hasura --endpoint http://graphql-engine:8080 --admin-secret $(HASURA_SECRET) metadata export

seed:
	@echo "Seeding the database with the latest dump file..."
	# Find the latest seed file
	@LATEST_DUMP=$(shell ls -t hasura/seeds/exports/seed_users_*.sql | head -n 1) && \
	docker exec -i docker-postgres-1 psql -U ${POSTGRES_USER} -d postgres < $$LATEST_DUMP
	@echo "Database seeding complete."

export-seed:
	@echo "Exporting data from the database..."
	# Create the export directory if it doesn't exist
	@mkdir -p hasura/seeds/exports
	# Dump the Users table into a file with a unique timestamp
	docker exec -i docker-postgres-1 pg_dump -U ${POSTGRES_USER} -d postgres --data-only --table='"Users"' > hasura/seeds/exports/seed_users_$(shell date +%s).sql
	# Generate a hash of the exported file
	@cd hasura/seeds/exports && ls -t | head -n 1 | xargs -I {} sh -c "shasum -a 256 {} | cut -d' ' -f1 > latest_hash.txt"
	# Symlink the latest dump to `seed_users.sql` for seeding
	@cd hasura/seeds/exports && ln -sf $(shell ls -t | head -n 1) ../seed_users.sql
	@echo "Export completed. Most recent seed file: hasura/seeds/seed_users.sql"

create-empty-seed:
	@echo "Creating a new empty seed file..."
	# Create the export directory if it doesn't exist
	@mkdir -p hasura/seeds/exports
	# Create a new empty seed file with a unique timestamp
	@touch hasura/seeds/exports/seed_users_$(shell date +%s).sql
	# Generate a hash for the empty seed file
	@cd hasura/seeds/exports && ls -t | head -n 1 | xargs -I {} sh -c "shasum -a 256 {} | cut -d' ' -f1 > latest_hash.txt"
	# Update the symbolic link to point to the new empty seed file
	@cd hasura/seeds/exports && ln -sf $(shell ls -t | head -n 1) ../seed_users.sql
	@echo "Empty seed file created: hasura/seeds/exports/seed_users_$(shell date +%s).sql"
	@echo "Hash updated in latest_hash.txt."

logs:
	$(RUN) logs graphql-engine

teardown:
	@echo "Wiping DB (if running) and stopping containers..."
	@make wipe-db
	@make stop
	@docker volume rm $$(docker volume ls -q) || true
	@docker system prune -a --volumes --force

wipe-db:
	@echo "Attempting to wipe Postgres public schema (container: docker-postgres-1)..."
	@if [ -n "$$(docker ps -q -f name=docker-postgres-1)" ]; then \
	  docker exec -i docker-postgres-1 psql -U ${POSTGRES_USER} -d postgres -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public; GRANT ALL ON SCHEMA public TO ${POSTGRES_USER}; GRANT ALL ON SCHEMA public TO public;"; \
	  echo "Database wiped."; \
	else \
	  echo "Postgres container not running; skipping wipe."; \
	fi

postgres:
	$(RUN) exec postgres psql -U $(POSTGRES_USER) -d postgres

.PHONY: seed_books seed_isbns seed_dev _consume_arg wipe-db teardown

# Allow "make seed_books 1" where 1 is COUNT" ---- make seed_books 1000 EXTRA='--genre=fiction --sort=alpha --pool=1000 --offset=0'
SEED_COUNT ?= $(word 2,$(MAKECMDGOALS))

seed_books: _consume_arg ## usage: make seed_books 10  (fetches fiction alpha)
	@echo "Seeding books via Hasura: count=$(SEED_COUNT) genre=fiction alpha order"
	docker exec \
	  -e HASURA_URL="$(HASURA_ENDPOINT)" \
	  -e HASURA_ADMIN_SECRET="$(HASURA_SECRET)" \
	  -e GOOGLE_BOOKS_API_KEY="$(GOOGLE_BOOKS_API_KEY)" \
	  -e SEED_LIMIT="$(SEED_COUNT)" \
	  $(FRONTEND_CONT) \
	  node "$(SEED_SCRIPT_PATH)" --genre=fiction --sort=alpha $(EXTRA)

seed_dev: ## Run the dev seeder (1000 fiction, alpha, pool=1000, offset=0)
	$(MAKE) seed_books SEED_COUNT=1000 EXTRA='--genre=fiction --sort=alpha --pool=1000 --offset=0'

# Example: make seed_isbns ISBN=9781491927281,9780596805524
ISBN ?=
seed_isbns: ## seed by ISBN list
	@if [ -z "$(ISBN)" ]; then echo "Provide ISBN=comma,separated,list"; exit 1; fi
	docker exec \
	  -e HASURA_URL="$(HASURA_ENDPOINT)" \
	  -e HASURA_ADMIN_SECRET="$(HASURA_SECRET)" \
	  -e GOOGLE_BOOKS_API_KEY="$(GOOGLE_BOOKS_API_KEY)" \
	  $(FRONTEND_CONT) \
	  node "$(SEED_SCRIPT_PATH)" --isbns=$(ISBN)

# Swallow bare args like "1" so make doesn't treat them as targets
_consume_arg:
	@true
%:
	@:
