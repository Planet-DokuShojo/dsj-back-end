"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./.env.local" });
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_URL = process.env.DATABASE_URL;
const config = {
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
exports.default = config;
