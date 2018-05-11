import * as ex from "excalibur";
import { Resources } from "../Resources";
import { Animations } from "../Animations";

export class Trampoline extends ex.Actor {
  constructor(
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    color?: ex.Color
  ) {
    super(x, y, width, height, color);
    this.collisionType = ex.CollisionType.Fixed;
    this.body.friction = 10;
  }

  public onInitialize(engine: ex.Engine): void {
    this.setupAnimationSprites(engine);
  }

  private setupAnimationSprites(engine: ex.Engine): void {
    const trampolineSprite: ex.Sprite = new ex.Sprite(
      Resources.trampoline,
      0,
      0,
      96,
      45
    );

    const idle: ex.Sprite = trampolineSprite;

    this.addDrawing(Animations.Idle, idle);

    this.setDrawing(Animations.Idle);
  }
}
