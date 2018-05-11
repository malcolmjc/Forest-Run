import * as ex from "excalibur";
import { Game } from "../Game";
import { Player } from "./Player";
import { NetworkSingleton } from "../NetworkSingleton";
import { Ground, Wall, Checkpoint, FinishLine } from "./index";
import { Resources } from "../Resources";
import { Animations } from "../Animations";

export class Runner extends ex.Actor {
  private network: NetworkSingleton = NetworkSingleton.Instance();

  //character starts out in air
  public jumping: number = 1;

  public sprintActive: boolean = false; // is the character sprinting
  public timerSet: boolean = false; // is the timer for sprinting set
  public timer: any; // timer for sprinting
  public movementSpeed: number = 1.0; // how fast the player moves 1 = normal

  public ducking: boolean = false; // is the player ducking
  public slideTimer: any; // timer for sliding
  public movementDirection: number; // -1 = left, 1 = right
  public members: ex.Actor[]; // members of the scenes group

  public checkpointx: number = 300;
  public checkpointy: number = 1800;

  public wjTimer: any; // timer for wall jump
  private wjTimerSet: boolean = false; // is the timer for wall jump set

  public engine: ex.Engine;
  // private height: number;

  constructor(
    x?: number,
    y?: number,
    public width: number = 32,
    public height: number = 96
  ) {
    super(x || 0, y || 450, width || 32, height || 96);

    this.body.useBoxCollision();
    this.collisionType = ex.CollisionType.Active;

    this.collisionArea = this.body.collisionArea;

    this.body.restitution = 0;

    this.body.mass = 300;
    this.body.friction = 100;

    this.onCollidesWith("checkpoint", trigger => {
      this.setCheckpoint();
    });

    let delta: number = 16 / 1000; // default to 60fps to start
    const intersection: ex.Vector = ex.Vector.Zero;

    this.on("precollision", (evt: ex.PostCollisionEvent) => {
      if (evt.side === ex.Side.Bottom && evt.other === null) {
        evt.actor.vel.y = 0;
        evt.actor.pos.y += evt.intersection.y;
        evt.actor.pos.y -= ex.Physics.acc.y * delta * delta;
      }
    });

    this.on("preupdate", (evt: ex.PreUpdateEvent) => {
      delta = evt.delta / 1000; // convert to seconds
    });

    // Because the current tilemap implementation does not deal with fast acceleration well with
    // small objects we need to check for skipped frames and correct.
    this.on("postupdate", () => {
      if (delta > 32 / 1000) {
        // catch frame drops that can increase update distance and reset to last know good position/velocity for 1 frame
        this.vel = this.oldVel;
        this.pos = this.oldPos;
        console.log("reset");
      }
    });

    this.on("precollision", evt => {
      if (!this.ducking) {
        this.movementSpeed = 1.0;
      }

      if (evt !== undefined) {
        if (evt.other instanceof FinishLine) {
          this.kill();
          this.engine.goToScene("prelobby");
        }

        this.resetWallJump();

        if (evt.side === 2) {
          this.jumping = 0; //after hitting the ground reset jumping
        }

        if (this.jumping !== 0) {
          // left wall side
          if (evt.side === 4) {
            this.resetSprinting();
            this.jumping = -1; //after hitting side of wall you get special wall jump
          }

          // right wall side
          if (evt.side === 3) {
            this.resetSprinting();
            this.jumping = -1; //after hitting side of wall you get special wall jump
          }
        }
      }
    });
  }

  public onInitialize(engine: ex.Engine): void {
    this.engine = engine;
    super.onInitialize(engine);

    this.setupAnimationSprites(engine);

    this.members = this.scene.getGroup("livegame").getMembers();
    this.height = this.getHeight();

    const label: ex.Label = new ex.Label();
    label.x = 150;
    label.y = 150;
    label.fontFamily = "Arial";
    label.fontSize = 28;
    label.fontUnit = ex.FontUnit.Px; // pixels are the default
    label.text = "Player 1";
    label.color = ex.Color.White;
    label.textAlign = ex.TextAlign.Center;
    this.add(label);
  }

  public update(engine: any, delta: any): void {
    // this.scene.camera.move(new ex.Vector(this.pos.x, 0), 0);

    //If the down arrow or s key is released reset height
    //If the left/right movement ends cancel sprint timer
    engine.input.keyboard.on("release", evt => {
      if (evt.key === 40 || evt.key === 83) {
        this.setHeight(this.height);
        if (!this.wjTimerSet) {
          this.movementSpeed = 1.0;
        }

        this.ducking = false;
      }

      if (
        evt.key === 37 ||
        evt.key === 65 ||
        evt.key === 39 ||
        evt.key === 68
      ) {
        this.timerSet = false;
        clearTimeout(this.timer);
        this.sprintActive = false;
        if (!this.ducking && !this.wjTimerSet) {
          this.movementSpeed = 1.0;
        }
      }
    });

    if (
      engine.input.keyboard.wasPressed(ex.Input.Keys.W) ||
      engine.input.keyboard.wasPressed(ex.Input.Keys.Up)
    ) {
      if (!this.jumping) {
        this.jump();
      } else if (this.jumping === 1) {
        this.doubleJump();
      } else if (this.jumping === -1) {
        this.wallJump(this.movementDirection);
      }
    }

    if (
      engine.input.keyboard.isHeld(ex.Input.Keys.A) ||
      engine.input.keyboard.isHeld(ex.Input.Keys.Left)
    ) {
      this.moveLeft();
      //if the user moves away from the wall they can't wall jump
      if (this.jumping === -1) {
        this.resetWallJump();
        this.jumping = 1;
      }

      this.movementDirection = -1;

      //If timer got set prior to jumping cancel it after jumping
      if (this.jumping > 0) clearTimeout(this.timer);

      if (!this.sprintActive) {
        //don't set sprint if ducking or jumping
        if (!this.timerSet && !this.ducking && this.jumping === 0) {
          this.timer = setTimeout(() => {
            this.sprintActive = true;
          }, 500);
          this.timerSet = true;
        }
      } else if (this.jumping === 0) {
        //set movement speed higher if not jumping
        this.movementSpeed = 1.5;
      }
    }

    if (
      engine.input.keyboard.isHeld(ex.Input.Keys.D) ||
      engine.input.keyboard.isHeld(ex.Input.Keys.Right)
    ) {
      this.moveRight();
      //if the user moves away from the wall they can't wall jump
      if (this.jumping === -1) {
        this.resetWallJump();
        this.jumping = 1;
      }

      this.movementDirection = 1;

      //If timer got set prior to jumping cancel it after jumping
      if (this.jumping > 0) clearTimeout(this.timer);

      if (!this.sprintActive) {
        //don't set sprint timer if ducking or sprinting
        if (!this.timerSet && !this.ducking && this.jumping === 0) {
          this.timer = setTimeout(() => {
            this.sprintActive = true;
          }, 500);
          this.timerSet = true;
        }
      } else if (this.jumping === 0) {
        //set movement speed higher if not jumping
        this.movementSpeed = 1.5;
      }
    }

    if (
      engine.input.keyboard.wasPressed(ex.Input.Keys.S) ||
      engine.input.keyboard.wasPressed(ex.Input.Keys.Down)
    ) {
      this.duck();
    }

    if (this.pos.y > 2100) {
      this.die();
    }
    super.update(engine, delta);
  }

