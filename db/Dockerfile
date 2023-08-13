FROM postgres:14 as motorway-db
WORKDIR /app
COPY ./scripts/init.sh /docker-entrypoint-initdb.d
COPY ./scripts/dump.sql ./scripts/motorway-db/dump.sql