const db = require('./queries');


// controllers
const { Player } = require('./controllers/player');

module.exports = (app) => {

    // player table
    app.get('/players', db.viewAllPlayer);
    // app.get('/player/:name', db.loginPlayer);
    // app.post('/player', db.createPlayer);
    // app.put('/player', db.updatePlayer);
    // app.delete('/player', db.deletePLayer);

    console.log(Player);

    app.post('/player', Player.signUp);

    // match table


    // match_frag table
}