// import type { Knex } from "knex";
// import dotenv from "dotenv";
// dotenv.config({ path: "./.env.local" });

// const knexConfig: { [key: string]: Knex.Config } = {
//   development: {
//     client: "pg",
//     connection: process.env.DATABASE_URL || {
//       host: "127.0.0.1" || "localhost",
//       user: process.env.DB_USER,
//       database: process.env.DB_NAME,
//       password: process.env.DB_PASSWORD,
//       port: Number(process.env.DB_PORT) || 5432,
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       tableName: "knex_migrations",
//       directory: "./migrations",
//     },
//   },

  // production: {
  //   client: "pg",
  //   connection: process.env.DATABASE_URL,
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //     directory: "./migrations",
  //   },
  // },
// };

// export default knexConfig;
require("dotenv").config({ path: "./.env.local" });

const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = "127.0.0.1";
const DB_PORT = "5432";
const DB_URL = process.env.DB_URL;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = {
  client: "postgresql",
  connection: DB_URL || {
    host: DB_HOST || "127.0.0.1",
    port: DB_PORT || "5432",
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
  },
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};