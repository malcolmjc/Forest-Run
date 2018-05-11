import * as ex from "excalibur";
import { StartGameButton } from "../buttons";
import { Header, SubHeader } from "../text";

export class PostLobby extends ex.Scene {
  private static singleInstance: any = null;

  private constructor() {
    super();
  }

  public static getInstance(): PostLobby {
    if (this.singleInstance === null) {
      this.singleInstance = new PostLobby();
    }

    return this.singleInstance;
  }

  public onInitialize(engine: ex.Engine): void {
    const header: Header = new Header("Post Game Lobby", 100, 100);
    this.add(header);

    const subHeader: SubHeader = new SubHeader("Game Concluded.", 120, 150);
    this.add(subHeader);
  }
}
