Перед запуском сервисов нужно запустить докер контейнер базы данных, подключиться к нему при помощи команды
make open_db
затем подключиться к нужной базе при помощи команды 
psql -h data-base -U 1234 -d users
и ввести пароль qwerty
Затем  нужно создать две схемы (каждому сервису своя схема, чтобы они могли изменять каждый свою область бд)
CREATE SCHEMA history;
CREATE SCHEMA people;

И только потом запускать сервисы.

Каждый сервис запускается из своей директории. Поэтому сперва нужна команда  cd {folder}, и поэтому будет полезно 
открыть параллельно сразу 3 терминала - для постгреса, и двух сервисов.


для создания и накатывания миграций нужны 2 команды, которые нужно запускать в дирректории конкретного сервиса.
для сервиса пользователей так:
npm run migration:generate --name=user_create
npm run typeorm migration:run -- -d ./libs/orm/src/typeorm/typeorm.config.ts

для сервиса обработки событий:
npm run migration:generate --name=user_create
npm run migration:run


Для чтения журнала нужен GET по адресу http://localhost:3001/events/get-all значение порта и хоста читается
из .env файла, поэтому можно смело менять, ничего не отвалится.

