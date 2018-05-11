import * as ex from "excalibur";

export class Ground extends ex.Actor {
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
}
