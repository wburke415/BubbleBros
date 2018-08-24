import MovingObject from './moving_object';

export default class Ladder extends MovingObject{
  constructor(options) {
    super(options)
  }

  draw(ctxBG) {
    const ladder = new Image();
    ladder.src = SPRITE_SHEET;

    ladder.onload = () => {
      ctxBG.drawImage(ladder, SPRITES[this.size][0], SPRITES[this.size][1], SPRITES[this.size][2], SPRITES[this.size][3], this.pos[0], this.pos[1], this.width, this.height); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
    };
  }
}

const SPRITE_SHEET = '/Users/whitman/Desktop/BubbleBros/lib/images/ladder.png';
const SPRITES = [77, 4, 116, 298];