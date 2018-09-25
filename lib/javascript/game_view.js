import Game from './game';

class GameView {
  constructor(game, ctxHUD, ctxBG, ctxPLAYER) {
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

    let instructionsButton = document.getElementsByClassName('instructions-button')[0];
    let instructionsModal = document.getElementsByClassName('instructions-container')[0];
    let closeInstructionsButton = document.getElementsByClassName('close-modal')[0];

    let game = this.game;
    
    instructionsButton.addEventListener('click', () => {
      instructionsModal.classList.add('active');
      game.pause();
    });

    closeInstructionsButton.addEventListener('click', () => {
      instructionsModal.classList.remove('active');
      game.unpause();
    });

    let playAgainButton = document.getElementsByClassName('play-again')[0];

    playAgainButton.addEventListener('click', () => {
      this.resetGame();
    });
  }

  resetGame() {
    this.game = new Game();
    this.player = this.game.addPlayers();
    this.bindKeyHandlers();
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;

    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctxHUD, this.ctxBG, this.ctxPLAYER);
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
