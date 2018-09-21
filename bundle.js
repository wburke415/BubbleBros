/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/javascript/bubble_bros.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/javascript/bubble.js":
/*!**********************************!*\
  !*** ./lib/javascript/bubble.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(/*! ./moving_object */ "./lib/javascript/moving_object.js");

var _moving_object2 = _interopRequireDefault(_moving_object);

var _grapple = __webpack_require__(/*! ./grapple */ "./lib/javascript/grapple.js");

var _grapple2 = _interopRequireDefault(_grapple);

var _platform = __webpack_require__(/*! ./platform */ "./lib/javascript/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULTS = {
  VELOCITY: [2, 4],
  GRAVITY: 0.15,
  SIZE: 0
};

var SPRITE_SHEET = 'https://raw.githubusercontent.com/wburke415/BubbleBros/master/lib/images/Buster%20Bros%20Balloons.png';
var SPRITES = [[1, 6, 48, 40], [52, 13, 32, 26], [86, 19, 16, 14], [106, 23, 8, 7]];

var Bubble = function (_MovingObject) {
  _inherits(Bubble, _MovingObject);

  function Bubble(options) {
    _classCallCheck(this, Bubble);

    options.size = options.size || DEFAULTS.SIZE;
    options.pos = options.pos || options.game.randomPosition();
    options.vel = options.vel || DEFAULTS.VELOCITY;
    options.gravity = options.gravity || DEFAULTS.GRAVITY;
    options.width = SPRITES[options.size][2] * 2;
    options.height = SPRITES[options.size][3] * 2;
    return _possibleConstructorReturn(this, (Bubble.__proto__ || Object.getPrototypeOf(Bubble)).call(this, options));
  }

  _createClass(Bubble, [{
    key: 'draw',
    value: function draw(ctx) {
      var _this2 = this;

      var bubble = new Image();
      bubble.src = SPRITE_SHEET;

      bubble.onload = function () {
        ctx.drawImage(bubble, SPRITES[_this2.size][0], SPRITES[_this2.size][1], SPRITES[_this2.size][2], SPRITES[_this2.size][3], _this2.pos[0], _this2.pos[1], _this2.width, _this2.height); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
      };
    }
  }, {
    key: 'handleOutOfBounds',
    value: function handleOutOfBounds(axis) {
      if (axis === 'x') this.vel[0] *= -1;
      if (axis === 'y') {
        this.vel[1] *= -1;
        if (this.pos[1] > 100) this.pos[1] -= 2;
        if (this.pos[1] < 100) this.pos[1] += 2;
      }
      if (this.pos[1] > 1200 || this.pos[1] < 0 || this.pos[0] > 1600 || this.pos[0] < 0) this.remove();
    }
  }, {
    key: 'collideWith',
    value: function collideWith(otherObject, angle) {
      if (otherObject instanceof _grapple2.default) {
        otherObject.remove();
        if (this.size < 3) {
          this.splitBubble();
        } else {
          this.remove();
        }
      }
      if (otherObject instanceof _platform2.default) {
        if (angle >= 0 && angle < 180) {
          /// bottom
          if (this.vel[1] > 0) this.vel[1] = -this.vel[1];
        } else {
          /// top
          if (this.vel[1] < 0) this.vel[1] = -this.vel[1];
        }
      }
    }
  }, {
    key: 'splitBubble',
    value: function splitBubble() {
      this.game.add(new Bubble({
        game: this.game,
        pos: [this.pos[0] - 5, this.pos[1]],
        vel: [this.vel[0] * -1, this.vel[1]],
        size: this.size + 1
      }));
      this.game.add(new Bubble({
        game: this.game,
        pos: [this.pos[0] + 5, this.pos[1]],
        vel: this.vel,
        size: this.size + 1
      }));

      this.remove();
    }
  }]);

  return Bubble;
}(_moving_object2.default);

exports.default = Bubble;

/***/ }),

/***/ "./lib/javascript/bubble_bros.js":
/*!***************************************!*\
  !*** ./lib/javascript/bubble_bros.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(/*! ./game */ "./lib/javascript/game.js");

var _game2 = _interopRequireDefault(_game);

var _game_view = __webpack_require__(/*! ./game_view */ "./lib/javascript/game_view.js");

var _game_view2 = _interopRequireDefault(_game_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var border = document.getElementById('border');
  border.width = _game2.default.DIM_X_HUD;
  border.height = _game2.default.DIM_Y_HUD;
  var ctxBORDER = border.getContext('2d');

  var hud = document.getElementById('hud');
  hud.width = _game2.default.DIM_X_HUD;
  hud.height = _game2.default.DIM_Y_HUD;
  var ctxHUD = hud.getContext('2d');

  var background = document.getElementById('background');
  background.width = _game2.default.DIM_X;
  background.height = _game2.default.DIM_Y;
  var ctxBG = background.getContext('2d');

  var player = document.getElementById('player');
  player.width = _game2.default.DIM_X;
  player.height = _game2.default.DIM_Y_HUD;
  var ctxPLAYER = player.getContext('2d');

  var game = new _game2.default();
  window.game = game;
  new _game_view2.default(game, ctxBORDER, ctxHUD, ctxBG, ctxPLAYER).start();
});

