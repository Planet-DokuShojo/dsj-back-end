// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
import dotenv from "dotenv"
dotenv.config({path: "./.env.local"})

import { Knex } from "knex";

interface KnexConfigMap {
  [key: string]: object;
}

const knexConfig: KnexConfigMap = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
      host: "127.0.0.1" || 'localhost',
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT || 5432,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  },
};

module.exports = knexConfig;
