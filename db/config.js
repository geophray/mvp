const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')});
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'ezmealplanning',
  password: process.env.DB_PASS || '',
  port: process.env.DB_PORT || 5432
});

module.exports = pool;