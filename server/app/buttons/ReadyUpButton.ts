import * as ex from "excalibur";
import { Config } from "../Config";
import { NetworkSingleton } from "../NetworkSingleton";
import { Button } from "./index";
import { ButtonText } from "../text";

function onTap(engine: ex.Engine): void {
  this.isReady = !this.isReady;
  this.network.send({ action: "SetPlayerReady", payload: this.isReady });
  this.updateState(this.isReady);
}
export class ReadyUpButton extends Button {
  private network: NetworkSingleton = NetworkSingleton.Instance();

  private buttonText: ButtonText;
  private isReady: boolean;

  constructor(x: number = 100, y: number = 200) {
    super(x, y, 400, 100, onTap);
    this.enableCapturePointer = true;
    this.updateState(this.isReady);
  }

  private updateState(isReady: boolean): void {
    if (this.buttonText) this.remove(this.buttonText);

    if (isReady) {
      this.color = Config.unreadyBtnColor;
      this.buttonText = new ButtonText("Waiting for Others!", ex.Color.White);
      this.add(this.buttonText);
    } else {
      this.color = Config.readyBtnColor;
      this.buttonText = new ButtonText("Click to Ready Up!", ex.Color.Black);
      this.add(this.buttonText);
    }
  }
}
