import * as ex from "excalibur";
import { Config } from "../Config";
import { Text } from "./Text";

export class Header extends Text {
  private text: string;

  constructor(text: string, x: number, y: number) {
    super(x, y);
    this.text = text;
  }

  public onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);

    const label: ex.Label = new ex.Label();
    label.x = 0;
    label.y = 0;
    label.fontFamily = "Arial";
    label.fontSize = 36;
    label.fontUnit = ex.FontUnit.Px; // pixels are the default
    label.text = this.text;
    label.color = Config.headerTextColor;
    label.textAlign = ex.TextAlign.Left;
    this.add(label);
  }
}
