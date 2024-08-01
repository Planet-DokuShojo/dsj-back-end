import { Pool } from "pg";
require("dotenv").config({ path: "./.env.local" });

const pool = new Pool({
  user: process.env.DB_USER,
  host: "127.0.0.1",
  database: "dokushojo_db",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

module.exports = {
  query: (text: string, params: any[]) => pool.query(text, params),
};
