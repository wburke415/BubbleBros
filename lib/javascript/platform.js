import MovingObject from "./moving_object";


export default class Platform extends MovingObject {
  constructor(options) {
    super(options);
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

  move() {

  }
}