// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config({ path: "./.env.local" });
import knex, { Knex } from 'knex';

const DB_USER = process.env.DB_USER;
const DB_NAME = "note_taking_app";
const DB_HOST = "127.0.0.1";
const DB_PORT = "5432";
const DB_URL = process.env.DB_URL;
const DB_PASSWORD = process.env.DB_PASSWORD;

interface KnexConfigMap {
  [key: string]: Knex.Config;
}

const knexConfig: KnexConfigMap = {
  development: {
  client: "pg",
  connection: process.env.DB_URL || {
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
  // timezone: "UTC",
  }
};

export default knexConfig;
