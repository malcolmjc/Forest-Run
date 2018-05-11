"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../entities/");
class GameState {
    constructor() {
        this.players = {};
    }
    addPlayer(client) {
        this.players[client.sessionId] = new _1.Player(client.id);
    }
    removePlayer(client) {
        delete this.players[client.sessionId];
    }
    setPlayerName(client, data) {
        this.players[client.sessionId].username = data.username;
    }
    setPlayerPosition(client, data) {
        this.players[client.sessionId].x = data.x;
        this.players[client.sessionId].y = data.y;
    }
    setPlayerReady(client, isReady) {
        this.players[client.sessionId].ready = isReady;
    }
    setPlayerTeam(client, data) {
        this.players[client.sessionId].team = data.teamNumber;
    }
}
exports.GameState = GameState;
//# sourceMappingURL=GameState.js.map