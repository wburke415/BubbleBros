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
      ctx.drawImage(player, 0, 0);
    };
  }
}

Player.SPRITE = '/Users/whitman/Desktop/BubbleBros/lib/images/M484SpaceSoldier.png';

export default Player;
