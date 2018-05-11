"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colyseus_1 = require("colyseus");
const GameState_1 = require("../state/GameState");
class GameRoom extends colyseus_1.Room {
    constructor() {
        super();
        super.maxClients = 1;
    }
    onInit(options) {
        this.setState(new GameState_1.GameState());
    }
    onJoin(client, options) {
        console.log('client has joined!');
        console.log('client.id:', client.id);
        console.log('client.sessionId:', client.sessionId);
        console.log('with options', options);
        this.state.addPlayer(client);
    }
    onLeave(client) {
        console.log('client has left!');
        console.log('client.id:', client.id);
        this.state.removePlayer(client);
    }
    onMessage(client, data) {
        console.log('LiveRoom:', client.id, data);
        switch (data.action) {
            case 'SetPlayerName':
                this.state.setPlayerName(client, data.payload);
                break;
            case 'SetPlayerReady':
                this.state.setPlayerReady(client, data.payload);
                break;
            case 'SetPosition':
                this.state.setPlayerPosition(client, data.data);
                break;
            case 'SetTeam':
                this.state.setPlayerTeam(client, data.payload);
                break;
            default:
                break;
        }
    }
    onDispose() {
        console.log('Disposing GameRoom...');
    }
}
exports.GameRoom = GameRoom;
//# sourceMappingURL=GameRoom.js.map