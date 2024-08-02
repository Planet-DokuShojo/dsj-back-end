// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
import { Knex } from "knex";
import dotEnv from "dotenv";

dotEnv.config({ path: "./.env.local" });

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_URL = process.env.DATABASE_URL;

const config: Knex.Config = {
  client: "postgresql",
  connection: DB_URL || {
    host: DB_HOST,
    port: Number(DB_PORT),
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
  },
  useNullAsDefault: true,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  },
};

export default config;
