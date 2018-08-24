import Player from './player';
import Bubble from './bubble';
import Grapple from './grapple';
import Platform from './platform';

export default class Game {
  constructor() {
    this.bubbles = [];
    this.grapples = [];
    this.players = [];
    this.platforms = [];

    this.addBubbles();
    this.addPlatforms();

    this.stageClear = false;
    this.stageClearTimer = 300;

    this.gameOver = false;

    this.level = 1;
    this.points = 0;
  }

  add(object) {
    if (object instanceof Bubble) {
      this.bubbles.push(object);
    } else if (object instanceof Grapple) {
      this.grapples.push(object);
    } else if (object instanceof Player) {
      this.players.push(object);
    } else if (object instanceof Platform) {
      this.platforms.push(object);
    } else {
      throw new Error('Unknown type of object');
    }
  }

  addBubbles() {
    for (let i = 0; i < BUBBLE_CONFIG.NUM_BUBBLES; i++) {
      this.add(new Bubble({
        game: this,
        pos: BUBBLE_CONFIG[i].START_POS.slice(0),
        vel: BUBBLE_CONFIG[i].VELOCITY.slice(0),
        size: BUBBLE_CONFIG[i].SIZE
      }));
    }
  }

  addPlatforms() {
    for (let i = 0; i < PLATFORM_CONFIG.NUM_PLATFORMS; i++) {
      this.add(new Platform({
        game: this,
        pos: PLATFORM_CONFIG[i].POSITION.slice(0),
        height: PLATFORM_CONFIG[i].HEIGHT,
        width: PLATFORM_CONFIG[i].WIDTH
      }));
    }
  }

  addPlayers() {
    let mainPlayer;

    for (let i = 0; i < Game.NUM_PLAYERS; i++) {
      let player = new Player({
        pos: this.playerStartPos(i),
        game: this,
        playerNumber: i,
      });
      
      if (i === 0) mainPlayer = player;
      this.add(player);
    }

    return mainPlayer;
  }

  allObjects() {
    return [].concat(this.players, this.bubbles, this.grapples, this.platforms);
  }

  nonPlayerObjects() {
    return [].concat(this.bubbles, this.grapples, this.platforms);
  }

