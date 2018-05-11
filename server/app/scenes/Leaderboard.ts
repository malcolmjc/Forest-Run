import * as ex from "excalibur";
import { BackToMenuButton } from "../buttons";
import { Header, SubHeader } from "../text";

export class Leaderboard extends ex.Scene {
  private static singleInstance: any = null;

  private constructor() {
    super();
  }

  public static getInstance(): Leaderboard {
    if (this.singleInstance === null) {
      this.singleInstance = new Leaderboard();
    }

    return this.singleInstance;
  }

  public onInitialize(engine: ex.Engine): void {
    const backBtn: BackToMenuButton = new BackToMenuButton();
    this.add(backBtn);

    const header: Header = new Header("This will be the Leaderboard", 100, 100);
    this.add(header);

    const subHeader: SubHeader = new SubHeader(
      "Here will be the stats",
      120,
      150
    );
    this.add(subHeader);
  }
}
