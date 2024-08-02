"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config({
  path: [".env.local", ".env"],
});

module.exports = {
  client: "postgresql",
  connection: process.env.DATABASE_URL || {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  },
};
