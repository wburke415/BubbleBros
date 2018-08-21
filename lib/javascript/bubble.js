const Util = require('./util');
import MovingObject from './moving_object';
import Player from './player';
import Bullet from './bullet';

const DEFAULTS = {
  RADIUS: [25, 16, 8, 4],
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

  collideWith(otherObject) {
    if (otherObject instanceof Player) {
      debugger;
      otherObject.relocate();
      return true;
    }
    if (otherObject instanceof Bullet) {
      this.remove();
      otherObject.remove();
      return true;
    }

    return false;
  }

  draw(ctx) {
    const bubble = new Image();
    bubble.src = SPRITE_SHEET;

    bubble.onload = () => {
      ctx.drawImage(bubble, SPRITES[this.size][0], SPRITES[this.size][1], SPRITES[this.size][2], SPRITES[this.size][3], this.pos[0], this.pos[1], SPRITES[this.size][2], SPRITES[this.size][3]); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
    };
  }
}

export default Bubble;
