import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dokushojo_db', 
  password: 'your_password', // Replace 'your_password' with the password for your PostgreSQL user
  port: 5432, 
});

module.exports = {
  query: (text: string, params: any[]) => pool.query(text, params),
}