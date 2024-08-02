"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
require("dotenv").config({ path: "./.env.local" });
const pool = new pg_1.Pool({
  user: process.env.DB_USER,
  host: "127.0.0.1",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 3000,
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};
