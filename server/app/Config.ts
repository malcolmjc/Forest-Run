import * as ex from "excalibur";

export namespace Config {
  // TEXT STRINGS
  export const headerText: string = "Welcome to ForestRun! (v0.0.6)";
  export const headerSubText: string =
    "Enjoy your alpha stay, please mind the bugs! :)";
  export const controlsSubText: string =
    "LIVE GAME: USE A, W, D or < ^ > to MOVE";

  // GLOBAL COLOR
  export const bgColor: ex.Color = new ex.Color(153, 228, 152);

  // MISC COLOR
  export const skyColor: ex.Color = new ex.Color(182, 254, 242);
  export const darkSkyColor: ex.Color = new ex.Color(44, 203, 177);
  export const barkColor: ex.Color = new ex.Color(101, 67, 22);
  export const sandColor: ex.Color = new ex.Color(228, 158, 61);
  export const darkGrayColor: ex.Color = new ex.Color(147, 152, 142);

  // BUTTON COLOR
  export const btnColor: ex.Color = new ex.Color(46, 175, 118);
  export const warnColor: ex.Color = new ex.Color(152, 48, 50);
  export const successColor: ex.Color = new ex.Color(66, 254, 98);
  export const readyBtnColor: ex.Color = new ex.Color(44, 203, 177);
  export const unreadyBtnColor: ex.Color = new ex.Color(152, 48, 50);

  // TEXT COLOR
  export const headerTextColor: ex.Color = new ex.Color(15, 88, 76);
  export const subHeaderTextColor: ex.Color = new ex.Color(53, 114, 104);
}
