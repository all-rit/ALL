// Applies every file in server/database/seeds/ to the database, in sorted
// order. Each seed file is a self-contained BEGIN...COMMIT that makes one
// content table exactly match what's committed in that file (see #1613).
//
// The seeds/ directory IS the allowlist — nothing outside it runs here.
// Used directly (`npm run db:seed`), ahead of nodemon in local dev, and
// from server_deploy.sh on staging/prod, right after `git pull`.
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const getConnectionUri = require('./connectionUri');

const seedsDir = path.join(__dirname, 'seeds');

async function run() {
  const client = new Client({ connectionString: getConnectionUri() });
  await client.connect();

  const files = fs
    .readdirSync(seedsDir)
    .filter((file) => file.endsWith('.sql'))
    .sort();

  for (const file of files) {
    console.log(`Applying seed: ${file}`);
    const sql = fs.readFileSync(path.join(seedsDir, file), 'utf8');
    await client.query(sql);
  }

  await client.end();
  console.log(`Applied ${files.length} seed file(s).`);
}

run().catch((err) => {
  // Fail fast — a bad file's own BEGIN/COMMIT already rolled back its own
  // change; don't attempt the remaining files on top of an error.
  console.error('Seed run failed:', err);
  process.exit(1);
});
