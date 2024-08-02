const knex = require("knex");
const knexConfig = require("./knexfile");

const environment = process.env.production || 'development';
const config = knexConfig[environment];

const db = knex(config);

module.exports = db