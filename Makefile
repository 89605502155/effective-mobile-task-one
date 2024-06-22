up_db:
	docker-compose up -d
down_db:
	docker-compose down
open_db:
	docker exec -it effictive-mobile-db  /bin/bash
logs:
	docker-compose logs
sql:
	psql -h data-base -U 1234 -d users

