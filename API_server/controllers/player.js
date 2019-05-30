    'use strict'
    const bcrypt = require('bcrypt');
    const db = require('./db');

    exports.Player = {

        async signUp(req, res) {
            const { player_name, email, password } = req.body;

            if (!player_name || !email || !password ) {
                return res.status(400).send({ 'message': 'Please fill in required space.'})
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                return res.status(400).send({ 'message': 'Please enter a valid email.'});
            }
            const salt = bcrypt.genSaltSync(10);
            const hashpass = bcrypt.hashSync(password, salt);

            const query = 'INSERT INTO player (player_name, email, salt, hashpass) VALUES ($1, $2, $3, $4) RETURNING *';

            const values = [player_name, email, salt, hashpass];

            try {
                const { rows } = await db.query(query, values);
                console.log(rows);
                return res.status(201).send(rows);
            } catch (error) {
                if (error.routine === '_bt_check_unique') {
                    return res.status(400).send({ 'message': "Player with that name or email already signup."});
                }
                return res.status(400).send(error);
            }
        }
    }

    // exports.Player = Player;