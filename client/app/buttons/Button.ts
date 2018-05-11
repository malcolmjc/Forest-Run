import * as ex from "excalibur";
import { Config } from "../Config";

export class Button extends ex.UIActor {
  private _func: (engine: ex.Engine) => void;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    func: (engine: ex.Engine) => void
  ) {
    super(x, y, width, height);
    this.color = Config.btnColor;
    this._func = func;
  }

  public onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
    // when the button is clicked, run the supplied function
    this.on("pointerup", event => {
      this._func(engine);
    });
  }
}
