const Pool = require('pg').Pool;


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'farcryonline',
    password: null
});

module.exports =  pool;