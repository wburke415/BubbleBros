# BubbleBros

[BubbleBros Live](https://wburke415.github.io/BubbleBros/)

## Background and Overview
Bubble Bros is a video game where each level an increasing number of bubbles generate. The player uses a grappling hook gun
to shoot upwards. The hook stays for a few second and if a bubble hits the line of the hook it will pop into increasingly smaller
bubbles. Once the player has destroyed all of the bubbles they win the level.

## Canvas Layering

![game_snippet](/lib/images/bubble_bros.jpg)

```javascript
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
```

Because HTML Canvas does not support layering, I used three different canvas elements that are responsible for drawing different parts of the game, and then z-indexed them with CSS in order to produce a layering effect.

## Grappling Hook

![game_snippet](/lib/images/grapple_snippet.jpg) 

```javascript
  fireGrapple() {
    const time = new Date();
    
    if (time - this.lastFire > GRAPPLE_TIMEOUT && !this.dying && !this.game.countdown && this.gravity === 0) {
      this.sprite = FIRE_GRAPPLE_ANIMATION;
      this.spriteIndex = 0;

      this.lastFire = time;
      setTimeout(() => {
        const grapple = new Grapple({
          pos: [this.pos[0] + 27, this.pos[1] + 32],
          game: this.game,
        });
    
        this.game.add(grapple);
        this.sprite = STANDING_ANIMATION;
      }, 100)
    }
  }
```

 When the player tries to fire the grappling hook, I first check if it has been long enough since the last time they fired, based on a grapple timeout constant defined on the outer scope. Then I check to make sure the player has not already been hit by a bubble, that the level has actually started, and that they are not currently falling from a platform. If all of those checks are passed, their sprite is switched to a firing grapple sprite, and then after a very short timeout the grapple is fired and the time that it was fired is stored.

## Technologies
This project will be implemented with the following technologies:

* Vanilla javascript for for overall structure and game logic
* HTML5 Canvas for DOM Manipulation and rendering
* Webpack to bundle various scripts