/***/ }),

/***/ "./lib/javascript/game.js":
/*!********************************!*\
  !*** ./lib/javascript/game.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(/*! ./player */ "./lib/javascript/player.js");

var _player2 = _interopRequireDefault(_player);

var _bubble = __webpack_require__(/*! ./bubble */ "./lib/javascript/bubble.js");

var _bubble2 = _interopRequireDefault(_bubble);

var _grapple = __webpack_require__(/*! ./grapple */ "./lib/javascript/grapple.js");

var _grapple2 = _interopRequireDefault(_grapple);

var _platform = __webpack_require__(/*! ./platform */ "./lib/javascript/platform.js");

var _platform2 = _interopRequireDefault(_platform);

var _ladder = __webpack_require__(/*! ./ladder */ "./lib/javascript/ladder.js");

var _ladder2 = _interopRequireDefault(_ladder);

var _level_config = __webpack_require__(/*! ./level_config */ "./lib/javascript/level_config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.bubbles = [];
    this.grapples = [];
    this.players = [];
    this.platforms = [];
    this.ladders = [];

    this.level = 1;

    this.addBubbles();
    this.addPlatforms();

    this.stageClear = false;
    this.stageClearTimer = 300;

    this.gameOver = false;

    this.points = 0;
  }

  _createClass(Game, [{
    key: 'add',
    value: function add(object) {
      if (object instanceof _bubble2.default) {
        this.bubbles.push(object);
      } else if (object instanceof _grapple2.default) {
        this.grapples = [];
        this.grapples.push(object);
      } else if (object instanceof _player2.default) {
        this.players.push(object);
      } else if (object instanceof _platform2.default) {
        this.platforms.push(object);
      } else if (object instanceof _ladder2.default) {
        this.ladders.push(object);
      } else {
        throw new Error('Unknown type of object');
      }
    }
  }, {
    key: 'addBubbles',
    value: function addBubbles() {
      var level = _level_config.LEVELS[this.level];

      for (var i = 0; i < level.NUM_BUBBLES; i++) {
        this.add(new _bubble2.default({
          game: this,
          pos: level.BUBBLE_START_POS[i].slice(0),
          vel: level.BUBBLE_VELOCITY[i].slice(0),
          size: level.BUBBLE_SIZE[i]
        }));
      }
    }
  }, {
    key: 'addPlatforms',
    value: function addPlatforms() {
      var level = _level_config.LEVELS[this.level];

      for (var i = 0; i < level.NUM_PLATFORMS; i++) {
        this.add(new _platform2.default({
          game: this,
          pos: level.PLATFORM_POS[i].slice(0),
          height: level.PLATFORM_HEIGHT[i],
          width: level.PLATFORM_WIDTH[i],
          hasLadder: level.PLATFORM_HAS_LADDER
        }));
      }
    }
  }, {
    key: 'addPlayers',
    value: function addPlayers() {
      var mainPlayer = void 0;

      for (var i = 0; i < Game.NUM_PLAYERS; i++) {
        var player = new _player2.default({
          pos: this.playerStartPos(i),
          game: this,
          playerNumber: i
        });

        if (i === 0) mainPlayer = player;
        this.add(player);
      }

      return mainPlayer;
    }
  }, {
    key: 'allObjects',
    value: function allObjects() {
      return [].concat(this.players, this.bubbles, this.grapples, this.platforms, this.ladders);
    }
  }, {
    key: 'nonPlayerObjects',
    value: function nonPlayerObjects() {
      return [].concat(this.bubbles, this.grapples, this.platforms, this.ladders);
    }
  }, {
    key: 'checkCollisions',
    value: function checkCollisions() {
      var allObjects = this.allObjects();
      for (var i = 0; i < allObjects.length; i++) {
        for (var j = 0; j < allObjects.length; j++) {

          var obj1 = allObjects[i];
          var obj2 = allObjects[j];

          var isCollidedWith = obj1.isCollidedWith(obj2);

          if (isCollidedWith) {
            obj1.collideWith(obj2, isCollidedWith);
          }
        }
      }
    }
  }, {
    key: 'generateLevelCoordinates',
    value: function generateLevelCoordinates(num) {
      var level = num || Math.floor(Math.random() * 50) + 1;
      this.level = level;

      var x = void 0;
      var y = void 0;

      level > 25 ? x = 400 : x = 8;
      var row = level % 25;
      row === 1 || row === 26 ? y = 8 : y = 8 + 8 * row + 208 * row;

      return [x, y];
    }
  }, {
    key: 'draw',
    value: function draw(ctxBORDER, ctxHUD, ctxBG, ctxPLAYER) {
      this.drawBorder(ctxBORDER);
      this.drawHUD(ctxHUD);
      this.drawBackground(ctxBG);
      this.drawPlayer(ctxPLAYER);
    }
  }, {
    key: 'drawBackground',
    value: function drawBackground(ctxBG) {
      var backgroundImage = new Image();
      backgroundImage.src = Game.BG_IMAGE;

      var levelCoordinates = this.generateLevelCoordinates(this.level);

      backgroundImage.onload = function () {
        ctxBG.drawImage(backgroundImage, levelCoordinates[0], levelCoordinates[1], 384, 208, 0, 0, Game.DIM_X, Game.DIM_Y);
      };

      this.nonPlayerObjects().forEach(function (object) {
        return object.draw(ctxBG);
      });

      if (this.stageClear && this.stageClearTimer > 0) {
        var stageClear = new Image();
        stageClear.src = Game.STAGE_CLEAR_IMAGE;

        ctxBG.drawImage(stageClear, Game.STAGE_CLEAR[0], Game.STAGE_CLEAR[1], Game.STAGE_CLEAR[2], Game.STAGE_CLEAR[3], Game.DIM_X / 4, Game.DIM_Y / 3, Game.STAGE_CLEAR[2], Game.STAGE_CLEAR[3]); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img

        this.stageClearTimer -= 1;

        if (this.stageClearTimer === 0) {
          this.stageClear = false;
          this.nextLevel();
        }
      } else if (this.gameOver) {
        var gameOver = new Image();
        gameOver.src = Game.GAME_OVER_IMAGE;

        ctxBG.drawImage(gameOver, Game.GAME_OVER[0], Game.GAME_OVER[1], Game.GAME_OVER[2], Game.GAME_OVER[3], Game.DIM_X / 4, Game.DIM_Y / 3, Game.GAME_OVER[2], Game.GAME_OVER[3]); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
      }
    }
  }, {
    key: 'drawBorder',
    value: function drawBorder(ctxBORDER) {
      ctxBORDER.fillStyle = "#000000";
      ctxBORDER.fillRect(0, 0, Game.DIM_X_HUD, Game.DIM_Y_HUD);
    }
  }, {
    key: 'drawHUD',
    value: function drawHUD(ctxHUD) {
      ctxHUD.clearRect(0, 0, Game.DIM_X_HUD, Game.DIM_Y_HUD);

      var livesImage = new Image();
      livesImage.src = Game.HUD_LIVES_IMAGE;

      ctxHUD.drawImage(livesImage, Game.HUD_LIVES[0], Game.HUD_LIVES[1], Game.HUD_LIVES[2], Game.HUD_LIVES[3], 20, Game.DIM_Y + 25, Game.HUD_LIVES[2] * 2, Game.HUD_LIVES[3] * 2);

      ctxHUD.font = "34px Sans Serif";
      ctxHUD.fillStyle = "yellow";
      ctxHUD.fillText('x ' + (this.players[0] ? this.players[0].livesLeft : 0), 62, Game.DIM_Y + 53);
      ctxHUD.fillText('' + this.points, Game.DIM_X / 2 - 30, Game.DIM_Y + 53);
      ctxHUD.fillText('WORLD ' + this.level, Game.DIM_X - 180, Game.DIM_Y + 53);
    }
  }, {
    key: 'drawPlayer',
    value: function drawPlayer(ctxPLAYER) {
      ctxPLAYER.clearRect(0, 0, Game.DIM_X_HUD, Game.DIM_Y_HUD);
      this.players.forEach(function (player) {
        return player.draw(ctxPLAYER);
      });
    }
  }, {
    key: 'isOutOfBounds',
    value: function isOutOfBounds(object) {
      if (object.pos[0] <= Game.DIM_X * Game.BG_BORDER || object.pos[0] + object.width >= Game.DIM_X - Game.DIM_X * Game.BG_BORDER) {
        return 'x';
      } else if (object.pos[1] <= Game.DIM_Y * Game.BG_BORDER || object.pos[1] + object.height >= Game.DIM_Y - Game.DIM_Y * Game.BG_BORDER) {
        return 'y';
      }
    }
  }, {
    key: 'moveObjects',
    value: function moveObjects(delta) {
      if (!this.stageClear && !this.gameOver) {
        this.allObjects().forEach(function (object) {
          if (object instanceof _grapple2.default) {
            object.height += Math.abs(object.vel[1]);
          } else if (object instanceof _ladder2.default && object.building) {
            object.height += 5;
          }
          object.move(delta);
        });
      }
    }
  }, {
    key: 'remove',
    value: function remove(object) {
      if (object instanceof _grapple2.default) {
        this.grapples.splice(this.grapples.indexOf(object), 1);
      } else if (object instanceof _bubble2.default) {
        this.points += 100 * (object.size + 1);
        this.bubbles.splice(this.bubbles.indexOf(object), 1);
        if (this.bubbles.length === 0) {
          this.stageClear = true;
        }
      } else if (object instanceof _player2.default) {
        this.players.splice(this.players.indexOf(object), 1);
        if (this.players.length === 0) {
          this.gameOver = true;
        }
      } else {
        throw new Error('Unknown type of object');
      }
    }
  }, {
    key: 'nextLevel',
    value: function nextLevel() {
      this.level += 1;
      this.resetLevel();
    }
  }, {
    key: 'randomPosition',
    value: function randomPosition() {
      return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];
    }
  }, {
    key: 'resetLevel',
    value: function resetLevel() {
      var _this = this;

      this.bubbles = [];
      this.platforms = [];
      this.ladders = [];
      this.grapples = [];
      this.stageClearTimer = 300;

      this.players.forEach(function (player) {
        return _this.resetPlayerPos(player);
      });

      this.addBubbles();
      this.addPlatforms();
    }
  }, {
    key: 'resetPlayerPos',
    value: function resetPlayerPos(player) {
      player.platform = null;
      player.climbing = false;
      player.pos = this.playerStartPos(player.playerNumber);
    }
  }, {
    key: 'resetPlayerY',
    value: function resetPlayerY(player) {
      player.pos[1] = this.playerStartPos(player.playerNumber)[1];
    }
  }, {
    key: 'playerStartPos',
    value: function playerStartPos(playerNumber) {
      return [Game.DIM_X * Game.PLAYER_START_POS[playerNumber][0], Game.DIM_Y * Game.PLAYER_START_POS[playerNumber][1]];
    }
  }, {
    key: 'step',
    value: function step(delta) {
      this.moveObjects(delta);
      this.checkCollisions();
    }
  }]);

  return Game;
}();

