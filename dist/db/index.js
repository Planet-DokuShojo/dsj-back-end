"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dokushojo_db',
    password: 'your_password', // Replace 'your_password' with the password for your PostgreSQL user
    port: 5432,
});
module.exports = {
    query: (text, params) => pool.query(text, params),
};
