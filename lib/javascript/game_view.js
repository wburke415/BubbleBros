class GameView {
  constructor(game, ctxBORDER, ctxHUD, ctxBG, ctxPLAYER) {
    this.ctxBORDER = ctxBORDER;
    this.ctxHUD = ctxHUD;
    this.ctxBG = ctxBG;
    this.ctxPLAYER = ctxPLAYER;
    this.game = game;
    this.player = this.game.addPlayers();
  }

  bindKeyHandlers() {
    const { player } = this;

    document.addEventListener('keypress', (event) => {
      if (GameView.RUN[event.key]) player.run(GameView.RUN[event.key]);
      if (GameView.CLIMB[event.key]) player.climb(GameView.CLIMB[event.key]);
      if (event.code === 'Space') player.fireGrapple();
    });

    document.addEventListener('keyup', (event) => {
      if (GameView.RUN[event.key]) player.stopRunning();
      if (GameView.CLIMB[event.key]) player.stopClimbing();
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
    this.game.draw(this.ctxBORDER, this.ctxHUD, this.ctxBG, this.ctxPLAYER);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }
}

GameView.RUN = {
  a: [-1, 0],
  d: [1, 0],
};

GameView.CLIMB = {
  s: [0, 1],
  w: [0, -1],
}

export default GameView;
