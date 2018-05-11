import * as ex from "excalibur";

export class ButtonText extends ex.Label {
  constructor(text: string, color: ex.Color, x: number = 20, y: number = 70) {
    super(text, x, y);
    this.color = color;
    this.fontFamily = "Arial";
    this.fontSize = 24;
    this.fontUnit = ex.FontUnit.Px; // pixels are the default
    this.textAlign = ex.TextAlign.Left;
  }
}
