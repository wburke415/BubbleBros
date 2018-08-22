import MovingObject from './moving_object';
import Bubble from './bubble';

class Grapple extends MovingObject {
  constructor(options) {
    options.radius = Grapple.RADIUS;
    options.vel = options.vel || Grapple.SPEED.slice(0);
    super(options);

    this.length = 0;
    this.freezeMotion = 0;
  }

  draw(ctx) {
    const rope = new Image();
    rope.src = ROPE_SPRITE_SHEET;

    const hook = new Image();
    hook.src = HOOK_SPRITE_SHEET;

    ctx.drawImage(hook, HOOK_SPRITE[0], HOOK_SPRITE[1], HOOK_SPRITE[2], HOOK_SPRITE[3], (this.pos[0] - 13), this.pos[1], 30, 35); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
    ctx.drawImage(rope, ROPE_SPRITE[0], ROPE_SPRITE[1], ROPE_SPRITE[2], this.length, this.pos[0], this.pos[1] + 30, Grapple.RADIUS * 2, this.length); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
  }

  isCollidedWith(object) {
    // if (object instanceof Bubble) {
    //   if (Math.abs(object.pos[0] + object.radius - this.pos[0]) > object.radius) return true;
    // }
  }

  handleOutOfBounds(axis) {
    if (axis === 'y') {
      this.vel[1] = 0;
      this.freezeMotion += 1;
      if (this.freezeMotion === Grapple.FREEZE_DUR) this.remove();
    }
  }
}

const ROPE_SPRITE_SHEET = '/Users/whitman/Desktop/BubbleBros/lib/images/rope_sprite.png';
const ROPE_SPRITE = [118, 17, 14, 949];
const HOOK_SPRITE_SHEET = '/Users/whitman/Desktop/BubbleBros/lib/images/Grappling Hook.png';
const HOOK_SPRITE = [4, 0, 222, 264];

Grapple.RADIUS = Object.freeze(2.5);
Grapple.SPEED = Object.freeze([0,-5]);
Grapple.FREEZE_DUR = Object.freeze(75);

export default Grapple;
