import * as ex from "excalibur";
import * as Colyseus from "colyseus.js";
import { NetworkSingleton } from "../NetworkSingleton";
import { Notifications } from "../Notifications";

import { Header, SubHeader } from "../text";
import { ReadyUpButton, StartGameButton } from "../buttons";
import { PlayerCard, CurrentPlayers, TeamOne, TeamTwo } from "../ui";

export class PreLobby extends ex.Scene {
  private network: NetworkSingleton = NetworkSingleton.Instance();

  private currentPlayers: CurrentPlayers = new CurrentPlayers();
  private teamOne: TeamOne = new TeamOne();
  private teamOnePlayerCount: number = 0;
  private teamOnePlayers: any[];
  private teamTwoPlayerCount: number = 0;
  private teamTwoPlayers: any[];
  private teamTwo: TeamTwo = new TeamTwo();
  private connectedRoom: Colyseus.Room | undefined = undefined;
  private playerIsReady: boolean = false;

  constructor() {
    super();
  }

  public onActivate(): void {
    this.connectedRoom = this.network.getConnectedRoom();

    // LOG STATE ON UPDATES
    this.connectedRoom!.onUpdate.add(state => {
      console.log("the room state has been updated:", state);
      this.currentPlayers.setState(state.players);
      if (this.teamOnePlayerCount < 3) {
        //&& username not in teamOnePlayers
        this.teamOne.setState(state.players);
        this.teamOnePlayerCount++;
        this.teamOnePlayers.push("username");
      } else if (this.teamTwoPlayerCount < 3) {
        //&& username not in teamTwoPlayers
        this.teamTwo.setState(state.players);
        this.teamTwoPlayerCount++;
        this.teamTwoPlayers.push("username");
      }
    });

    this.connectedRoom!.listen(
      "players/:id/:attribute",
      (change: Colyseus.DataChange) => {
        console.log(JSON.stringify(change));
        const id: string = change.path.id;
        const val: any = change.value;

        // If the change updated the ready attribute of a player -> Post Notification
        if (
          change.operation === "replace" &&
          change.path.attribute === "ready"
        ) {
          val
            ? Notifications.post("PLAYER (" + change.path.id + ") READY!")
            : Notifications.error("PLAYER (" + change.path.id + ") UNREADIED!");
        }
      }
    );

    this.initializeUI();
  }

  private initializeUI(): void {
    this.add(this.currentPlayers);
    this.add(this.teamOne);
    this.add(this.teamTwo);

    const header: Header = new Header("Pre Game Lobby", 100, 100);
    this.add(header);

    const subHeader: SubHeader = new SubHeader(
      "(waiting for players...)",
      120,
      150
    );
    this.add(subHeader);

    const readyUpBtn: ReadyUpButton = new ReadyUpButton(100, 200);
    this.add(readyUpBtn);

    const startGameBtn: StartGameButton = new StartGameButton(100, 340);
    this.add(startGameBtn);

    Notifications.post("Connected to Prelobby!");
  }
}
