import * as Colyseus from "colyseus.js";
import { Signal } from "signals.js";

const LOCAL_SERVER_ENDPOINT: string = "ws://localhost:8081";
const SERVER_ENDPOINT: string = "wss://forest-run-server.dokku.affinitymws.com";

export class NetworkSingleton {
  private static singleton: NetworkSingleton | null = null;

  private client: Colyseus.Client | undefined = undefined;
  private connectedRoom: Colyseus.Room | undefined = undefined;

  private constructor() {}

  public static Instance(): NetworkSingleton {
    if (this.singleton == null) {
      this.singleton = new NetworkSingleton();
    }
    return this.singleton;
  }

  public connect(): void {
    this.client = new Colyseus.Client(SERVER_ENDPOINT);
    console.log(this.client);
    this.client.onError.add(error => console.log(error));
  }

  public getClientId(): string {
    if (!this.client) throw Error("Client not connected to server!");
    return this.client.id!;
  }

  public getSessionId(): string {
    if (!this.connectedRoom) throw Error("Client not connected to room!");
    return this.connectedRoom!.sessionId;
  }

  public getConnectedRoom(): Colyseus.Room {
    if (!this.connectedRoom) throw new Error("Not connected to a room!");
    console.log("ROOM: " + this.connectedRoom);
    return this.connectedRoom;
  }

  public join(name: string, options: any = {}): Colyseus.Room {
    console.log(this.client);
    if (this.client == null) throw new Error("Client not connected to server");
    this.connectedRoom = this.client.join(name, options);

    if (this.connectedRoom == null)
      throw new Error("Could not connect to room!");

    this.connectedRoom.onJoin.add(() =>
      console.log(this.client!.id, "joined", name)
    );
    this.connectedRoom.onData.add(data =>
      console.log(this.client!.id, "received", data)
    );

    this.connectedRoom.onLeave.add(() =>
      console.log(this.client!.id, "left", name)
    );
    return this.connectedRoom;
  }

  public send(data: any): void {
    if (this.connectedRoom == null || this.connectedRoom.id == null)
      throw new Error("Error sending data!");
    this.connectedRoom.send(data);
  }
}
