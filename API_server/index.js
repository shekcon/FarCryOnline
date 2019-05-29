const express = require('express');
const bodyParser = require('body-parser');

// connect to database
const db = require('./queries');

// create an app 
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)


// routes
app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express and Postgres API'})
});
app.get('/players', db.viewAllPlayer);
app.get('/player/:name', db.loginPlayer);
app.post('/player', db.createPlayer);
app.put('/player', db.updatePlayer);
app.delete('/player', db.deletePLayer);


// listen
app.listen(port, () => {
    console.log(`App is running on ${port}`)
})