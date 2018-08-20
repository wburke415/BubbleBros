import Player from './player';
import Bubble from './bubble';
import Bullet from './bullet';

class Game {
  constructor() {
    this.bubbles = [];
    this.bullets = [];
    this.players = [];

    // this.addBubbles();

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

  addPlayer() {
    const player = new Player({
      pos: Player.STARTING_POS,
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

  draw(ctx) {
    // ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    // ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    const background = new Image();
    background.src = Game.BG_IMAGE;

    background.onload = () => {
      ctx.drawImage(background, 0, 0);
    };

    this.allObjects().forEach(object => object.draw(ctx));
  }

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) || (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

  remove(object) {
    debugger;
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

  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
  }
}


Game.BG_IMAGE = '/Users/whitman/Desktop/BubbleBros/lib/images/mountain_full_background1.png';
Game.DIM_X = 1000;
Game.DIM_Y = 700;
Game.FPS = 32;
Game.NUM_BUBBLES = 3;

export default Game;
