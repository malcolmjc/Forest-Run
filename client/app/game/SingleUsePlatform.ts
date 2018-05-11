import * as ex from "excalibur";
import { Resources } from "../Resources";
import { Animations } from "../Animations";

export class SingleUsePlatform extends ex.Actor {
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
    const shieldSprite: ex.Sprite = new ex.Sprite(
      Resources.singleUsePlatform,
      0,
      0,
      200,
      67
    );

    const idle: ex.Sprite = shieldSprite;

    this.addDrawing(Animations.Idle, idle);

    this.setDrawing(Animations.Idle);
  }
}
