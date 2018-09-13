# BubbleBros

[BubbleBros Live](https://wburke415.github.io/BubbleBros/)

## Background and Overview
Bubble Bros is a video game where each level an increasing number of bubbles generate. The player uses a grappling hook gun
to shoot upwards. The hook stays for a few second and if a bubble hits the line of the hook it will pop into increasingly smaller
bubbles. Once the player has destroyed all of the bubbles they win the level.

## Functionality and MVP
In BubbleBros users will be able to:
[] Create bubbles of a customized size, color, and velocity
[] Hear sounds when shooting or exploding bubbles
[] Play through preset levels

The project will also include: 
[] An about modal describing the basic functionality of the game

## Wireframes
The app consists of a single screen with a canvas element that consists of the players sprite, platforms, ladders to reach those
platforms, as well as bubbles which will bounce around.

The app will include a dropdown menu allowing the user to choose the number of bubbles generated as well as the size and color of bubbles.

![wireframe](/lib/images/wireframe.png)

## Architecture and Technologies
This project will be implemented with the following technologies:

* Vanilla javascript for for overall structure and game logic
* HTML5 Canvas for DOM Manipulation and rendering
* Webpack to bundle various scripts

In addition to the entry file, there will be 7 scripts included in this project:

``` game.js ``` handles most of the overall game logic for objects colliding and connects the other peices together
``` game_view.js ``` renders the game to the screen and binds keys to actions
``` player.js ``` renders the player and handles player movement
``` bubble.js ``` sets options for how to render bubbles
``` grapple.js ``` sets options for how to render grapples
``` moving_object.js ``` renders various objects to the screen and handles movement

## Implementation Timeline

Over the weekend:

- [ ] Set up logic for movement and collision of objects
- [ ] Render canvas with background image and player
- [ ] Set up all necessary node modules and configure webpack

Day 1: Get player to move around, change animation while running or jumping, and render bubbles

- [ ] Set up player movement
- [ ] Change animation while moving
- [ ] render bubbles
- [ ] begin setting up movement of bubbles

Day 2: Finish setting up movement of bubbles, set up shooting, and handle collision of bubbles with grappling hooks

- [ ] Get bubbles to bounce smoothly and correct speed
- [ ] Set up shooting of grappling hooks 
- [ ] Get hooks to move smoothly and stay for correct amount of time
- [ ] Handle collision of bubbles with hooks

Day 3: Build platforms and set up ladders (or portals depending on whether I can find a sprite with climbing animations)
- [ ] Render platforms
- [ ] Handle player movement on platforms
- [ ] Render ladders or portals
- [ ] Get player to climb or teleport to platforms

Day 4: Set up preset levels and options for setting bubble size, number and speed
- [ ] Set up some preset levels with different backgrounds and differing numbers of bubbles and platforms
- [ ] Create controls for the user to set number, size, and speed of bubbles themselves
