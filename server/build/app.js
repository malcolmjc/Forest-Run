"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const colyseus = require("colyseus");
const { Pool, Client } = require('pg');
const connectionString = process.env.DATABASE_URL;
console.log(connectionString);
const dotenv = require("dotenv");
dotenv.config();
const _1 = require("./rooms/");
const port = process.env.PORT ? Number(process.env.PORT) : 8084;
const endpoint = 'localhost';
const pool = new Pool({
    connectionString: connectionString,
});
const app = express();
app.use(bodyParser.json());
app.use(cors());
const server = http.createServer(app);
const gameServer = new colyseus.Server({ server: server });
console.log("STARTING");
server.on("error", onError);
function onError(error) {
    throw error;
}
gameServer
    .register('lobbies', _1.GameRoom)
    .on('create', (room) => console.log('game lobby created!', room.roomId))
    .on('join', (room, client) => console.log('client (' + client.id + ') joined game lobby: ' + room.roomId))
    .on('leave', (room, client) => console.log('client (' + client.id + ') left game lobby: ' + room.roomId))
    .on('dispose', (room) => console.log('game lobby destroyed!', room.roomId));
app.use(express.static(__dirname));
gameServer.onShutdown(() => {
    console.log('CUSTOM SHUTDOWN ROUTINE: STARTED');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('CUSTOM SHUTDOWN ROUTINE: FINISHED');
            resolve();
        }, 1000);
    });
});
gameServer.listen(port);
console.log(`Listening on http://${endpoint}:${port}`);
//# sourceMappingURL=app.js.map