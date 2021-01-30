#!/bin/bash
set -e

# マイグレーションを行う
npm run migrate

exec "$@"