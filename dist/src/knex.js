"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = require("knex");
const knexfile_1 = __importDefault(require("../knexfile"));
const environment = process.env.NODE_ENV || 'development';
const config = knexfile_1.default[environment];
const db = (0, knex_1.knex)(config);
exports.default = db;
