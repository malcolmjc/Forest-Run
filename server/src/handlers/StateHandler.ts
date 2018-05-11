import { EventEmitter } from "events";
import { Runner } from "../entities/Runner";

class StateHandler extends EventEmitter {
  private clock: any;
  private map: any;
  private entities: any;
  private winner: any;

  constructor(clock: any, map: any) {
    super();

    this.clock = clock;
    this.map = map;
    this.entities = {};

    //
    // Parse tiled object layers
    //
    for (var i = 0; i < map.layers.length; i++) {
      let layer = map.layers[i];
      for (var j = 0; j < layer.objects.length; j++) {
        this.parseObject(layer.name, layer.objects[j]);
      }
    }
  }

  parseObject(type, object) {
    let obj = {
      x: object.x,
      y: object.y,

      width: object.width,
      height: object.height,

      type: type,
      properties: object.properties
    };

    switch (type) {
      case "trees":
        // this.map.push(obj);
        // this.obstacles.push(obj);
        break;
    }
  }

  update(currentTime) {
    this.clock.tick();

    // update all entities
    for (let id in this.entities) {
      let entity = this.entities[id];
      if (entity.update) {
        entity.update(this);
      }
    }
  }

  gameOver(sideWinner) {
    this.clock.setTimeout(() => {
      this.emit("gameover");
      this.winner = sideWinner;
    }, 1000);
  }

  toJSON() {
    return {
      map: this.map,
      entities: this.entities,
      winner: this.winner
    };
  }
}
