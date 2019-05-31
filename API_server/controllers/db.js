const Pool = require('pg').Pool;

process.env.ADMISSION_DB_USER = 'postgres';
const pool = new Pool({
    user: process.env.ADMISSION_DB_USER,
    host: 'localhost',
    port: 5432,
    database: 'farcryonline',
    password: null
});

module.exports =  pool;