# Variables
DC=docker compose
DOCK_PATH=docker/docker-compose.yml
FrontendStr=echo "Frontend http://localhost:4200"
BackendStr=echo "Hasura http://localhost:5050"
# Start up message
START_UP_MESSAGE=$(FrontendStr) && $(BackendStr)
RUN=$(DC) -f $(DOCK_PATH)
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
	$(START_UP_MESSAGE)

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

resolve-inconsistent-metadata:
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

logs:
	$(RUN) logs graphql-engine

teardown:
	@make stop
	@docker volume rm $$(docker volume ls -q) || true
	@docker system prune -a --volumes --force


