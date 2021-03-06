import * as ex from "excalibur";

export class Checkpoint extends ex.Actor {
  constructor(
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    color?: ex.Color
  ) {
    super(x, y, width, height, color);
    this.collisionType = ex.CollisionType.Passive;
    this.addCollisionGroup("checkpoint");
  }
}
