import * as Colyseus from "colyseus.js";

const url: string = "ws://localhost:8081";

export namespace Network {
  let client: Colyseus.Client;
  let connectedRoom: Colyseus.Room | undefined;

  export function connect(): void {
    client = new Colyseus.Client(url);
  }

  export function getClientId(): string | undefined {
    return client.id;
  }

  export function getConnectedRoom(): Colyseus.Room | undefined {
    console.log(connectedRoom);
    if (!connectedRoom) throw new Error("Not connected to a room!");
    return connectedRoom;
  }

  export function join(
    name: string,
    options: any = {}
  ): Promise<Colyseus.Room> {
    return new Promise((resolve, reject) => {
      connectedRoom = client.join(name, options);
      console.log(connectedRoom);
      if (!connectedRoom) throw new Error("Could not connect to room!");
      connectedRoom.onJoin.add(() => console.log(client.id, "joined", name));
      connectedRoom.onData.add(data =>
        console.log(client.id, "received", data)
      );
      connectedRoom.onLeave.add(() => console.log(client.id, "left", name));
      resolve(connectedRoom);
    });
  }

  export function send(data: any): void {
    if (!connectedRoom) throw new Error("Error sending data!");
    connectedRoom.send(data);
    // console.log('DATA SENT');
  }
}