exports.default = Game;


Game.BG_IMAGE = 'https://raw.githubusercontent.com/wburke415/BubbleBros/master/lib/images/Buster%20Bros%20Backgrounds.png';
Game.BG_BORDER = 0.02;
Game.DIM_X = 920;
Game.DIM_Y = 500;

Game.DIM_X_HUD = Game.DIM_X;
Game.DIM_Y_HUD = Game.DIM_Y + 65;
Game.HUD_LIVES_IMAGE = 'https://raw.githubusercontent.com/wburke415/BubbleBros/master/lib/images/sprite_file.png';
Game.HUD_LIVES = [153, 81, 16, 16];

Game.STAGE_CLEAR_IMAGE = 'https://raw.githubusercontent.com/wburke415/BubbleBros/master/lib/images/stage_clear.png';
Game.STAGE_CLEAR = [5, 8, 449, 56];

Game.GAME_OVER_IMAGE = 'https://raw.githubusercontent.com/wburke415/BubbleBros/master/lib/images/game_over.png';
Game.GAME_OVER = [9, 3, 414, 67];

Game.NUM_PLAYERS = 1;
Game.PLAYER_START_POS = [[0.05, 0.83], [0.95, 0.83]];

/***/ }),

/***/ "./lib/javascript/game_view.js":
/*!*************************************!*\
  !*** ./lib/javascript/game_view.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView(game, ctxBORDER, ctxHUD, ctxBG, ctxPLAYER) {
    _classCallCheck(this, GameView);

    this.ctxBORDER = ctxBORDER;
    this.ctxHUD = ctxHUD;
    this.ctxBG = ctxBG;
    this.ctxPLAYER = ctxPLAYER;
    this.game = game;
    this.player = this.game.addPlayers();
  }

  _createClass(GameView, [{
    key: 'bindKeyHandlers',
    value: function bindKeyHandlers() {
      var player = this.player;


      document.addEventListener('keypress', function (event) {
        if (GameView.RUN[event.key]) player.run(GameView.RUN[event.key]);
        if (GameView.CLIMB[event.key]) player.climb(GameView.CLIMB[event.key]);
        if (event.code === 'Space') player.fireGrapple();
      });

      document.addEventListener('keyup', function (event) {
        if (GameView.RUN[event.key]) player.stopRunning();
        if (GameView.CLIMB[event.key]) player.stopClimbing();
      });
    }
  }, {
    key: 'start',
    value: function start() {
      this.bindKeyHandlers();
      this.lastTime = 0;

      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: 'animate',
    value: function animate(time) {
      var timeDelta = time - this.lastTime;

      this.game.step(timeDelta);
      this.game.draw(this.ctxBORDER, this.ctxHUD, this.ctxBG, this.ctxPLAYER);
      this.lastTime = time;
      requestAnimationFrame(this.animate.bind(this));
    }
  }]);

  return GameView;
}();

GameView.RUN = {
  a: [-1, 0],
  d: [1, 0]
};

GameView.CLIMB = {
  s: [0, 1],
  w: [0, -1]
};

exports.default = GameView;

/***/ }),

