import Game from './game';
import GameView from './game_view';

document.addEventListener('DOMContentLoaded', () => {
  const hud = document.getElementById('hud');
  hud.width = Game.DIM_X_HUD;
  hud.height= Game.DIM_Y_HUD;
  const ctxHUD = hud.getContext('2d');

  const background = document.getElementById('background');
  background.width = Game.DIM_X;
  background.height = Game.DIM_Y
  const ctxBG = background.getContext('2d');

  const player = document.getElementById('player');
  player.width = Game.DIM_X;
  player.height = Game.DIM_Y_HUD;
  const ctxPLAYER = player.getContext('2d');

  const game = new Game();
  window.game = game;
  new GameView(game, ctxHUD, ctxBG, ctxPLAYER).start();
});
