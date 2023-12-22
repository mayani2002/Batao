import express from "express";
import dotenv from "dotenv-flow";
import cors from "cors";

dotenv.config();
// import http from "http"
const server = express();

import bodyParser from "body-parser";
import Connection from "./database/db.js";

import Sequelize from 'sequelize';
// import postModel from'./models/post';

// Connection configuration
const connectionConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: '2002',
    database: 'bataoweb',
};

server.use(bodyParser.json({ extended: true }));
server.use(bodyParser.urlencoded({ extended: true }));

server.use(cors());
const PORT = 8000;

Connection(connectionConfig);

server.listen(PORT, () => console.log('Your server is up and running on PORT: ' + PORT));
