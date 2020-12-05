const { Pool } = require('pg');
const { connectionString } = require('../config');

const pool = new Pool({ connectionString });

module.exports.pool = pool;
