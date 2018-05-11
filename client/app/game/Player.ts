import * as ex from "excalibur";

export class Player extends ex.Actor {
  public engine: ex.Engine;
  public movementSpeed: number = 1.0;

  constructor(
    x?: number,
    y?: number,
    public width: number = 32,
    public height: number = 96
  ) {
    super(x || 0, y || 450, width || 32, height || 96, ex.Color.Red.clone());
  }

  public onInitialize(engine: ex.Engine): void {
    this.engine = engine;
    super.onInitialize(engine);
  }

  public moveLeftDefault(): void {
    this.pos.x -= 10;
  }

  public moveRightDefault(): void {
    this.pos.x += 10;
  }

  public moveDown(): void {
    this.pos.y += 10;
  }

  public moveUp(): void {
    this.pos.y -= 10;
  }

  public update(engine: any, delta: any): void {
    if (
      engine.input.keyboard.isHeld(ex.Input.Keys.A) ||
      engine.input.keyboard.isHeld(ex.Input.Keys.Left)
    ) {
      this.moveLeftDefault();
    }

    if (
      engine.input.keyboard.isHeld(ex.Input.Keys.D) ||
      engine.input.keyboard.isHeld(ex.Input.Keys.Right)
    ) {
      this.moveRightDefault();
    }

    if (
      engine.input.keyboard.isHeld(ex.Input.Keys.W) ||
      engine.input.keyboard.isHeld(ex.Input.Keys.Up)
    ) {
      this.moveUp();
    }

    if (
      engine.input.keyboard.isHeld(ex.Input.Keys.S) ||
      engine.input.keyboard.isHeld(ex.Input.Keys.Down)
    ) {
      this.moveDown();
    }
  }
}
