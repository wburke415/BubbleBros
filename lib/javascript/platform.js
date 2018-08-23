

export default class Platform {
  constructor(options) {
    this.pos = options.pos;
    this.width = options.width;
    this.height = options.height;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(188, 50, 200, 100);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.lineWidth = 7;
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }

  move() {

  }

  isCollidedWith() {
    return false;
  }
}