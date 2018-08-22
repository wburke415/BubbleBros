const Util = require('./util');
import MovingObject from './moving_object';
import Player from './player';
import Grapple from './grapple';

const DEFAULTS = {
  RADIUS: [24, 16, 8, 4],
  SPEED: [2, 4],
};

const SPRITE_SHEET = '/Users/whitman/Desktop/BubbleBros/lib/images/Buster Bros Balloons.png';
const SPRITES = [[1, 6, 48, 40], [52, 13, 32, 26], [86, 19, 16, 14], [106, 23, 8, 7]];

class Bubble extends MovingObject {
  constructor(options) {
    options.pos = options.pos || options.game.randomPosition();
    options.radius = DEFAULTS.RADIUS[options.size] || DEFAULTS[0];
    options.vel = options.vel || DEFAULTS.SPEED;
    super(options);
    
    this.size = options.size;
  }

  draw(ctx) {
    const bubble = new Image();
    bubble.src = SPRITE_SHEET;

    bubble.onload = () => {
      ctx.drawImage(bubble, SPRITES[this.size][0], SPRITES[this.size][1], SPRITES[this.size][2], SPRITES[this.size][3], this.pos[0], this.pos[1], SPRITES[this.size][2], SPRITES[this.size][3]); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
    };
  }

  handleOutOfBounds(axis) {
    if (axis === 'x') this.vel[0] *= -1;
    if (axis === 'y') {
      this.vel[1] *= -1.017;
      this.pos[1] -= 2;
    }
  }

  collideWith(otherObject) {
    if (otherObject instanceof Player) {
      debugger;
      otherObject.relocate();
      return true;
    }
    if (otherObject instanceof Grapple) {
      this.remove();
      otherObject.remove();
      return true;
    }
  }

  isCollidedWith(otherObject) {
    // if (otherObject instanceof Grapple) return false;
  }
}

export default Bubble;
