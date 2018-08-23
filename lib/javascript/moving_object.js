import Util from './util';
import { throws } from 'assert';

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.gravity = options.gravity;
    this.width = options.width;
    this.height = options.height;
    this.size = options.size;
    this.game = options.game;
  }

  collideWith(otherObject) {
    // default do nothing
  }

  isCollidedWith(otherObject) {
  // let {width} = this;
  // let {height} = this;
  // let {pos} = this;

  // if (pos[0] > otherObject.pos[0] + otherObject.width) {
  //   if ((pos[0] - otherObject.pos[0] - otherObject.width <= 2) && (pos[1] + height >= otherObject.pos[1])) {
  //     return [true, 'right'];
  //   }
  // } else if (pos[0] + width > otherObject.pos[0] + otherObject.width) {
  //   if ((otherObject.pos[0] - pos[0] - width <= 2) && (pos[1] + height >= otherObject.pos[1])) {
  //     return [true, 'left'];
  //   }
  // }

  // return [false];

  if (this.pos[0] < otherObject.pos[0] + otherObject.width &&
    this.pos[0] + this.width > otherObject.pos[0] &&
    this.pos[1] < otherObject.pos[1] + otherObject.height &&
    this.pos[1] + this.height > otherObject.pos[1]) {
      if (this.pos[0] > otherObject.pos[0]) {
        return [true, 'left'];
      } else {
        return [true, 'right'];
      }
  }

  return [false];
}

  move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;

    this.vel[1] += this.gravity;
    
    const offsetX = this.vel[0] * velocityScale;
    const offsetY = this.vel[1] * velocityScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
    this.handleOutOfBounds(this.game.isOutOfBounds(this));
  }

  remove() {
    this.game.remove(this);
  }
}

export default MovingObject;
