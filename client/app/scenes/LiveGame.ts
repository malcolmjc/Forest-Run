import * as ex from "excalibur";
import TiledResource, * as exTile from "@excaliburjs/excalibur-tiled";
import * as Colyseus from "colyseus.js";
import { Delayed } from "@gamestdio/timer";
import { ClockTimer } from "@gamestdio/timer/lib/ClockTimer";
import { NetworkSingleton } from "../NetworkSingleton";
import { PlayTime } from "../text/PlayTime";

import { Config } from "../Config";

import {
  Runner,
  Helper,
  Blocker,
  PlayerGhost,
  Wall,
  Ground,
  Checkpoint,
  FinishLine
} from "../game/index";
import { Button } from "../buttons";
import { Header, SubHeader } from "../text";
import { Resources } from "../Resources";

export class LiveGame extends ex.Scene {
  private network: NetworkSingleton = NetworkSingleton.Instance();
  private clientID: string = this.network.getClientId();

  private players: Colyseus.EntityMap<any> = {};
  private gameClock: ClockTimer;
  private currPlayer: ex.Actor;

  private playerGhost: PlayerGhost | undefined = undefined;
  private helper: Helper | undefined = undefined;
  private runner: Runner | undefined = undefined;
  private blocker: Blocker | undefined = undefined;
  // private otherRunner: Runner | undefined = undefined;

  private checkpoint: Checkpoint | undefined = undefined;
  private finishLine: FinishLine;

  private connectedRoom: Colyseus.Room | undefined;
  private group: ex.Group;

  private runningTime: PlayTime;

  constructor(engine: ex.Engine) {
    super(engine);
    this.connectedRoom = this.network.getConnectedRoom();
    this.gameClock = new ClockTimer(false);

    this.gameClock.setInterval(() => {
      console.log("CLOCK HIT");
      if (this.connectedRoom && this.runner) {
        this.network.send({
          action: "SetPosition",
          data: { x: this.runner.x, y: this.runner.y }
        });
      }
    }, 50);
  }

  public update(engine: ex.Engine, delta: number): void {
    // console.log("hit?");
    if (this.runner && this.currPlayer instanceof Runner) {
      // Position Camera
      this.camera.move(new ex.Vector(this.runner.pos.x, this.runner.pos.y), 0);
    }
    if (this.helper && this.currPlayer instanceof Helper) {
      // Position Camera
      this.camera.move(new ex.Vector(this.helper.pos.x, this.helper.pos.y), 0);
    }
    if (this.blocker && this.currPlayer instanceof Blocker) {
      // Position Camera
      this.camera.move(
        new ex.Vector(this.blocker.pos.x, this.blocker.pos.y),
        0
      );
    }
    super.update(engine, delta);
  }

  // start-up logic, called once
  public onInitialize(engine: ex.Engine): void {
    this.group = new ex.Group("livegame", this);
  }

  // each time the scene is entered (Engine.goToScene)
  public onActivate(): void {
    this.initalizeUI();
    this.connectedRoom = this.network.getConnectedRoom();
    this.gameClock.start(true);

    if (this.connectedRoom) {
      this.connectedRoom.listen(
        "players/:id/:attribute",
        (change: Colyseus.DataChange) => {
          // console.log(change);
          // console.log(change.operation); // => "replace" (can be "add", "remove" or "replace")
          // console.log(change.path["position"]); // => "f98h3f"
          // console.log(change.path["attribute"]); // => "y"
          // console.log(change.value);
          if (
            change.operation === "replace" &&
            change.path["id"] !== this.network.getSessionId()
          ) {
            console.log(JSON.stringify("OTHER PLAYER: " + change));

            switch (change.path["attribute"]) {
              case "x":
                this.playerGhost!.setXPos(change.value);
                break;
              case "y":
                this.playerGhost!.setYPos(change.value);
                break;
              default:
                console.log("attribute unmapped");
                break;
            }

            console.log(this.playerGhost);
          }
        }
      );
    }

    const map: TiledResource = Resources.map;
    const tileMap: ex.TileMap = map.getTileMap();

    const layer: any = map.data.layers[0];
    for (let i: number = 0; i < layer.height; i++) {
      for (let j: number = 0; j < layer.width; j++) {
        if (layer.data[i * layer.width + j] !== 0) {
          //console.log(i, j, "SOLID");
          tileMap.data[i * layer.width + j].solid = true;
          // tileMap.data[i * layer.width + j].height = 100;
          // tileMap.data[i * layer.width + j].width = 100;
        }
      }
    }

    this.addTileMap(tileMap);

    this.runner = new Runner(300, 1800, 32, 96);
    this.blocker = new Blocker(300, 1800, 32, 96);
    this.helper = new Helper(300, 1800, 32, 96);

    this.checkpoint = new Checkpoint(
      300,
      1800,
      100,
      100,
      ex.Color.fromHex("#FFFF00")
    );

    // this.runner.body.useBoxCollision(new ex.Vector(0.5, 0.5));
    //this.runner.body.useCircleCollision(20);

    this.finishLine = new FinishLine(
      15875,
      1400,
      100,
      100,
      ex.Color.fromHex("#D0D0D0")
    );

    this.add(this.finishLine);
    this.add(this.checkpoint);
    this.add(this.blocker);
    this.currPlayer = new Blocker();

    this.playerGhost = new PlayerGhost(300, 1800);
    this.add(this.playerGhost);
  }

  // each time the scene is exited (Engine.goToScene)
  public onDeactivate(): void {
    const children: ex.Actor[] = this.actors;

    let i: number;
    for (i = 0; i < children.length; i++) {
      children[i].kill();
    }

    this.remove(this.runningTime);
  }

  private initalizeUI(): void {
    this.runningTime = new PlayTime("Lets hope this works.", 10, 20);
    this.add(this.runningTime);

    const header: Header = new Header(Config.headerText, 100, 100);
    const subHeader: SubHeader = new SubHeader(
      Config.controlsSubText,
      120,
      150
    );

    this.add(header);
    this.add(subHeader);
  }
}
