#!/bin/bash
set -e

if [ "$NODE_ENV" = "production" ]; then
  SCHEMA_OPTION="--schema ./build/prisma/schema.prisma"
else
  SCHEMA_OPTION=""
fi

npx prisma generate $SCHEMA_OPTION
RETRIES=60
until npm run migrate -- $SCHEMA_OPTION ; do
  echo "Waiting for postgres server, $((RETRIES--)) remaining attempts..."
  sleep 1
done

npm run seed


exec "$@"