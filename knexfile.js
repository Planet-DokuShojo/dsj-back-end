// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URL || {
    user: process.env.DB_USER,
    host: "127.0.0.1",
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  },
  timezone: "UTC",
};
