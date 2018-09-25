import MovingObject from './moving_object';
import Grapple from './grapple';
import Bubble from './bubble';
import Platform from './platform';
import Ladder from './ladder';

const SPRITE_SHEET = 'https://raw.githubusercontent.com/wburke415/BubbleBros/master/lib/images/sprite_file.png';
const STANDING_ANIMATION = [11, 149, 26, 32];
const FIRE_GRAPPLE_ANIMATION = [43, 152, 27, 29]
const RUNNING_ANIMATION_RIGHT = [[11, 39, 30, 32], [45, 40, 30, 31], [79, 39, 30, 32], [113, 40, 28, 31], [148, 40, 30, 31]];
const RUNNING_ANIMATION_LEFT = [[145, 5, 30, 32], [111, 6, 30, 31], [77, 5, 30, 32], [45, 6, 28, 31], [9, 6, 30, 31]];
const CLIMBING_ANIMATION = [[12, 73, 24, 32], [48, 73, 24, 32], [80, 73, 26, 32], [114, 73, 26, 32]];
const COLLISION_ANIMATION_RIGHT = [80, 149, 41, 30];
const COLLISION_ANIMATION_LEFT = [131, 149, 41, 30];

const GRAPPLE_TIMEOUT = 300;

const DEFAULTS = {
  VELOCITY: Object.freeze([0, 0]),
  GRAVITY: 0,
  LIVES: 3,
  PLAYER_NUMBER: 0
};

export default class Player extends MovingObject {
  constructor(options) {
    options.width = STANDING_ANIMATION[2] * 2;
    options.height = STANDING_ANIMATION[3] * 2;
    options.vel = options.vel || DEFAULTS.VELOCITY.slice(0);
    options.gravity = DEFAULTS.GRAVITY;
    super(options);

    this.sprite = STANDING_ANIMATION;
    this.spriteIndex = 0;

    this.outOfBounds = false;
    this.dying = false;

    this.lastFire = new Date();
    this.fireGrapple = this.fireGrapple.bind(this);

    this.ladder = null;
    this.climbing = false;

    this.platform = null;

    this.livesLeft = options.livesLeft || DEFAULTS.LIVES;
    this.playerNumber = options.playerNumber || DEFAULTS.PLAYER_NUMBER;
  }

  draw(ctx) {
    const player = new Image();
    player.src = SPRITE_SHEET;

    ctx.drawImage(player, this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], this.pos[0], this.pos[1], this.sprite[2] * 2, this.sprite[3] * 2); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
  }

  collideWith(otherObject, angle) {
    if (otherObject instanceof Bubble && !this.dying) {
      this.collisionAnimation(angle)
      setTimeout(() => {
        if (this.livesLeft > 1) {
          this.livesLeft -= 1;
          this.resetLevel();
        } else {
          this.remove();
        }
      }, 2000)
    }
    if (otherObject instanceof Platform) {
      this.platform = otherObject;
      this.ladder = otherObject.ladder;
    }
    if (otherObject instanceof Ladder) this.ladder = otherObject;
  }

  collisionAnimation(angle) {
    this.dying = true;
    this.gravity = .1;
    if ((angle >= 0 && angle < 90) || (angle > 270 && angle < 360)) {
      this.sprite = COLLISION_ANIMATION_RIGHT;
      this.spriteIndex = 0;
    } else {
      this.sprite = COLLISION_ANIMATION_LEFT;
      this.spriteIndex = 0;
    }
  }

  fireGrapple() {
    const time = new Date();
    
    if (time - this.lastFire > GRAPPLE_TIMEOUT && !this.dying && !this.game.countdown && this.gravity === 0) {
      this.sprite = FIRE_GRAPPLE_ANIMATION;
      this.spriteIndex = 0;

      this.lastFire = time;
      setTimeout(() => {
        const grapple = new Grapple({
          pos: [this.pos[0] + 27, this.pos[1] + 32],
          game: this.game,
        });
    
        this.game.add(grapple);
        this.sprite = STANDING_ANIMATION;
      }, 100)
    }
  }

  handleOutOfBounds(axis) {
    if (axis === 'x' && this.pos[0] < 100) this.pos[0] += 5;
    if (axis === 'x' && this.pos[0] > 100) this.pos[0] -= 5;
    if (axis === 'y' && this.pos[1] > this.game.playerStartPos(this.playerNumber)[1] + 10 && !this.dying) {
      this.climbing = false;
      this.gravity = 0;
      this.vel = [0,0];
      this.pos[1] = 417;
    }
  }

  run(changeInPos) {
    if (!this.dying && !this.game.stageClear && !this.climbing && !this.game.countdown) {
      let platform = this.platform;

      if (platform && (this.pos[0] < platform.pos[0] || this.pos[0] > platform.pos[0] + platform.width - this.width)) {
        this.gravity += 0.5;
        this.platform = false;
      } 

      this.vel[0] = changeInPos[0] * 3;
      
      if (changeInPos[0] === 1) {
        this.sprite = RUNNING_ANIMATION_RIGHT[this.spriteIndex];
        this.spriteIndex = (this.spriteIndex + 1) % 5;
      } else if (changeInPos[0] === -1) {
        this.sprite = RUNNING_ANIMATION_LEFT[this.spriteIndex];
        this.spriteIndex = (this.spriteIndex + 1) % 5;
      }
    }
  }

  stopRunning() {
    if (!this.dying && !this.climbing) {
      this.vel = [0, 0];
      this.spriteIndex = 0;
      this.sprite = STANDING_ANIMATION;
    }
  }

  climb(changeInPos) {
    if (!this.dying && !this.game.stageClear && this.vel[0] === 0 && !this.game.countdown) {
      if (changeInPos[1] === -1 && this.ladder && this.isCollidedWith(this.ladder)) {
        this.climbing = true;
        this.vel[1] = changeInPos[1] * 2;
        this.sprite = CLIMBING_ANIMATION[Math.floor(this.spriteIndex)];
        this.spriteIndex = (this.spriteIndex + 0.5) % 4;
      } else if (changeInPos[1] === 1 && this.isCollidedWith(this.ladder, 10) && this.pos[1] < 412) {
          this.climbing = true;
          this.vel[1] = changeInPos[1] * 2;
          this.sprite = CLIMBING_ANIMATION[Math.floor(this.spriteIndex)];
          this.spriteIndex = (this.spriteIndex + 0.5) % 4;
      } else {
        this.climbing = false;
        this.stopClimbing();
      }
    } 
  }

  stopClimbing() {
    if (!this.dying) {
      if (this.platform && !this.isCollidedWith(this.platform)) this.platform = null;

      this.vel = [0, 0];

      if (!this.climbing) {
        this.spriteIndex = 0;
        this.sprite = STANDING_ANIMATION;
        if (this.game.isOutOfBounds(this)) this.game.resetPlayerY(this);
      }

    }
  }

  resetLevel() {
    this.dying = false;
    this.gravity = 0;
    this.vel = [0, 0];
    this.sprite = STANDING_ANIMATION;
    this.game.resetLevel();
  }
}
