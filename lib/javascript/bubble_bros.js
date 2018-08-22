import Game from './game';
import GameView from './game_view';

document.addEventListener('DOMContentLoaded', () => {
  const canvasEl = document.getElementsByTagName('canvas')[0];
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y

  const ctx = canvasEl.getContext('2d');
  const game = new Game();
  window.game = game;
  new GameView(game, ctx).start();
});
