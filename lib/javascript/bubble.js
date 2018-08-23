const Util = require('./util');
import MovingObject from './moving_object';
import Player from './player';
import Grapple from './grapple';

const DEFAULTS = {
  VELOCITY: [2, 4],
  GRAVITY: 0.15,
  SIZE: 0
};

const SPRITE_SHEET = '/Users/whitman/Desktop/BubbleBros/lib/images/Buster Bros Balloons.png';
const SPRITES = [[1, 6, 48, 40], [52, 13, 32, 26], [86, 19, 16, 14], [106, 23, 8, 7]];

export default class Bubble extends MovingObject {
  constructor(options) {
    options.size = options.size || DEFAULTS.SIZE;
    options.pos = options.pos || options.game.randomPosition();
    options.vel = options.vel || DEFAULTS.VELOCITY;
    options.gravity = options.gravity || DEFAULTS.GRAVITY;
    options.width = SPRITES[options.size][2] * 2;
    options.height = SPRITES[options.size][3] * 2;
    super(options);
    
  }

  draw(ctx) {
    const bubble = new Image();
    bubble.src = SPRITE_SHEET;

    bubble.onload = () => {
      ctx.drawImage(bubble, SPRITES[this.size][0], SPRITES[this.size][1], SPRITES[this.size][2], SPRITES[this.size][3], this.pos[0], this.pos[1], this.width, this.height); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
    };
  }

  handleOutOfBounds(axis) {
    if (axis === 'x') this.vel[0] *= -1;
    if (axis === 'y') {
      this.vel[1] *= -1;
      if (this.pos[1] > 100) this.pos[1] -= 2;
      if (this.pos[1] < 100) this.pos[1] += 2;
    }
  }

  collideWith(otherObject) {
    if (otherObject instanceof Grapple) {
      otherObject.remove();
      if (this.size < 3) {
        this.splitBubble()
      } else {
        this.remove();
      }
    }
  }

  splitBubble() {
    this.remove();

    this.game.add(new Bubble({
      game: this.game,
      pos: [this.pos[0] - 5, this.pos[1]],
      vel: [this.vel[0] * -1, this.vel[1]],
      size: this.size + 1
    }));
    this.game.add(new Bubble({
      game: this.game,
      pos: [this.pos[0] + 5, this.pos[1]],
      vel: this.vel,
      size: this.size + 1
    }));
  }

}
