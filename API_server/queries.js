const Pool = require('pg').Pool;


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'farcryonline',
    password: null
});


const viewAllPlayer = (req, res) => {
    pool.query('SELECT * FROM player', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows);
    })
}

const loginPlayer = (req, res) => {
    const name = req.params.name

    pool.query(`SELECT * FROM player WHERE player_name = $1`, [name], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const createPlayer = (req, res) => {
    const {
        player_name,
        password
    } = req.body;

    console.log(req.body);

    pool.query('INSERT INTO player (player_name, passhash) VALUES ($1, $2)', 
                [player_name, password], (err, results) => {
                    if (err) {
                        throw err
                    }
                    res.status(201).send("Create account success")
    })
}

const updatePlayer = (req, res) => {
    const { player_name, password } = req.body

    pool.query('UPDATE player\
                SET passhash = $1\
                WHERE player_name = $2', [password, player_name], (err, results) => {
                    if (err) {
                        throw err
                    }
                    res.status(201).json(results.rows)
                })
}

const deletePLayer = (req, res) => {
    const { player_name } = req.body

    pool.query('DELETE FROM  player\
                WHERE player_name = $1', [player_name], (err, results) => {
                    if (err) {
                        throw err
                    }
                    res.status(200).send("Account delete")
                })
}


module.exports = {
    viewAllPlayer,
    loginPlayer,
    createPlayer,
    updatePlayer,
    deletePLayer
}