import MovingObject from './moving_object';
import Bubble from './bubble';
import Platform from './platform';

const ROPE_SPRITE_SHEET = 'https://raw.githubusercontent.com/wburke415/BubbleBros/master/lib/images/rope_sprite.png';
const ROPE = [118, 17, 14, 949];
const HOOK_SPRITE_SHEET = 'https://raw.githubusercontent.com/wburke415/BubbleBros/master/lib/images/Grappling%20Hook.png';
const HOOK = [4, 0, 222, 264];

const DEFAULTS = {
  WIDTH: 5,
  HEIGHT: 0,
  VELOCITY: Object.freeze([0, -5]),
  GRAVITY: 0,
  FREEZE_DUR: 75,
}

export default class Grapple extends MovingObject {
  constructor(options) {
    options.width = DEFAULTS.WIDTH;
    options.height = DEFAULTS.HEIGHT;
    options.vel = options.vel || DEFAULTS.VELOCITY.slice(0);
    options.gravity = DEFAULTS.GRAVITY;
    super(options);

    this.freezeDur = DEFAULTS.FREEZE_DUR;
  }

  draw(ctx) {
    const rope = new Image();
    rope.src = ROPE_SPRITE_SHEET;

    const hook = new Image();
    hook.src = HOOK_SPRITE_SHEET;

    ctx.drawImage(hook, HOOK[0], HOOK[1], HOOK[2], HOOK[3], this.pos[0] - 13, this.pos[1], 30, 35); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
    ctx.drawImage(rope, ROPE[0], ROPE[1], ROPE[2], this.height, this.pos[0], this.pos[1] + 30, this.width, this.height); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
  }

  collideWith(otherObject) {
    if (otherObject instanceof Platform) {
      this.handleOutOfBounds('y');
    }
  }

  handleOutOfBounds(axis) {
    if (axis === 'y') {
      this.vel[1] = 0;
      this.freezeDur -= 1;
      if (this.freezeDur === 0) this.remove();
    }
  }
}