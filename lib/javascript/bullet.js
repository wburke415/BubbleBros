import MovingObject from './moving_object';

class Bullet extends MovingObject {
  constructor(options) {
    options.radius = Bullet.RADIUS;
    super(options);
  }
}

Bullet.RADIUS = 2;
Bullet.SPEED = 5;

export default Bullet;
