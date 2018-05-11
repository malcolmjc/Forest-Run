import * as ex from "excalibur";

import { PlayerCard } from "./index";
import { SubHeader } from "../text";
import { UIActor } from "excalibur";
import { Config } from "../Config";

const WIDTH: number = 200;
const HEIGHT: number = 175;

export class TeamTwo extends ex.UIActor {
  private state: any;

  private previousState: any;
  private players: any[] = [];
  private playerUIActors: UIActor[] = [];

  constructor(x: number = 850, y: number = 420) {
    super(x, y, WIDTH, HEIGHT);
    this.enableCapturePointer = false;
    this.color = Config.barkColor;
  }

  public onInitialize(engine: ex.Engine): void {
    const header: SubHeader = new SubHeader("Team 2:", 0, 0);
    this.add(header);
  }

  //   public update(engine: ex.Engine, delta: number): void {
  //     super.update(engine, delta);
  //   }

  public setState(state: any): void {
    console.log("SETTING CURRENT PLAYERS STATE!" + JSON.stringify(state));

    if (this.previousState === state) return;
    console.log("NEED TO UPDATE STATE");

    this.previousState = state;
    this.state = state;

    // state.map((player) => {
    //     console.log("PLAYER: " + player);
    // });

    const players: any = [];

    for (const key of Object.keys(state)) {
      const player: any = state[key];
      if (player) {
        console.log(JSON.stringify(player));
        players.push(player);
      }
    }

    for (const uiActor of this.playerUIActors) {
      this.remove(uiActor);
      this.playerUIActors.pop();
    }

    let yOffset: number = 30;
    for (const player of players) {
      const playerCard: PlayerCard = new PlayerCard(
        player.username,
        player.ready,
        10,
        yOffset
      );
      yOffset += 50;
      this.add(playerCard);
      this.playerUIActors.push(playerCard);
    }
  }
}