  private die(): void {
    this.pos.x = this.checkpointx;
    this.pos.y = this.checkpointy;
  }

  private setCheckpoint(): void {
    this.checkpointx = this.pos.x;
    this.checkpointy = this.pos.y;
  }

  private jump(): void {
    this.vel.y = -600;
    this.jumping = 1;
    if (this.movementDirection === 1) {
      this.setDrawing(Animations.JumpRight);
    } else {
      this.setDrawing(Animations.JumpLeft);
    }
  }

  private doubleJump(): void {
    this.vel.y = -400;
    this.jumping = 2;
  }

  private wallJump(direction: number): void {
    clearTimeout(this.wjTimer);
    this.vel.y = -600;

    if (direction === 1) {
      this.vel.x = -600;
    } else {
      this.vel.x = 600;
    }

    this.movementSpeed = 0.05;
    this.wjTimer = setTimeout(() => {
      this.vel.x = 0;
      this.movementSpeed = 1.0;
    }, 750);

    this.wjTimerSet = true;

    this.jumping = 2;
    this.movementDirection *= -1; //reverse movement direction
  }

  private moveLeft(): void {
    this.pos.x -= 10 * this.movementSpeed;
    if (this.jumping === 0) {
      this.setDrawing(Animations.Left);
    }
  }

  private moveRight(): void {
    this.pos.x += 10 * this.movementSpeed;
    if (this.jumping === 0) {
      this.setDrawing(Animations.Right);
    }
  }

  //Will have to improve how it looks, rn seems as if floating
  private duck(): void {
    //if you aren't sliding duck
    if (!this.sprintActive) {
      clearTimeout(this.timer);
      this.setHeight(this.height * 0.75);
      this.movementSpeed = 0.5;
      this.ducking = true;
    } else {
      //slide
      this.setHeight(this.height * 0.3);
      this.slideTimer = setTimeout(() => {
        this.setHeight(this.height);
        this.resetSprinting();
      }, 200);
    }
  }

  private resetWallJump(): void {
    clearTimeout(this.wjTimer);
    this.wjTimerSet = false;
    this.vel.x = 0;
    this.movementSpeed = 1.0;
  }

  private resetSprinting(): void {
    clearTimeout(this.timer);
    this.timerSet = false;
    this.movementSpeed = 1.0;
    this.sprintActive = false;
  }

  private setupAnimationSprites(engine: ex.Engine): void {
    const runningSheet: ex.SpriteSheet = new ex.SpriteSheet(
      Resources.playerRun,
      10,
      1,
      96,
      96
    );
    const jumpingSheet: ex.SpriteSheet = new ex.SpriteSheet(
      Resources.playerJump,
      10,
      1,
      96,
      96
    );

    //this.addDrawing('running', Resou.spriteSheetRun);

    // ANIMATION

    // Retrieve animations for player from sprite sheet
    const left: ex.Animation = runningSheet.getAnimationBetween(
      engine,
      1,
      11,
      50
    );
    const right: ex.Animation = runningSheet.getAnimationBetween(
      engine,
      1,
      11,
      50
    );
    right.flipHorizontal = true;
    const idle: ex.Animation = runningSheet.getAnimationByIndices(
      engine,
      [0],
      200
    );
    // idle.anchor.setTo(-1, -1);
    const jumpLeft: ex.Animation = jumpingSheet.getAnimationBetween(
      engine,
      0,
      11,
      100
    );
    const jumpRight: ex.Animation = jumpingSheet.getAnimationBetween(
      engine,
      0,
      11,
      100
    );
    jumpRight.flipHorizontal = true;
    left.loop = true;
    right.loop = true;
    idle.loop = true;

    jumpRight.freezeFrame = 0;
    jumpLeft.freezeFrame = 11;

    // Add animations to player
    this.addDrawing(Animations.Left, left);
    this.addDrawing(Animations.Right, right);
    this.addDrawing(Animations.Idle, idle);
    this.addDrawing(Animations.JumpRight, jumpRight);
    this.addDrawing(Animations.JumpLeft, jumpLeft);

    // Set default animation
    this.setDrawing(Animations.Idle);
  }
}
