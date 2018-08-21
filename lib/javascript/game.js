import Player from './player';
import Bubble from './bubble';
import Bullet from './bullet';

class Game {
  constructor() {
    this.bubbles = [];
    this.bullets = [];
    this.players = [];

    this.addBubbles();

    this.allObjects = this.allObjects.bind(this);
  }

  add(object) {
    if (object instanceof Bubble) {
      this.bubbles.push(object);
    } else if (object instanceof Bullet) {
      this.bullets.push(object);
    } else if (object instanceof Player) {
      this.players.push(object);
    } else {
      throw new Error('Unknown type of object');
    }
  }

  addBubbles() {
    for (let i = 0; i < Game.NUM_BUBBLES; i++) {
      this.add(new Bubble({
        game: this,
        pos: Game.BUBBLE_START_POS[0],
        size: 0
      }));
    }
  }

  addPlayer() {
    const player = new Player({
      pos: [Game.DIM_X * Game.PLAYER_START_POS[0], Game.DIM_Y * Game.PLAYER_START_POS[1]],
      game: this,
    });

    this.add(player);

    return player;
  }

  allObjects() {
    return [].concat(this.players, this.bubbles, this.bullets);
  }

  checkCollisions() {
    const allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        if (obj1.isCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
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

  isOutOfBounds(pos, object) {
    if (object instanceof Bubble) {
      if (pos[0] <= 20) {
        object.vel[0] *= -1;
      }
      else if (pos[1] <= 20) {
        object.vel[1] *= -1;
      }
      else if (pos[0] >= Game.DIM_X - 67) {
        object.vel[0] *= -1;
      }
      else if (pos[1] >= Game.DIM_Y - 60) {
        object.vel[1] *= -1;
      }
    }
    // return (pos[0] < 0) || (pos[1] < 0) || (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      if (object instanceof Bubble) {
        if (object.pos[1] <= Game.DIM_Y * Game.MAX_BUBBLE_HEIGHT[object.size]) object.pos[1] *= -1
      }
      object.move(delta);
    });
  }

  remove(object) {
    if (object instanceof Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1);
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

  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
  }
}

Game.BG_IMAGE = '/Users/whitman/Desktop/BubbleBros/lib/images/Buster Bros Backgrounds.png';
Game.BG_ASPECT_RATIO
Game.DIM_X = 920;
Game.DIM_Y = 500;
Game.FPS = 30;
Game.NUM_BUBBLES = 1;
Game.BUBBLE_START_POS = [[100, 400]]
Game.PLAYER_START_POS = [0.05, 0.8];
Game.MAX_BUBBLE_HEIGHT = [0.4, 0.3, 0.4, 0.6]

export default Game;
