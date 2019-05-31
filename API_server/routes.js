// const db = require('./queries');


// controllers
const { Player } = require('./controllers/player');

module.exports = (app) => {

    console.log(Player);

    app.post('/player', Player.signUp);

    // match table


    // match_frag table
}