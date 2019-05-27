import player from '../controllers/player';


export default (app) => {
    app.get('/farcry', (req, res) => res.status(200).send({
        message: "Welcome to farcary online api!",

    }));

    app.get('/farcry/player', player.login); // farcry route for player login
    app.post('/farcry/player/createPlayer', player.signUp);
}