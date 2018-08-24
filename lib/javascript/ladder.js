import MovingObject from './moving_object';

export default class Ladder extends MovingObject{
  constructor(options) {
    options.width = options.width || 20;
    options.height = options.height || 50;
    options.gravity = 0;
    super(options);

    this.platform = options.platform;

    this.building = true;
  }

  draw(ctxBG) {
    const ladder = new Image();
    ladder.src = SPRITE_SHEET;

    ladder.onload = () => {
      ctxBG.drawImage(ladder, SPRITE[0], SPRITE[1], SPRITE[2], SPRITE[3], this.pos[0], this.pos[1], this.width, this.height); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
    };
  }

  handleOutOfBounds(axis) {
    if (axis === 'y') {
      this.building = false;
    }
  }
}

const SPRITE_SHEET = '/BubbleBros/lib/images/ladder.png';
const SPRITE = [77, 4, 116, 298];