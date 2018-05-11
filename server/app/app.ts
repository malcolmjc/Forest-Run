import * as Colyseus from "colyseus.js";
import * as ex from "excalibur";
import * as WebSocket from "ws";
import { Game } from "./Game";
import { NetworkSingleton } from "./NetworkSingleton";
// const server: Colyseus.Client = new Colyseus.Client(
//   "wss://forest-run-server.dokku.affinitymws.com"
// );
//
// typespec-bdd testing

const game: Game = new Game();

game.setAntialiasing(false);
// game.isDebug = true;

const logger: ex.Logger = ex.Logger.getInstance();
logger.defaultLevel = ex.LogLevel.Debug;

const loader: ex.Loader = new ex.Loader();

game.start(loader).then(() => {
  const network: NetworkSingleton = NetworkSingleton.Instance();
  network.connect();
  console.log("CLIENT ID: " + network.getClientId());
});
