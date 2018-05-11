import * as ex from "excalibur";
import { Config } from "../Config";
import { StartGameButton } from "../buttons";
import { LeaderboardButton } from "../buttons";
import { FriendButton } from "../buttons";
import { SettingsButton } from "../buttons";
import { Header, SubHeader } from "../text";
import { FindGameButton } from "../buttons/FindGameButton";

export class MainMenu extends ex.Scene {
  private static singleInstance: any = null;

  private constructor() {
    super();
  }

  public static getInstance(): MainMenu {
    if (this.singleInstance === null) {
      this.singleInstance = new MainMenu();
    }

    return this.singleInstance;
  }

  public onInitialize(engine: ex.Engine): void {
    const findGameBtn: FindGameButton = new FindGameButton();
    this.add(findGameBtn);

    const leaderboardBtn: LeaderboardButton = new LeaderboardButton();
    this.add(leaderboardBtn);

    const friendsBtn: FriendButton = new FriendButton();
    this.add(friendsBtn);

    const settingsBtn: SettingsButton = new SettingsButton();
    this.add(settingsBtn);

    const header: Header = new Header(Config.headerText, 100, 100);
    this.add(header);

    const subHeader: SubHeader = new SubHeader(Config.headerSubText, 120, 150);
    this.add(subHeader);
  }

  public onActivate(): void {}

  public onDeactivate(): void {}
}