/***/ "./lib/javascript/grapple.js":
/*!***********************************!*\
  !*** ./lib/javascript/grapple.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(/*! ./moving_object */ "./lib/javascript/moving_object.js");

var _moving_object2 = _interopRequireDefault(_moving_object);

var _bubble = __webpack_require__(/*! ./bubble */ "./lib/javascript/bubble.js");

var _bubble2 = _interopRequireDefault(_bubble);

var _platform = __webpack_require__(/*! ./platform */ "./lib/javascript/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ROPE_SPRITE_SHEET = 'https://raw.githubusercontent.com/wburke415/BubbleBros/master/lib/images/rope_sprite.png';
var ROPE = [118, 17, 14, 949];
var HOOK_SPRITE_SHEET = 'https://raw.githubusercontent.com/wburke415/BubbleBros/master/lib/images/Grappling%20Hook.png';
var HOOK = [4, 0, 222, 264];

var DEFAULTS = {
  WIDTH: 5,
  HEIGHT: 0,
  VELOCITY: Object.freeze([0, -5]),
  GRAVITY: 0,
  FREEZE_DUR: 75
};

var Grapple = function (_MovingObject) {
  _inherits(Grapple, _MovingObject);

  function Grapple(options) {
    _classCallCheck(this, Grapple);

    options.width = DEFAULTS.WIDTH;
    options.height = DEFAULTS.HEIGHT;
    options.vel = options.vel || DEFAULTS.VELOCITY.slice(0);
    options.gravity = DEFAULTS.GRAVITY;

    var _this = _possibleConstructorReturn(this, (Grapple.__proto__ || Object.getPrototypeOf(Grapple)).call(this, options));

    _this.freezeDur = DEFAULTS.FREEZE_DUR;
    return _this;
  }

  _createClass(Grapple, [{
    key: 'draw',
    value: function draw(ctx) {
      var rope = new Image();
      rope.src = ROPE_SPRITE_SHEET;

      var hook = new Image();
      hook.src = HOOK_SPRITE_SHEET;

      ctx.drawImage(hook, HOOK[0], HOOK[1], HOOK[2], HOOK[3], this.pos[0] - 13, this.pos[1], 30, 35); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
      ctx.drawImage(rope, ROPE[0], ROPE[1], ROPE[2], this.height, this.pos[0], this.pos[1] + 30, this.width, this.height); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
    }
  }, {
    key: 'collideWith',
    value: function collideWith(otherObject) {
      if (otherObject instanceof _platform2.default) {
        this.handleOutOfBounds('y');
      }
    }
  }, {
    key: 'handleOutOfBounds',
    value: function handleOutOfBounds(axis) {
      if (axis === 'y') {
        this.vel[1] = 0;
        this.freezeDur -= 1;
        if (this.freezeDur === 0) this.remove();
      }
    }
  }]);

  return Grapple;
}(_moving_object2.default);

exports.default = Grapple;

/***/ }),

