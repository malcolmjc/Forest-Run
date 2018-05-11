import {Room, Client} from 'colyseus';
import {GameState} from '../state/GameState';

export class GameRoom extends Room<GameState> {
    constructor() {
        super();
        this.maxClients = 6;
    }

    public onInit(options: any): void {
        this.setState(new GameState());
    }

    public onJoin(client: Client, options: any): void {
        console.log('client has joined!');
        console.log('client.id:', client.id);
        console.log('client.sessionId:', client.sessionId);
        console.log('with options', options);
        this.state.addPlayer(client);
    }

    public onLeave(client: Client): void {
        console.log('client has left!');
        console.log('client.id:', client.id);
        this.state.removePlayer(client);
    }

    public onMessage(client: Client, data: any): void {
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

    public onDispose(): void {
        console.log('Disposing GameRoom...');
    }
}