  checkCollisions() {
    const allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        // if (i === j) continue;

        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        const isCollidedWith = obj1.isCollidedWith(obj2)

        if (isCollidedWith) {
          obj1.collideWith(obj2, isCollidedWith);
          // debugger;
        }
      }
    }
  }

  generateLevelCoordinates(num) {
    const level = num || Math.floor(Math.random() * 50) + 1;
    this.level = level;

    let x;
    let y;

    level > 25 ? x = 400 : x = 8;
    let row = level % 25;
    (row === 1 || row === 26) ? y = 8 : y = 8 + (8 * row) + (208 * row);

    return [x, y];
  }

  draw(ctxBORDER, ctxHUD, ctxBG, ctxPLAYER) {
    this.drawBorder(ctxBORDER);
    this.drawHUD(ctxHUD);
    this.drawBackground(ctxBG);
    this.drawPlayer(ctxPLAYER);
  }

  drawBackground(ctxBG) {
    const backgroundImage = new Image();
    backgroundImage.src = Game.BG_IMAGE;

    const levelCoordinates = this.generateLevelCoordinates(this.level);

    backgroundImage.onload = () => {
      ctxBG.drawImage(backgroundImage, levelCoordinates[0], levelCoordinates[1], 384, 208, 0, 0, Game.DIM_X, Game.DIM_Y);
    };

    if (this.stageClear && this.stageClearTimer > 0) {
      const stageClear = new Image();
      stageClear.src = Game.STAGE_CLEAR_IMAGE;


      stageClear.onload = () => {
        ctxBG.drawImage(stageClear, Game.STAGE_CLEAR[0], Game.STAGE_CLEAR[1], Game.STAGE_CLEAR[2], Game.STAGE_CLEAR[3], Game.DIM_X / 4, Game.DIM_Y / 3, Game.STAGE_CLEAR[2], Game.STAGE_CLEAR[3]); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
      };

      this.stageClearTimer -= 1;

      if (this.stageClearTimer === 0) {
        this.stageClear = false;
        this.nextLevel();
      }
    } else if (this.gameOver) {
      const gameOver = new Image();
      gameOver.src = Game.GAME_OVER_IMAGE;


      gameOver.onload = () => {
        ctxBG.drawImage(gameOver, Game.GAME_OVER[0], Game.GAME_OVER[1], Game.GAME_OVER[2], Game.GAME_OVER[3], Game.DIM_X / 4, Game.DIM_Y / 3, Game.GAME_OVER[2], Game.GAME_OVER[3]); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
      };
    }

    this.nonPlayerObjects().forEach(object => object.draw(ctxBG));
  }

  drawBorder(ctxBORDER) {
    ctxBORDER.fillStyle = "#000000";
    ctxBORDER.fillRect(0, 0, Game.DIM_X_HUD, Game.DIM_Y_HUD);
  }

  drawHUD (ctxHUD) {
    ctxHUD.clearRect(0, 0, Game.DIM_X_HUD, Game.DIM_Y_HUD);

    const livesImage = new Image();
    livesImage.src = Game.HUD_LIVES_IMAGE;

    ctxHUD.drawImage(livesImage, Game.HUD_LIVES[0], Game.HUD_LIVES[1], Game.HUD_LIVES[2], Game.HUD_LIVES[3], 20, Game.DIM_Y + 25, Game.HUD_LIVES[2] * 2, Game.HUD_LIVES[3] * 2);

    ctxHUD.font = "34px Comic Sans MS";
    ctxHUD.fillStyle = "yellow";
    ctxHUD.fillText(`x ${this.players[0] ? this.players[0].livesLeft : 0}`, 62, Game.DIM_Y + 53);
    ctxHUD.fillText(`${this.points}`, (Game.DIM_X / 2) - 30, Game.DIM_Y + 53);
    ctxHUD.fillText(`WORLD ${this.level}`, Game.DIM_X - 180, Game.DIM_Y + 53);
  }

  drawPlayer(ctxPLAYER) {
    ctxPLAYER.clearRect(0, 0, Game.DIM_X_HUD, Game.DIM_Y_HUD);
    this.players.forEach(player => player.draw(ctxPLAYER));
  }

  isOutOfBounds(object) {
    if ((object.pos[0] <= Game.DIM_X * Game.BG_BORDER) || (object.pos[0] + (object.width) >= Game.DIM_X - (Game.DIM_X * Game.BG_BORDER))) {
      return 'x';
    } else if ((object.pos[1] <= Game.DIM_Y * Game.BG_BORDER) || (object.pos[1] + (object.width) >= Game.DIM_Y - (Game.DIM_Y * Game.BG_BORDER))) {
      return 'y';
    }
  }

  moveObjects(delta) {
    if (!this.stageClear && !this.gameOver) {
      this.allObjects().forEach((object) => {
        if (object instanceof Grapple) {
          object.height += Math.abs(object.vel[1]);
        }
        object.move(delta);
      });
    }
  }

  remove(object) {
    if (object instanceof Grapple) {
      this.grapples.splice(this.grapples.indexOf(object), 1);
    } else if (object instanceof Bubble) {
      this.points += 100 * (object.size + 1);
      this.bubbles.splice(this.bubbles.indexOf(object), 1);
      if (this.bubbles.length === 0) {
        this.stageClear = true;
      }
    } else if (object instanceof Player) {
      this.players.splice(this.players.indexOf(object), 1);
      if (this.players.length === 0) {
        this.gameOver = true;
      }
    } else {
      throw new Error('Unknown type of object');
    }
  }

  nextLevel() {
    this.level += 1;
    this.resetLevel();
  }
  
  randomPosition() {
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  }
  
  resetLevel() {
    this.bubbles = [];
    this.players.forEach(player => this.resetPlayerPos(player));
    this.addBubbles();
  }

  resetPlayerPos(player) {
    player.pos = this.playerStartPos(player.playerNumber);
  }

  playerStartPos(playerNumber) {
    return [Game.DIM_X * Game.PLAYER_START_POS[playerNumber][0], Game.DIM_Y * Game.PLAYER_START_POS[playerNumber][1]]
  }

  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
  }
}

Game.BG_IMAGE = '/Users/whitman/Desktop/BubbleBros/lib/images/Buster Bros Backgrounds.png';
Game.BG_BORDER = 0.02;
Game.DIM_X = 920;
Game.DIM_Y = 500;

Game.DIM_X_HUD = Game.DIM_X;
Game.DIM_Y_HUD = Game.DIM_Y + 65;
Game.HUD_LIVES_IMAGE = '/Users/whitman/Desktop/BubbleBros/lib/images/sprite_file.png';
Game.HUD_LIVES = [153, 81, 16, 16]

Game.STAGE_CLEAR_IMAGE = '/Users/whitman/Desktop/BubbleBros/lib/images/stage_clear.png';
Game.STAGE_CLEAR = [5, 8, 449, 56];

Game.GAME_OVER_IMAGE = '/Users/whitman/Desktop/BubbleBros/lib/images/game_over.png';
Game.GAME_OVER = [9, 3, 414, 67];

Game.NUM_PLAYERS = 1;
Game.PLAYER_START_POS = [[0.05, 0.83], [0.95, 0.83]];

const BUBBLE_CONFIG = {
  NUM_BUBBLES: 1,

  0: {
    START_POS: [100, 200],
    VELOCITY: [2, 4],
    SIZE: 1
  },
  1: {
    START_POS: [800, 200],
    VELOCITY: [-2, 4],
    SIZE: 0
  }
};

const PLATFORM_CONFIG = {
  NUM_PLATFORMS: 0,

  0: {
    POSITION: [100, 300],
    HEIGHT: 20,
    WIDTH: 200,
  },
  1: {
    POSITION: [600, 300],
    HEIGHT: 20,
    WIDTH: 200,
  }
};