/***/ "./lib/javascript/ladder.js":
/*!**********************************!*\
  !*** ./lib/javascript/ladder.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(/*! ./moving_object */ "./lib/javascript/moving_object.js");

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ladder = function (_MovingObject) {
  _inherits(Ladder, _MovingObject);

  function Ladder(options) {
    _classCallCheck(this, Ladder);

    options.width = options.width || 20;
    options.height = options.height || 50;
    options.gravity = 0;

    var _this = _possibleConstructorReturn(this, (Ladder.__proto__ || Object.getPrototypeOf(Ladder)).call(this, options));

    _this.platform = options.platform;

    _this.building = true;
    return _this;
  }

  _createClass(Ladder, [{
    key: 'draw',
    value: function draw(ctxBG) {
      var _this2 = this;

      var ladder = new Image();
      ladder.src = SPRITE_SHEET;

      ladder.onload = function () {
        ctxBG.drawImage(ladder, SPRITE[0], SPRITE[1], SPRITE[2], SPRITE[3], _this2.pos[0], _this2.pos[1], _this2.width, _this2.height); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
      };
    }
  }, {
    key: 'handleOutOfBounds',
    value: function handleOutOfBounds(axis) {
      if (axis === 'y') {
        this.building = false;
      }
    }
  }]);

  return Ladder;
}(_moving_object2.default);

exports.default = Ladder;


var SPRITE_SHEET = 'https://raw.githubusercontent.com/wburke415/BubbleBros/master/lib/images/ladder.png';
var SPRITE = [77, 4, 116, 298];

/***/ }),

