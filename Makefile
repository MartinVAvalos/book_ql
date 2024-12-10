# Variables
DC=docker compose
DOCK_PATH=docker/docker-compose.yml
FrontendStr=echo "Frontend http://localhost:4200"
BackendStr=echo "hasura http://localhost:5050"
# Start up message
START_UP_MESSAGE=&& $(FrontendStr) && $(BackendStr)
RUN=$(DC) -f $(DOCK_PATH)
# docker compose comands have to be ran within the docker file
Exec=cd docker


dev: # docker compose up --build -d && echo "Frontend http://localhost:4200" && echo "hasura http://localhost:5050"
	$(RUN) up --build -d ${START_UP_MESSAGE}

debug:
	$(RUN) up --build ${START_UP_MESSAGE}

stop:
	$(RUN) down

restart:
	$(RUN) restart

generate-types:
	$(Exec) && $(DC) exec frontend sh -c 'cd /app && npm run generate'

teardown:
	@make stop
	@docker volume rm $$(docker volume ls -q) || true
	@docker system prune -a --volumes --force


