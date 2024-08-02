import { Knex, knex } from 'knex';
import { knexConfig } from '../knexfile';

const environment = process.env.production || 'development';
const config = knexConfig[environment];

const db = knex(config);

export default db;
