import * as ex from "excalibur";

export class PlayerNameText extends ex.Label {
  constructor(text: string, x: number = 20, y: number = 60) {
    super(text, x, y);
    this.color = ex.Color.White;
    this.fontFamily = "Arial";
    this.fontSize = 18;
    this.fontUnit = ex.FontUnit.Px; // pixels are the default
    this.textAlign = ex.TextAlign.Left;
  }
}
