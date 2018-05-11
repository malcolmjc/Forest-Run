import * as ex from "excalibur";
import { Resources } from "../Resources";
import { Animations } from "../Animations";

export class ReverseTile extends ex.Actor {
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
    const tileSprite: ex.Sprite = new ex.Sprite(
      Resources.reverseTile,
      0,
      0,
      132,
      114
    );

    const idle: ex.Sprite = tileSprite;

    this.addDrawing(Animations.Idle, idle);

    this.setDrawing(Animations.Idle);
  }
}
