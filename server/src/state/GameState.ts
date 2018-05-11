import {EntityMap, Client} from 'colyseus';
import {Runner, Player} from '../entities/';

export class GameState {
    players: EntityMap<Player> = {};

    addPlayer(client: Client) {
        this.players[client.sessionId] = new Player(client.id);
    }

    removePlayer(client: Client) {
        delete this.players[client.sessionId];
    }

    setPlayerName(client: Client, data: any) {
        this.players[client.sessionId].username = data.username;
    }

    setPlayerPosition(client: Client, data: any) {
        this.players[client.sessionId].x = data.x;
        this.players[client.sessionId].y = data.y;
    }

    setPlayerReady(client: Client, isReady: boolean) {
        this.players[client.sessionId].ready = isReady;
    }

    setPlayerTeam(client: Client, data: any) {
        this.players[client.sessionId].team = data.teamNumber;
    }
}
