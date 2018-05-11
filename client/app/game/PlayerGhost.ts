import * as ex from "excalibur";
import { UIActor } from "excalibur";
import { SubHeader } from "../text/SubHeader";

const WIDTH: number = 50;
const HEIGHT: number = 50;

export class PlayerGhost extends ex.Actor {
  public x: number;
  public y: number;

  constructor(x: number = 100, y: number = 700) {
    super(x, y, WIDTH, HEIGHT);
    this.x = x;
    this.y = y;
    this.color = ex.Color.Red;
    this.enableCapturePointer = false;
  }

  public onInitialize(engine: ex.Engine): void {
    const header: SubHeader = new SubHeader("PLAYER 2", 0, 0);
    this.add(header);
  }

  public update(engine: ex.Engine, delta: number): void {
    super.update(engine, delta);
  }

  public setXPos(x: number): void {
    console.log("SETTING X: " + x);
    this.x = x;
  }

  public setYPos(y: number): void {
    console.log("SETTING Y: " + y);
    this.y = y;
  }

  public toString(): string {
    return "OTHER PLAYER: (x: " + this.x + ", y: " + this.y + ")";
  }
}
