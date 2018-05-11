import * as ex from "excalibur";
import { Button } from "./index";
import { Leaderboard } from "../scenes";

export class LeaderboardButton extends Button {
  constructor() {
    super(100, 320, 400, 100, (engine: ex.Engine) => {
      engine.goToScene("leaderboard");
      console.log("HIT");
    });

    this.enableCapturePointer = true;

    const label: ex.Label = new ex.Label();
    label.x = 30;
    label.y = 70;
    label.fontFamily = "Arial";
    label.fontSize = 36;
    label.fontUnit = ex.FontUnit.Px; // pixels are the default
    label.text = "Leaderboard";
    label.color = ex.Color.Black;
    label.textAlign = ex.TextAlign.Left;
    this.add(label);
  }
}