/***/ "./lib/javascript/level_config.js":
/*!****************************************!*\
  !*** ./lib/javascript/level_config.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LEVELS = exports.LEVELS = {
  1: {
    NUM_BUBBLES: 1,
    BUBBLE_SIZE: [1],
    BUBBLE_START_POS: [[800, 200]],
    BUBBLE_VELOCITY: [[-2, 4]],

    NUM_PLATFORMS: 0,
    PLATFORM_POS: [],
    PLATFORM_HEIGHT: [],
    PLATFORM_WIDTH: [],
    PLATFORM_HAS_LADDER: false
  },
  2: {
    NUM_BUBBLES: 2,
    BUBBLE_SIZE: [1, 2],
    BUBBLE_START_POS: [[100, 200], [800, 200]],
    BUBBLE_VELOCITY: [[2, 4], [-2, 4]],

    NUM_PLATFORMS: 1,
    PLATFORM_POS: [[150, 300]],
    PLATFORM_HEIGHT: [10],
    PLATFORM_WIDTH: [200],
    PLATFORM_HAS_LADDER: true
  },
  3: {
    NUM_BUBBLES: 2,
    BUBBLE_SIZE: [1, 1],
    BUBBLE_START_POS: [[100, 200], [800, 200]],
    BUBBLE_VELOCITY: [[2, 4], [-2, 4]],

    NUM_PLATFORMS: 1,
    PLATFORM_POS: [[650, 300]],
    PLATFORM_HEIGHT: [10],
    PLATFORM_WIDTH: [200],
    PLATFORM_HAS_LADDER: true
  },
  4: {
    NUM_BUBBLES: 2,
    BUBBLE_SIZE: [0, 1],
    BUBBLE_START_POS: [[100, 200], [800, 200]],
    BUBBLE_VELOCITY: [[2, 4], [-2, 4]],

    NUM_PLATFORMS: 1,
    PLATFORM_POS: [[270, 200]],
    PLATFORM_HEIGHT: [10],
    PLATFORM_WIDTH: [400],
    PLATFORM_HAS_LADDER: true
  },
  5: {
    NUM_BUBBLES: 3,
    BUBBLE_SIZE: [1, 1, 2],
    BUBBLE_START_POS: [[100, 200], [800, 200], [800, 250]],
    BUBBLE_VELOCITY: [[2, 4], [-2, 4], [-2, 4]],

    NUM_PLATFORMS: 0,
    PLATFORM_POS: [],
    PLATFORM_HEIGHT: [],
    PLATFORM_WIDTH: [],
    PLATFORM_HAS_LADDER: true
  },
  6: {
    NUM_BUBBLES: 2,
    BUBBLE_SIZE: [1, 2],
    BUBBLE_START_POS: [[100, 200], [800, 200], [100, 300]],
    BUBBLE_VELOCITY: [[2, 4], [-2, 4], [2, 4]],

    NUM_PLATFORMS: 2,
    PLATFORM_POS: [[150, 300], [600, 300]],
    PLATFORM_HEIGHT: [10, 10],
    PLATFORM_WIDTH: [250, 250],
    PLATFORM_HAS_LADDER: true
  },
  7: {
    NUM_BUBBLES: 3,
    BUBBLE_SIZE: [1, 2, 3],
    BUBBLE_START_POS: [[100, 200], [800, 200], [100, 100]],
    BUBBLE_VELOCITY: [[2, 4], [-2, 4], [2, 4]],

    NUM_PLATFORMS: 1,
    PLATFORM_POS: [[40, 300]],
    PLATFORM_HEIGHT: [10],
    PLATFORM_WIDTH: [200],
    PLATFORM_HAS_LADDER: true
  },
  8: {
    NUM_BUBBLES: 2,
    BUBBLE_SIZE: [0, 0],
    BUBBLE_START_POS: [[100, 200], [800, 200]],
    BUBBLE_VELOCITY: [[2, 4], [-2, 4]],

    NUM_PLATFORMS: 1,
    PLATFORM_POS: [[300, 300]],
    PLATFORM_HEIGHT: [10],
    PLATFORM_WIDTH: [300],
    PLATFORM_HAS_LADDER: true
  },
  9: {
    NUM_BUBBLES: 3,
    BUBBLE_SIZE: [0, 0, 2],
    BUBBLE_START_POS: [[100, 200], [800, 200], [100, 100]],
    BUBBLE_VELOCITY: [[2, 4], [-2, 4], [2, 4]],

    NUM_PLATFORMS: 0,
    PLATFORM_POS: [],
    PLATFORM_HEIGHT: [],
    PLATFORM_WIDTH: [],
    PLATFORM_HAS_LADDER: true
  },
  10: {
    NUM_BUBBLES: 3,
    BUBBLE_SIZE: [0, 0, 1],
    BUBBLE_START_POS: [[100, 200], [800, 200], [100, 100]],
    BUBBLE_VELOCITY: [[2, 4], [-2, 4], [2, 4]],

    NUM_PLATFORMS: 1,
    PLATFORM_POS: [[300, 300]],
    PLATFORM_HEIGHT: [10],
    PLATFORM_WIDTH: [300],
    PLATFORM_HAS_LADDER: true
  },
  11: {},
  12: {},
  13: {},
  14: {},
  15: {},
  16: {},
  17: {},
  18: {},
  19: {},
  20: {}
};

/***/ }),

/***/ "./lib/javascript/moving_object.js":
/*!*****************************************!*\
  !*** ./lib/javascript/moving_object.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NORMAL_FRAME_TIME_DELTA = 1000 / 60;

var MovingObject = function () {
  function MovingObject(options) {
    _classCallCheck(this, MovingObject);

    this.pos = options.pos;
    this.vel = options.vel;
    this.gravity = options.gravity;
    this.width = options.width;
    this.height = options.height;
    this.size = options.size;
    this.game = options.game;
  }

  _createClass(MovingObject, [{
    key: "collideWith",
    value: function collideWith(otherObject) {
      // default do nothing
    }
  }, {
    key: "isCollidedWith",
    value: function isCollidedWith(otherObject, heightChange) {
      var extraHeight = heightChange || 0;
      var hit = !(this.pos[0] + this.width < otherObject.pos[0] || otherObject.pos[0] + otherObject.width < this.pos[0] || this.pos[1] + this.height + extraHeight < otherObject.pos[1] || otherObject.pos[1] + otherObject.height < this.pos[1]);

      if (hit) {
        var dx = otherObject.pos[0] - this.pos[0];
        var dy = otherObject.pos[1] - this.pos[1];

        var angle = Math.atan2(dy, dx) * 180 / Math.PI;
        if (angle < 0) angle += 360;

        return angle;
      } else {
        return null;
      }
    }
  }, {
    key: "move",
    value: function move(timeDelta) {
      var velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;

      this.vel[1] += this.gravity;

      var offsetX = this.vel[0] * velocityScale;
      var offsetY = this.vel[1] * velocityScale;

      this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
      this.handleOutOfBounds(this.game.isOutOfBounds(this));
    }
  }, {
    key: "remove",
    value: function remove() {
      this.game.remove(this);
    }
  }]);

  return MovingObject;
}();

exports.default = MovingObject;

/***/ }),

