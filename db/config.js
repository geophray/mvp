const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')});
const { Pool } = require('pg');

console.log(process.env.DB_PASS);

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'ezmealplanning',
  password: process.env.DB_PASS || '',
  port: process.env.DB_PORT || 5432
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

module.exports = pool;