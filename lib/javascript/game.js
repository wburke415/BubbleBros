import Player from './player';
import Bubble from './bubble';
import Grapple from './grapple';
import Platform from './platform';

export default class Game {
  constructor() {
    this.bubbles = [];
    this.grapples = [];
    this.players = [];
    this.platforms = [];

    this.addBubbles();
    this.addPlatforms();
  }

  add(object) {
    if (object instanceof Bubble) {
      this.bubbles.push(object);
    } else if (object instanceof Grapple) {
      this.grapples.push(object);
    } else if (object instanceof Player) {
      this.players.push(object);
    } else if (object instanceof Platform) {
      this.platforms.push(object);
    } else {
      throw new Error('Unknown type of object');
    }
  }

  addBubbles() {
    for (let i = 0; i < BUBBLE_CONFIG.NUM_BUBBLES; i++) {
      this.add(new Bubble({
        game: this,
        pos: BUBBLE_CONFIG[i].START_POS.slice(0),
        vel: BUBBLE_CONFIG[i].VELOCITY.slice(0),
        size: BUBBLE_CONFIG[i].SIZE
      }));
    }
  }

  addPlatforms() {
    this.add(new Platform({
      pos: [200, 200],
      height: 100,
      width: 400
    }));
  }

  addPlayers() {
    let mainPlayer;

    for (let i = 0; i < Game.NUM_PLAYERS; i++) {
      let player = new Player({
        pos: this.playerStartPos(i),
        game: this,
        playerNumber: i,
      });
      
      if (i === 0) mainPlayer = player;
      this.add(player);
    }

    return mainPlayer;
  }

  allObjects() {
    return [].concat(this.players, this.bubbles, this.grapples, this.platforms);
  }

  checkCollisions() {
    const allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        // if (i === j) continue;

        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        const isCollidedWith = obj1.isCollidedWith(obj2)

        if (isCollidedWith[0]) {
          obj1.collideWith(obj2, isCollidedWith[1]);
        }
      }
    }
  }

  generateLevelCoordinates(num) {
    const level = num || Math.floor(Math.random() * 50) + 1;
    this.level = level;

    let x;
    let y;

    level > 25 ? x = 400 : x = 8;
    let row = level % 25;
    (row === 1 || row === 26) ? y = 8 : y = 8 + (8 * row) + (208 * row);

    return [x, y];
  }

  draw(ctx) {
    const background = new Image();
    background.src = Game.BG_IMAGE;

    const levelCoordinates = this.generateLevelCoordinates(this.level);

    background.onload = () => {
      ctx.drawImage(background, levelCoordinates[0], levelCoordinates[1], 384, 208, 0, 0, Game.DIM_X, Game.DIM_Y);
    };

    this.allObjects().forEach(object => object.draw(ctx));
  }

  isOutOfBounds(object) {
    if ((object.pos[0] <= Game.DIM_X * Game.BG_BORDER) || (object.pos[0] + (object.width) >= Game.DIM_X - (Game.DIM_X * Game.BG_BORDER))) {
      return 'x';
    } else if ((object.pos[1] <= Game.DIM_Y * Game.BG_BORDER) || (object.pos[1] + (object.width) >= Game.DIM_Y - (Game.DIM_Y * Game.BG_BORDER))) {
      return 'y';
    }
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      if (object instanceof Grapple) {
        object.height += Math.abs(object.vel[1]);
      }
      object.move(delta);
    });
  }

  remove(object) {
    if (object instanceof Grapple) {
      this.grapples.splice(this.grapples.indexOf(object), 1);
    } else if (object instanceof Bubble) {
      this.bubbles.splice(this.bubbles.indexOf(object), 1);
    } else if (object instanceof Player) {
      this.players.splice(this.players.indexOf(object), 1);
    } else {
      throw new Error('Unknown type of object');
    }
  }
  
  randomPosition() {
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  }
  
  resetLevel() {
    this.bubbles = [];
    this.players.forEach(player => this.resetPlayerPos(player));
    this.addBubbles();
  }

  resetPlayerPos(player) {
    player.pos = this.playerStartPos(player.playerNumber);
  }

  playerStartPos(playerNumber) {
    return [Game.DIM_X * Game.PLAYER_START_POS[playerNumber][0], Game.DIM_Y * Game.PLAYER_START_POS[playerNumber][1]]
  }

  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
  }
}

Game.BG_IMAGE = '/Users/whitman/Desktop/BubbleBros/lib/images/Buster Bros Backgrounds.png';
Game.BG_BORDER = 0.02;
Game.DIM_X = 920;
Game.DIM_Y = 500;

Game.NUM_PLAYERS = 1;
Game.PLAYER_START_POS = [[0.05, 0.83], [0.95, 0.83]];

const BUBBLE_CONFIG = {
  NUM_BUBBLES: 2,

  0: {
    START_POS: [100, 200],
    VELOCITY: [2, 4],
    SIZE: 0
  },
  1: {
    START_POS: [800, 200],
    VELOCITY: [-2, 4],
    SIZE: 0
  }
};
