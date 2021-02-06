#!/bin/bash
set -e

node <<EOF
// Mysqlの起動を待つスクリプト
(async () => {
  const { PrismaClient } = require('./prisma/client')
  const client = new PrismaClient()
  while (true) {
    try {
      console.log((new Date()).toISOString() + ' Trying to connect to mysql...')
      await client.\$connect()
      break;
    } catch {
      await new Promise(r => setTimeout(r,2000)); // sleep 2 sec
      continue;
    }
  }
  client.\$disconnect()
  console.log((new Date()).toISOString() + ' Mysql is up!')
})()
EOF

# マイグレーションを行う
npm run migrate:dev

exec "$@"