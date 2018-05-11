import * as ex from "excalibur";
import { Button } from "./index";
import { LiveGame } from "../scenes";

function onTap(engine: ex.Engine): void {
  engine.goToScene("livegame");
}
export class StartGameButton extends Button {
  constructor(x: number = 100, y: number = 500) {
    super(x, y, 400, 100, onTap);

    this.color = new ex.Color(0, 255, 0, 1);
    this.enableCapturePointer = true;

    const label: ex.Label = new ex.Label();
    label.x = 20;
    label.y = 60;
    label.fontFamily = "Arial";
    label.fontSize = 36;
    label.fontUnit = ex.FontUnit.Px; // pixels are the default
    label.text = "Start Game";
    label.color = ex.Color.Black;
    label.textAlign = ex.TextAlign.Left;
    this.add(label);
  }
}
