const Pool = require('pg').Pool;


const pool = new Pool({
    user: 'postgres',
    host: '18.188.223.17',
    port: 5432,
    database: 'farcryonline',
    password: null
});

module.exports =  pool;