/***/ "./lib/javascript/platform.js":
/*!************************************!*\
  !*** ./lib/javascript/platform.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(/*! ./moving_object */ "./lib/javascript/moving_object.js");

var _moving_object2 = _interopRequireDefault(_moving_object);

var _ladder = __webpack_require__(/*! ./ladder */ "./lib/javascript/ladder.js");

var _ladder2 = _interopRequireDefault(_ladder);

var _bubble = __webpack_require__(/*! ./bubble */ "./lib/javascript/bubble.js");

var _bubble2 = _interopRequireDefault(_bubble);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Platform = function (_MovingObject) {
  _inherits(Platform, _MovingObject);

  function Platform(options) {
    _classCallCheck(this, Platform);

    var _this = _possibleConstructorReturn(this, (Platform.__proto__ || Object.getPrototypeOf(Platform)).call(this, options));

    _this.hasLadder = options.hasLadder || true;
    if (_this.hasLadder) _this.ladder = _this.generateLadder();
    return _this;
  }

  _createClass(Platform, [{
    key: 'draw',
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
      ctx.fillStyle = '#00FF00';
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#00CC00';
      ctx.stroke();
    }
  }, {
    key: 'generateLadder',
    value: function generateLadder() {
      var ladder = new _ladder2.default({
        pos: [this.pos[0] + this.width / 2 - 20, this.pos[1] + this.height],
        vel: [0, 0],
        width: 40,
        height: 10,
        platform: this,
        game: this.game
      });

      this.game.add(ladder);
      return ladder;
    }
  }, {
    key: 'move',
    value: function move() {}
  }]);

  return Platform;
}(_moving_object2.default);

exports.default = Platform;

/***/ }),

/***/ "./lib/javascript/player.js":
/*!**********************************!*\
  !*** ./lib/javascript/player.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(/*! ./moving_object */ "./lib/javascript/moving_object.js");

var _moving_object2 = _interopRequireDefault(_moving_object);

var _grapple = __webpack_require__(/*! ./grapple */ "./lib/javascript/grapple.js");

var _grapple2 = _interopRequireDefault(_grapple);

var _bubble = __webpack_require__(/*! ./bubble */ "./lib/javascript/bubble.js");

var _bubble2 = _interopRequireDefault(_bubble);

var _platform = __webpack_require__(/*! ./platform */ "./lib/javascript/platform.js");

var _platform2 = _interopRequireDefault(_platform);

var _ladder = __webpack_require__(/*! ./ladder */ "./lib/javascript/ladder.js");

