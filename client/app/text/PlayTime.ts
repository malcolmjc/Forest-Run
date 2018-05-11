import * as ex from "excalibur";
import { Text } from "./Text";

/*
 * A Text object that shows time elapsed since begining of game.
 */
export class PlayTime extends Text {
  private text: string;
  private hours: number;
  private mins: number;
  private s: number;
  private ms: number;
  private label: ex.Label;

  private readonly timerLabel: string = "Play Time: ";

  constructor(text: string, x: number, y: number) {
    super(x, y);
    this.text = this.timerLabel;
    this.hours = 0;
    this.mins = 0;
    this.s = 0;
    this.ms = 0;
    this.label = new ex.Label();
    this.label.text = this.timerLabel;
  }

  public onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);

    //const label: ex.Label = new ex.Label();
    this.label.x = 0;
    this.label.y = 0;
    this.label.fontFamily = "Arial";
    this.label.fontSize = 14;
    this.label.fontUnit = ex.FontUnit.Px; // pixels are the default
    this.label.text = this.text;
    this.label.color = ex.Color.White;
    this.label.textAlign = ex.TextAlign.Left;
    this.add(this.label);
  }

  public update(engine: ex.Engine, delta: number): void {
    super.update(engine, delta);

    this.ms += delta;

    if (this.ms >= 1000) {
      this.s += Math.floor(this.ms / 1000);
      this.ms = this.ms % 1000;
    }

    if (this.s >= 60) {
      this.mins += Math.floor(this.s / 60);
      this.s = this.s % 60;
    }

    if (this.mins >= 60) {
      this.hours += Math.floor(this.mins / 60);
      this.mins = this.mins % 60;
    }

    this.label.text =
      this.timerLabel +
      this.hours +
      "h " +
      this.mins +
      "min " +
      this.s +
      "s " +
      this.ms +
      "ms";
  }
}
