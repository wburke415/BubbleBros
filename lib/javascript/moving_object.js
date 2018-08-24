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

  isCollidedWith(otherObject, heightChange) {
    let extraHeight = heightChange || 0;
    var hit = !(this.pos[0] + this.width < otherObject.pos[0] ||
      otherObject.pos[0] + otherObject.width < this.pos[0] ||
      this.pos[1] + this.height + extraHeight < otherObject.pos[1] ||
      otherObject.pos[1] + otherObject.height < this.pos[1]);

      if (hit) {
        var dx = otherObject.pos[0] - this.pos[0];
        var dy = otherObject.pos[1] - this.pos[1];

        var angle = Math.atan2(dy, dx) * 180 / Math.PI;
        if (angle < 0) angle += 360;

        return angle;

      } else {
        return null;
      }
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