var _ladder2 = _interopRequireDefault(_ladder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SPRITE_SHEET = 'https://raw.githubusercontent.com/wburke415/BubbleBros/master/lib/images/sprite_file.png';
var STANDING_ANIMATION = [11, 149, 26, 32];
var FIRE_GRAPPLE_ANIMATION = [43, 152, 27, 29];
var RUNNING_ANIMATION_RIGHT = [[11, 39, 30, 32], [45, 40, 30, 31], [79, 39, 30, 32], [113, 40, 28, 31], [148, 40, 30, 31]];
var RUNNING_ANIMATION_LEFT = [[145, 5, 30, 32], [111, 6, 30, 31], [77, 5, 30, 32], [45, 6, 28, 31], [9, 6, 30, 31]];
var CLIMBING_ANIMATION = [[12, 73, 24, 32], [48, 73, 24, 32], [80, 73, 26, 32], [114, 73, 26, 32]];
var COLLISION_ANIMATION_RIGHT = [80, 149, 41, 30];
var COLLISION_ANIMATION_LEFT = [131, 149, 41, 30];

var GRAPPLE_TIMEOUT = 400;

var DEFAULTS = {
  VELOCITY: Object.freeze([0, 0]),
  GRAVITY: 0,
  LIVES: 3,
  PLAYER_NUMBER: 0
};

var Player = function (_MovingObject) {
  _inherits(Player, _MovingObject);

  function Player(options) {
    _classCallCheck(this, Player);

    options.width = STANDING_ANIMATION[2] * 2;
    options.height = STANDING_ANIMATION[3] * 2;
    options.vel = options.vel || DEFAULTS.VELOCITY.slice(0);
    options.gravity = DEFAULTS.GRAVITY;

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, options));

    _this.sprite = STANDING_ANIMATION;
    _this.spriteIndex = 0;

    _this.outOfBounds = false;
    _this.dying = false;

    _this.lastFire = new Date();
    _this.fireGrapple = _this.fireGrapple.bind(_this);

    _this.ladder = null;
    _this.climbing = false;

    _this.platform = null;

    _this.livesLeft = options.livesLeft || DEFAULTS.LIVES;
    _this.playerNumber = options.playerNumber || DEFAULTS.PLAYER_NUMBER;
    return _this;
  }

  _createClass(Player, [{
    key: 'draw',
    value: function draw(ctx) {
      var player = new Image();
      player.src = SPRITE_SHEET;

      ctx.drawImage(player, this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], this.pos[0], this.pos[1], this.sprite[2] * 2, this.sprite[3] * 2); // img, x of top left in img, y of top left in img, width of img, height of img, x coordinate to render at, y coordinate to render at, scale x of img, scale y of img
    }
  }, {
    key: 'collideWith',
    value: function collideWith(otherObject, angle) {
      var _this2 = this;

      if (otherObject instanceof _bubble2.default && !this.dying) {
        this.collisionAnimation(angle);
        setTimeout(function () {
          if (_this2.livesLeft > 1) {
            _this2.livesLeft -= 1;
            _this2.resetLevel();
          } else {
            _this2.remove();
          }
        }, 2000);
      }
      if (otherObject instanceof _platform2.default) this.platform = otherObject;
      if (otherObject instanceof _ladder2.default) this.ladder = otherObject;
    }
  }, {
    key: 'collisionAnimation',
    value: function collisionAnimation(angle) {
      this.dying = true;
      this.gravity = .1;
      if (angle >= 0 && angle < 90 || angle > 270 && angle < 360) {
        this.sprite = COLLISION_ANIMATION_RIGHT;
        this.spriteIndex = 0;
      } else {
        this.sprite = COLLISION_ANIMATION_LEFT;
        this.spriteIndex = 0;
      }
    }
  }, {
    key: 'fireGrapple',
    value: function fireGrapple() {
      var _this3 = this;

      var time = new Date();

      if (time - this.lastFire > GRAPPLE_TIMEOUT) {
        this.sprite = FIRE_GRAPPLE_ANIMATION;
        this.spriteIndex = 0;
        this.pos[1] += 10;

        this.lastFire = time;
        setTimeout(function () {
          var grapple = new _grapple2.default({
            pos: [_this3.pos[0] + 27, _this3.pos[1] + 27],
            game: _this3.game
          });

          _this3.game.add(grapple);
          _this3.sprite = STANDING_ANIMATION;
          _this3.pos[1] -= 10;
        }, 100);
      }
    }
  }, {
    key: 'handleOutOfBounds',
    value: function handleOutOfBounds(axis) {
      if (axis === 'x' && this.pos[0] < 100) this.pos[0] += 5;
      if (axis === 'x' && this.pos[0] > 100) this.pos[0] -= 5;
    }
  }, {
    key: 'run',
    value: function run(changeInPos) {
      if (!this.dying && !this.game.stageClear && !this.climbing) {
        var platform = this.platform;

        if (platform && this.pos[0] <= platform.pos[0]) {
          this.pos[0] += 5;
          this.stopRunning();
          return;
        }
        if (platform && this.pos[0] >= platform.pos[0] + platform.width - this.width) {
          this.pos[0] -= 5;
          this.stopRunning();
          return;
        }

        this.vel[0] = changeInPos[0] * 3;

        if (changeInPos[0] === 1) {
          this.sprite = RUNNING_ANIMATION_RIGHT[this.spriteIndex];
          this.spriteIndex = (this.spriteIndex + 1) % 5;
        } else if (changeInPos[0] === -1) {
          this.sprite = RUNNING_ANIMATION_LEFT[this.spriteIndex];
          this.spriteIndex = (this.spriteIndex + 1) % 5;
        }
      }
    }
  }, {
    key: 'stopRunning',
    value: function stopRunning() {
      if (!this.dying && !this.climbing) {
        this.vel = [0, 0];
        this.spriteIndex = 0;
        this.sprite = STANDING_ANIMATION;
      }
    }
  }, {
    key: 'climb',
    value: function climb(changeInPos) {
      if (!this.dying && !this.game.stageClear) {
        if (changeInPos[1] === -1 && this.ladder && this.isCollidedWith(this.ladder)) {
          this.climbing = true;
          this.vel[1] = changeInPos[1] * 2;
          this.sprite = CLIMBING_ANIMATION[Math.floor(this.spriteIndex)];
          this.spriteIndex = (this.spriteIndex + 0.5) % 4;
        } else if (changeInPos[1] === 1 && this.isCollidedWith(this.ladder, 10) && !this.game.isOutOfBounds(this)) {
          this.climbing = true;
          this.vel[1] = changeInPos[1] * 2;
          this.sprite = CLIMBING_ANIMATION[Math.floor(this.spriteIndex)];
          this.spriteIndex = (this.spriteIndex + 0.5) % 4;
        } else {
          this.climbing = false;
          this.stopClimbing();
        }
      }
    }
  }, {
    key: 'stopClimbing',
    value: function stopClimbing() {
      if (!this.dying) {
        if (this.platform && !this.isCollidedWith(this.platform)) this.platform = null;

        this.vel = [0, 0];

        if (!this.climbing) {
          this.spriteIndex = 0;
          this.sprite = STANDING_ANIMATION;
          if (this.game.isOutOfBounds(this)) this.game.resetPlayerY(this);
        }
      }
    }
  }, {
    key: 'resetLevel',
    value: function resetLevel() {
      this.dying = false;
      this.gravity = 0;
      this.vel = [0, 0];
      this.sprite = STANDING_ANIMATION;
      this.game.resetLevel();
    }
  }]);

  return Player;
}(_moving_object2.default);

exports.default = Player;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map