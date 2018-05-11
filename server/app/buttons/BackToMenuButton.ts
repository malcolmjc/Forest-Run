import * as ex from "excalibur";
import { Config } from "../Config";
import { Button } from "./index";

export class BackToMenuButton extends Button {
  constructor() {
    super(0, 0, 80, 80, (engine: ex.Engine) => {
      engine.goToScene("mainmenu");
      console.log("HIT");
    });

    this.enableCapturePointer = true;

    this.color = Config.warnColor;

    const label: ex.Label = new ex.Label();
    label.x = 20;
    label.y = 60;
    label.fontFamily = "Arial";
    label.fontSize = 36;
    label.fontUnit = ex.FontUnit.Px; // pixels are the default
    label.text = "<";
    label.color = ex.Color.Black;
    label.textAlign = ex.TextAlign.Left;
    this.add(label);
  }
}
