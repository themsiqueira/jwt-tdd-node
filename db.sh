#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE users;
    GRANT ALL PRIVILEGES ON DATABASE users TO postgres;
    CREATE DATABASE test;
    GRANT ALL PRIVILEGES ON DATABASE test TO postgres;
EOSQL
