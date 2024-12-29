# Variables
DC=docker compose
DOCK_PATH=docker/docker-compose.yml
FrontendStr=echo "Frontend http://localhost:4200"
BackendStr=echo "Hasura http://localhost:5050"
# Start up message
START_UP_MESSAGE=$(FrontendStr) && $(BackendStr)
RUN=$(DC) -f $(DOCK_PATH)
POSTGRES_USER=muse
# docker compose comands have to be ran within the docker file
Exec=cd docker

wait-for-hasura:
	@echo "Waiting for Hasura GraphQL Engine to be ready..."
	@sleep 30
	@while ! curl -s "http://localhost:5050/healthz" > /dev/null; do \
		echo "Hasura is not ready. Retrying..."; \
		sleep 2; \
	done
	@echo "Hasura is ready!"

dev:
	$(RUN) up --build -d
	@make wait-for-hasura
	@make migrate
	@make reload-metadata
	$(START_UP_MESSAGE)

check-db-tables:
	docker exec -i docker-postgres-1 psql -U muse -d postgres -c "\dt"

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

# https://hasura.io/docs/2.0/migrations-metadata-seeds/manage-migrations/

migrate:
	docker exec -it docker-graphql-engine-1 hasura-cli --project /hasura --endpoint http://graphql-engine:8080 --admin-secret vigilantmuse migrate apply --database-name default

reload-metadata:
	docker exec -it docker-graphql-engine-1 hasura-cli --project /hasura --endpoint http://graphql-engine:8080 --admin-secret vigilantmuse metadata reload

new-migration:
	@source ops/helpers.sh; new_migration

status:
	docker exec -it docker-graphql-engine-1 hasura-cli --project /hasura --endpoint http://graphql-engine:8080 --admin-secret vigilantmuse --database-name default migrate status

psql-pipe:
#Ex:  make psql-pipe < ./hasura/migrations/default/1722144617571_init/down.sql 
	docker exec -i docker-postgres-1 psql -U muse -d postgres

generate-types:
	$(Exec) && $(DC) exec frontend sh -c 'cd /app && npm run generate'

export:
	docker exec -it docker-graphql-engine-1 hasura-cli --project /hasura --endpoint http://graphql-engine:8080 --admin-secret vigilantmuse metadata export

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
	@make stop
	@docker volume rm $$(docker volume ls -q) || true
	@docker system prune -a --volumes --force


