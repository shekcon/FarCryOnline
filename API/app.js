import http from "http";
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import routes from './server/routes';


const hostname = '127.0.0.1';
const port = 8000;
const app = express();
const server = http.createServer(app);


// log request to console
app.use(logger('dev'));


// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.get('*', (req, res) => res.status(200).send({
    message: "Welcome to ."
}));

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
