import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from "cors";
import * as colyseus from "colyseus";
const {Pool, Client } = require('pg');
const connectionString = process.env.DATABASE_URL;
console.log(connectionString);
import * as dotenv from "dotenv";
dotenv.config();

import {GameRoom} from './rooms/';

const port: number = process.env.PORT ? Number(process.env.PORT) : 8081;
const endpoint: string = 'localhost';
const pool: any = new Pool({
    connectionString: connectionString,
  });

const app: any = express();
app.use(bodyParser.json());
app.use(cors());

// Create HTTP & WebSocket servers
const server: http.Server = http.createServer(app);
const gameServer: colyseus.Server = new colyseus.Server({server: server});

console.log("STARTING");

server.on("error", onError);

function onError(error: NodeJS.ErrnoException): void {
  throw error;
}

gameServer
    .register('lobbies', GameRoom)
    .on('create', (room) => console.log('game lobby created!', room.roomId))
    .on('join', (room, client) =>
        console.log(
           'client (' + client.id + ') joined game lobby: ' + room.roomId
        ) 
    )
    .on('leave', (room, client) =>
        console.log(
            'client (' + client.id + ') left game lobby: ' + room.roomId
        )
    )
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
