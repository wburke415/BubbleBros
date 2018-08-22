import MovingObject from './moving_object';
import Grapple from './grapple';

const Util = require('./util');


class Player extends MovingObject {
  constructor(options) {
    options.radius = Player.RADIUS;
    options.vel = options.vel || [0, 0];
    super(options);

    this.sprite = Player.STANDING_ANIMATION;
    this.spriteIndex = 0;
    this.outOfBounds = false;

    this.lastFire = new Date();
    this.fireGrapple = this.fireGrapple.bind(this);
  }

  draw(ctx) {
    const player = new Image();
    player.src = Player.SPRITE_SHEET;

    ctx.drawImage(player, this.sprite[0], this.sprite[1], 33, 33, this.pos[0], this.pos[1], 80, 80); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
  }

  fireGrapple() {
    const time = new Date();
    
    if (time - this.lastFire > 500 && this.vel[0] === 0 && this.vel[1] === 0) {
      this.lastFire = time;

      const grapple = new Grapple({
        pos: [this.pos[0] + 48, this.pos[1] + 50],
        game: this.game,
      });
  
      this.game.add(grapple);
    }
  }

  isCollidedWith() {

  }

  handleOutOfBounds(axis) {
    if (axis === 'x' && this.pos[0] < 100) this.pos[0] += 5;
    if (axis === 'x' && this.pos[0] > 100) this.pos[0] -= 5;
  }

  run(changeInPos) {
    this.vel[0] = changeInPos[0] * 3;
    this.vel[1] = changeInPos[1] * 3;
    
    if (changeInPos[0] === 1) {
      this.sprite = Player.RUNNING_ANIMATION_RIGHT[this.spriteIndex];
      this.spriteIndex = (this.spriteIndex + 1) % 4;
    } else if (changeInPos[0] === -1) {
      this.sprite = Player.RUNNING_ANIMATION_LEFT[this.spriteIndex];
      this.spriteIndex = (this.spriteIndex + 1) % 4;
    }
  }

  stopRunning() {
    this.vel = [0, 0];
    this.spriteIndex = 0;
    this.sprite = Player.STANDING_ANIMATION;
  }
}

Player.Radius = 25;
Player.SPRITE_SHEET = '/Users/whitman/Desktop/BubbleBros/lib/images/sprite_file.png';
Player.STANDING_ANIMATION = [5, 148];
Player.RUNNING_ANIMATION_RIGHT = [[9, 38], [42, 38], [77, 38], [110, 38], [143, 38]];
Player.RUNNING_ANIMATION_LEFT = [[9, 3], [42, 3], [75, 3], [109, 3], [143, 3]];

export default Player;
