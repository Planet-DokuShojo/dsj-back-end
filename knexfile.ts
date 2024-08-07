import { Knex } from "knex";
import dotEnv from "dotenv";

dotEnv.config({ path: "./.env" });

const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = "127.0.0.1";
const DB_PORT = "5432";
const DB_URL = process.env.DB_URL;
const DB_PASSWORD = process.env.DB_PASSWORD;

const config: Knex.Config = {
  client: "postgresql",
  connection: DB_URL || {
    host: DB_HOST || "127.0.0.1",
    port: Number(DB_PORT),
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};

export default config;
