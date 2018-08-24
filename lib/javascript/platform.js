import MovingObject from "./moving_object";
import Ladder from './ladder';
import Bubble from './bubble';

export default class Platform extends MovingObject {
  constructor(options) {
    super(options);
    this.hasLadder = options.hasLadder || true;
    if (this.hasLadder) this.ladder = this.generateLadder();
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
    ctx.fillStyle = '#00FF00';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#00CC00';
    ctx.stroke();
  }

  generateLadder() {
    let ladder = new Ladder({
      pos: [this.pos[0] + (this.width / 2) - 20, this.pos[1] + this.height],
      vel: [0, 0],
      width: 40,
      height: 10,
      platform: this,
      game: this.game
    });

    this.game.add(ladder);
    return ladder;
  }

  move() {

  }
}