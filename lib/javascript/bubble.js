import Util from './util';
import MovingObject from './moving_object';
import Player from './player';
import Bullet from './bullet';

const DEFAULTS = {
  COLOR: '#505050',
  RADIUS: 25,
  SPEED: 4,
};

class Bubble extends MovingObject {
  constructor(options) {
    options.color = DEFAULTS.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = DEFAULTS.RADIUS;
    options.vel = options.vel || Util.randomVec(DEFAULT.SPEED);
    super(options);
  }

  collideWith(otherObject) {
    if (otherObject instanceof Player) {
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
}

export default Bubble;
