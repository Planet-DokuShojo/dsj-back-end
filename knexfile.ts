// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config({ path: "./.env" });

import knex, { Knex } from "knex";

interface KnexConfigMap {
  [key: string]: Knex.Config;
}

const knexConfig: KnexConfigMap = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      user: process.env.DB_USER,
      host: "127.0.0.1",
      database: process.env.DB_NAME || "dokushojo_db",
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
  },
};

export default knexConfig;
