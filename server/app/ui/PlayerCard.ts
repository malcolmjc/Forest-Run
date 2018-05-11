import * as ex from "excalibur";
import { Config } from "../Config";

import { PlayerNameText } from "../text";
import { UIActor } from "excalibur";

const WIDTH: number = 100;
const HEIGHT: number = 200;

export class PlayerCard extends ex.UIActor {
  private ready: boolean;
  private username: string;

  constructor(
    username: string = "UNDEFINED",
    ready: boolean = false,
    x: number = 0,
    y: number = 0
  ) {
    super(x, y, WIDTH, HEIGHT);
    this.enableCapturePointer = false;
    this.username = username;
    this.ready = ready;
  }

  public onInitialize(engine: ex.Engine): void {
    const playerName: PlayerNameText = new PlayerNameText(this.username);
    playerName.parent = this;
    this.add(playerName);

    const readyIndicator: UIActor = new UIActor(5, 20, 8, 8);
    readyIndicator.color = this.ready ? Config.successColor : Config.warnColor;
    readyIndicator.parent = this;
    this.add(readyIndicator);
  }
}
