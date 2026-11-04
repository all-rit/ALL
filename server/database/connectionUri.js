// Builds the Postgres connection string from env vars. Shared by
// database/index.js (Sequelize) and seed.js (raw pg client) so there's one
// place that knows how these variables compose — changing an env var name
// only needs to happen here instead of drifting between two copies.
module.exports = function getConnectionUri() {
  const withPassword = process.env.DB_PASS ? `:${process.env.DB_PASS}` : '';
  const port = process.env.DB_PORT || 5432;
  return `postgres://${process.env.DB_USER}${withPassword}@${process.env.DB_HOST}:${port}/${process.env.DB_SCHEMA}`;
};
