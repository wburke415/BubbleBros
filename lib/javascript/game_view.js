var throttle = require('lodash/throttle');

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.player = this.game.addPlayers();
  }

  bindKeyHandlers() {
    const { player } = this;

    document.addEventListener('keypress', (event) => {
      if (GameView.MOVES[event.key]) player.run(GameView.MOVES[event.key]);
      if (event.code === 'Space') player.fireGrapple();
    });

    document.addEventListener('keyup', (event) => {
      if (GameView.MOVES[event.key]) player.stopRunning();
    });
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;

    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }
}

GameView.MOVES = {
  // w: [0, -1],
  a: [-1, 0],
  // s: [0, 1],
  d: [1, 0],
};

export default GameView;
