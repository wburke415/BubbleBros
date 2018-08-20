import MovingObject from './moving_object';
import Util from './util';


class Player extends MovingObject {
  constructor(options) {
    options.radius = Player.RADIUS;
    options.vel = options.vel || [0, 0];
    super(options);
  }

  draw(ctx) {
    const player = new Image();
    player.src = Player.SPRITE;

    player.onload = () => {
      ctx.drawImage(player, 9, 12, 48, 48, this.pos[0], this.pos[1], 80, 80); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
    };
  }

  relocate() {
    this.pos = Player.STARTING_POS;
    this.vel = [0, 0];
  }
}

Player.SPRITE = '/Users/whitman/Desktop/BubbleBros/lib/images/M484SpaceSoldier.png';
Player.STARTING_POS = [50, 552];

export default Player;
