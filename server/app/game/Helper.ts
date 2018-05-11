import * as ex from "excalibur";
import { Player } from "./Player";
import { Ground } from "./index";
import { Trampoline } from "./index";
import { Resources } from "../Resources";
import { Animations } from "../Animations";
import { ForwardTile } from "./index";
import { Shield } from "./index";
import { SingleUsePlatform } from "./index";

export class Helper extends Player {
  private clicking: boolean = false; // is the user clicking
  private itemsPos: number = 1; // where the user is within items
  private currentItem: string = "Trampoline";
  private label2: ex.Label = new ex.Label(); // label for testing
  private label2Bottom: ex.Label = new ex.Label();
  //backing array for the itemCount for each, correspond with itemsPos
  // 1 = Trampoline
  // 2 = Speed Boost
  // 3 = Shield
  // 4 = Single Use Platform
  private itemCounts: number[] = [0, 5, 3, 2, 5, 5, 5, 5, 5, 5, 5];

  constructor(
    x?: number,
    y?: number,
    public width: number = 32,
    public height: number = 96
  ) {
    super(x || 0, y || 450, width || 32, height || 96);
    //no collision for helper
    this.collisionType = ex.CollisionType.Passive;
    this.body.mass = 300;

    this.label2.x = 0;
    this.label2.y = 120;
    this.label2.fontFamily = "Arial";
    this.label2.fontSize = 36;
    this.label2.fontUnit = ex.FontUnit.Px; // pixels are the default
    this.label2.color = ex.Color.White;
    this.label2.textAlign = ex.TextAlign.Center;
    this.add(this.label2);

    this.label2Bottom.x = 0;
    this.label2Bottom.y = 160;
    this.label2Bottom.fontFamily = "Arial";
    this.label2Bottom.fontSize = 36;
    this.label2Bottom.fontUnit = ex.FontUnit.Px; // pixels are the default
    this.label2Bottom.color = ex.Color.Blue;
    this.label2Bottom.textAlign = ex.TextAlign.Center;
    this.add(this.label2Bottom);

    const helperSprite: ex.Sprite = new ex.Sprite(
      Resources.happyface,
      0,
      0,
      154,
      154
    );

    const idle: ex.Sprite = helperSprite;

    this.addDrawing(Animations.Idle, idle);

    this.setDrawing(Animations.Idle);
  }

  public onInitialize(engine: ex.Engine): void {
    this.setupAnimationSprites(engine);
    super.onInitialize(engine);
  }

  public update(engine: any, delta: any): void {
    this.label2.text = "Equipped: " + this.currentItem;
    this.label2Bottom.text = "Remaining: " + this.itemCounts[this.itemsPos];
    if (this.itemCounts[this.itemsPos] === 0) {
      this.label2Bottom.color = ex.Color.Red;
      this.label2Bottom.text = "Out of " + this.currentItem + "!!";
    } else if (this.itemCounts[this.itemsPos] > 0) {
      this.label2Bottom.color = ex.Color.Blue;
    }

    engine.input.pointers.primary.on("down", (pe: any) => {
      if (
        pe.pointerType === ex.Input.PointerType.Mouse ||
        pe.pointerType === ex.Input.PointerType.Touch
      ) {
        //user has clicked or touched on screen
        if (!this.clicking && this.itemCounts[this.itemsPos] > 0) {
          this.itemCounts[this.itemsPos]--;
          this.addObstacle(this.itemsPos, pe);
          this.clicking = true;
        }
      }
    });

    engine.input.pointers.primary.on("up", (pe: any) => {
      if (
        pe.pointerType === ex.Input.PointerType.Mouse ||
        pe.pointerType === ex.Input.PointerType.Touch
      ) {
        //user has stopped clicking
        this.clicking = false;
      }
    });

    if (engine.input.keyboard.wasPressed(49)) {
      this.itemsPos = 1;
      this.currentItem = "Trampoline";
    }

    if (engine.input.keyboard.wasPressed(50)) {
      this.currentItem = "Speed Boost";
      this.itemsPos = 2;
    }

    if (engine.input.keyboard.wasPressed(51)) {
      this.itemsPos = 3;
      this.currentItem = "Shield";
    }

    if (engine.input.keyboard.wasPressed(52)) {
      this.itemsPos = 4;
      this.currentItem = "One Time Platform";
    }

    if (engine.input.keyboard.wasPressed(53)) {
      this.itemsPos = 5;
      this.currentItem = "white square";
    }

    if (engine.input.keyboard.wasPressed(54)) {
      this.itemsPos = 6;
      this.currentItem = "large red square";
    }

    if (engine.input.keyboard.wasPressed(55)) {
      this.itemsPos = 7;
      this.currentItem = "large green square";
    }

    if (engine.input.keyboard.wasPressed(56)) {
      this.itemsPos = 8;
      this.currentItem = "large blue square";
    }

    if (engine.input.keyboard.wasPressed(57)) {
      this.itemsPos = 9;
      this.currentItem = "large orange square";
    }
    super.update(engine, delta);
  }

  private addObstacle(position: number, pe: any): void {
    let obstacle: Ground = new Ground();
    switch (position) {
      case 1:
        obstacle = new Trampoline(pe.x, pe.y, 20, 10, ex.Color.Red);
        break;

      case 2:
        obstacle = new ForwardTile(pe.x, pe.y, 50, 50, ex.Color.Green);
        break;

      case 3:
        obstacle = new Shield(pe.x, pe.y, 50, 50, ex.Color.Blue);
        break;

      case 4:
        obstacle = new SingleUsePlatform(pe.x, pe.y, 50, 50, ex.Color.Orange);
        break;

      case 5:
        obstacle = new Ground(pe.x, pe.y, 50, 50, ex.Color.White);
        break;

      case 6:
        obstacle = new Ground(pe.x, pe.y, 100, 100, ex.Color.Red);
        break;

      case 7:
        obstacle = new Ground(pe.x, pe.y, 100, 100, ex.Color.Green);
        break;

      case 8:
        obstacle = new Ground(pe.x, pe.y, 100, 100, ex.Color.Blue);
        break;

      case 9:
        obstacle = new Ground(pe.x, pe.y, 100, 100, ex.Color.Orange);
        break;
    }

    this.scene.add(obstacle);
  }

  private setupAnimationSprites(engine: ex.Engine): void {}
}
