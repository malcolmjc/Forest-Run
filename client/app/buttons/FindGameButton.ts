import * as ex from "excalibur";
import { Button } from "./index";
import { NetworkSingleton } from "../NetworkSingleton";
import { PreLobby, LiveGame } from "../scenes";

export class FindGameButton extends Button {
  private network: NetworkSingleton = NetworkSingleton.Instance();

  constructor() {
    super(100, 200, 400, 100, (engine: ex.Engine) => {
      // engine.removeScene("mainmenu");

      this.network.join("lobbies", {
        name: window.prompt("Enter your nickname", "Forrest Gump") || ""
      });

      engine.add("prelobby", new PreLobby());
      engine.add("livegame", new LiveGame(engine));
      engine.goToScene("prelobby");
    });

    this.color = new ex.Color(46, 175, 118, 1);
    this.enableCapturePointer = true;

    const label: ex.Label = new ex.Label();
    label.x = 30;
    label.y = 70;
    label.fontFamily = "Arial";
    label.fontSize = 36;
    label.fontUnit = ex.FontUnit.Px; // pixels are the default
    label.text = "Find Online Game";
    label.color = ex.Color.Black;
    label.textAlign = ex.TextAlign.Left;
    this.add(label);
  }
}
