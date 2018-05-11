import * as ex from "excalibur";
import { Config } from "./Config";

import TiledResource, { TiledMapFormat } from "@excaliburjs/excalibur-tiled";

import { Resources } from "./Resources";

// import config from '../config.json';

const data: any = require("./assets/map1.json");
export const map: TiledResource = new TiledResource(data, TiledMapFormat.JSON);

// ANIMATION / IMAGE ASSETS
const heart: any = require("./assets/heart.png");
const playerRun: any = require("./assets/PlayerRun.png");
const playerJump: any = require("./assets/PlayerJump.png");

import {
  MainMenu,
  PreLobby,
  LiveGame,
  Leaderboard,
  Friends,
  Settings
} from "./scenes";
import { ITiledMapLayer } from "@excaliburjs/excalibur-tiled/dist/lib/ITiledMap";

export class Game extends ex.Engine {
  private vent: ex.EventDispatcher;

  public heartTexture: ex.Texture;
  public runningTexture: ex.Texture;
  public jumpingTexture: ex.Texture;

  public spriteSheetRun: ex.SpriteSheet;
  public spriteSheetJump: ex.SpriteSheet;

  constructor() {
    const engineOpts: ex.IEngineOptions = {
      width: 1000, // the width of the canvas
      height: 800, // the height of the canvas
      displayMode: ex.DisplayMode.Container,
      scrollPreventionMode: ex.ScrollPreventionMode.All, // the display mode
      canvasElementId: "game",
      backgroundColor: Config.bgColor
    };

    super(engineOpts);

    console.log(JSON.stringify(data));

    ex.Physics.collisionResolutionStrategy = ex.CollisionResolutionStrategy.Box;

    // ex.Physics.allowRigidBodyRotation = true;

    // set global acceleration simulating gravity pointing down
    ex.Physics.defaultMass = 100;
    ex.Physics.acc.setTo(0, 800);

    // ex.Physics.boundsPadding = 10;
    // ex.Physics.dynamicTreeVelocityMultiplyer = 4;

    // ex.Physics.surfaceEpsilon = 20;

    // ex.Physics.broadphaseStrategy = ex.BroadphaseStrategy.Naive;

    ex.Physics.collisionPasses = 10;
    ex.Physics.integrationSteps = 10;

    // ex.Physics.broadphaseDebug = true;
    // ex.Physics.showArea = true;
    // ex.Physics.showMotionVectors = true;
    // ex.Physics.showBounds = true;
    // ex.Physics.showContacts = true;
    // ex.Physics.showNormals = true;

    ex.Physics.checkForFastBodies = true;
    // ex.Physics.disableMinimumSpeedForFastBody = true;

    // enable physics
    ex.Physics.enabled = true;

    this.heartTexture = new ex.Texture(heart);
    this.runningTexture = new ex.Texture(playerRun);
    this.jumpingTexture = new ex.Texture(playerJump);
  }

  public start(loader: ex.Loader): ex.Promise<any> {
    // add custom scenes
    // add to game and activate it

    const charSheets: any[] = [];

    for (const r in Resources) {
      if (r) {
        loader.addResource(Resources[r]);
        if (r.search("charSheet") !== -1) {
          console.log(Resources[r]);
          charSheets.push(r);
        }
      }
    }

    this.add("mainmenu", MainMenu.getInstance());
    this.add("leaderboard", Leaderboard.getInstance());
    this.add("friends", Friends.getInstance());
    this.add("settings", Settings.getInstance());

    return super.start(loader).then(() => {
      this.goToScene("mainmenu");
    });
  }
}
