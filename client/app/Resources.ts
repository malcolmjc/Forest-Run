import * as ex from "excalibur";
import TiledResource, { TiledMapFormat } from "@excaliburjs/excalibur-tiled";

const data: any = require("./assets/map1.json");
export const map: TiledResource = new TiledResource(data, TiledMapFormat.JSON);

// ANIMATION / IMAGE ASSETS
const heart: any = require("./assets/heart.png");
const playerRun: any = require("./assets/PlayerRun.png");
const playerJump: any = require("./assets/PlayerJump.png");
const spike: any = require("./assets/spikes.png");
const trampoline: any = require("./assets/trampoline.png");
const happyface: any = require("./assets/happyface.png");
const angryface: any = require("./assets/angryface.png");
const pit: any = require("./assets/pit.png");
const reverseTile: any = require("./assets/reverseTile.png");
const forwardTile: any = require("./assets/forwardTile.png");
const shield: any = require("./assets/shield.png");
const singleUsePlatform: any = require("./assets/singleUsePlatform.png");
const trickPlatform: any = require("./assets/trickPlatform.png");

export const Resources: any = {
  map: new TiledResource(data, TiledMapFormat.JSON),
  playerRun: new ex.Texture(playerRun),
  playerJump: new ex.Texture(playerJump),
  spike: new ex.Texture(spike),
  trampoline: new ex.Texture(trampoline),
  happyface: new ex.Texture(happyface),
  angryface: new ex.Texture(angryface),
  pit: new ex.Texture(pit),
  reverseTile: new ex.Texture(reverseTile),
  forwardTile: new ex.Texture(forwardTile),
  shield: new ex.Texture(shield),
  singleUsePlatform: new ex.Texture(singleUsePlatform),
  trickPlatform: new ex.Texture(trickPlatform)
  // map: new Extensions.Tiled.TiledResource('assets/map.json'),
  // diagIntro: new ex.Texture('img/diag-intro.png'),
};
