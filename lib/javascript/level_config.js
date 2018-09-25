export const LEVELS = {
  1: {
    NUM_BUBBLES: 1,
    BUBBLE_SIZE: [1],
    BUBBLE_START_POS: [[100, 100]],
    BUBBLE_VELOCITY: [[2, 0]],
    
    NUM_PLATFORMS: 0,
    PLATFORM_POS: [],
    PLATFORM_HEIGHT: [],
    PLATFORM_WIDTH: [],
    PLATFORM_HAS_LADDER: [false]
  },
  2: {
    NUM_BUBBLES: 1,
    BUBBLE_SIZE: [0],
    BUBBLE_START_POS: [[320, 60]],
    BUBBLE_VELOCITY: [[2, 0]],

    NUM_PLATFORMS: 1,
    PLATFORM_POS: [[380, 180]],
    PLATFORM_HEIGHT: [10],
    PLATFORM_WIDTH: [150],
    PLATFORM_HAS_LADDER: [false]
  },
  3: {
    NUM_BUBBLES: 2,
    BUBBLE_SIZE: [0, 2],
    BUBBLE_START_POS: [[100, 50], [500, 250]],
    BUBBLE_VELOCITY: [[2, 0], [-2, 0]],

    NUM_PLATFORMS: 4,
    PLATFORM_POS: [[180, 160], [430, 160], [680, 160], [430, 300]],
    PLATFORM_HEIGHT: [10, 10, 10, 10],
    PLATFORM_WIDTH: [75, 75, 75, 75],
    PLATFORM_HAS_LADDER: [false, false, false, false]
  },
  4: {
    PLAYER_START_POS: [424,300],

    NUM_BUBBLES: 1,
    BUBBLE_SIZE: [0],
    BUBBLE_START_POS: [[300, 70]],
    BUBBLE_VELOCITY: [[-2, 0]],

    NUM_PLATFORMS: 1,
    PLATFORM_POS: [[350, 360]],
    PLATFORM_HEIGHT: [10],
    PLATFORM_WIDTH: [200],
    PLATFORM_HAS_LADDER: [true]
  },
  5: {
    NUM_BUBBLES: 2,
    BUBBLE_SIZE: [0, 1],
    BUBBLE_START_POS: [[100, 50], [400, 130]],
    BUBBLE_VELOCITY: [[2, 0], [-2, 0]],

    NUM_PLATFORMS: 3,
    PLATFORM_POS: [[180, 160], [430, 200], [680, 160]],
    PLATFORM_HEIGHT: [10, 10, 10],
    PLATFORM_WIDTH: [75, 75, 75],
    PLATFORM_HAS_LADDER: [false, false, false]
  },
  6: {
    NUM_BUBBLES: 2,
    BUBBLE_SIZE: [0, 0],
    BUBBLE_START_POS: [[150, 60], [650, 60]],
    BUBBLE_VELOCITY: [[-2, 0], [2, 0]],

    NUM_PLATFORMS: 2,
    PLATFORM_POS: [[180, 160], [680, 160]],
    PLATFORM_HEIGHT: [10, 10],
    PLATFORM_WIDTH: [50, 50],
    PLATFORM_HAS_LADDER: [false, false]
  },
  7: {
    NUM_BUBBLES: 2,
    BUBBLE_SIZE: [1, 1],
    BUBBLE_START_POS: [[100, 100], [750, 100]],
    BUBBLE_VELOCITY: [[2, 0], [-2, 0]],

    NUM_PLATFORMS: 8,
    PLATFORM_POS: [[80, 200], [80, 210], [630, 200], [630, 210], [350, 140], [350, 150], [350, 280], [350, 290]],
    PLATFORM_HEIGHT: [10, 10, 10, 10, 10, 10, 10, 10],
    PLATFORM_WIDTH: [150, 150, 150, 150, 150, 150, 150, 150],
    PLATFORM_HAS_LADDER: [false, false, false, false, false, false, false, false]
  },
  8: {
    NUM_BUBBLES: 4,
    BUBBLE_SIZE: [0, 2, 2, 3],
    BUBBLE_START_POS: [[400, 120], [100, 25], [200, 25], [300, 25]],
    BUBBLE_VELOCITY: [[3, 0], [2, 0], [2,0], [2,0]],

    NUM_PLATFORMS: 6,
    PLATFORM_POS: [[20, 100], [240, 100], [460, 100], [680, 100], [40, 230], [600, 350]],
    PLATFORM_HEIGHT: [10, 10, 10, 10, 10, 10],
    PLATFORM_WIDTH: [220, 220, 220, 220, 120, 120],
    PLATFORM_HAS_LADDER: [false, false, false, false, true, true]
  },
  9: {
    PLAYER_START_POS: [424, 360],

    NUM_BUBBLES: 2,
    BUBBLE_SIZE: [0, 0],
    BUBBLE_START_POS: [[400, 100], [400, 100]],
    BUBBLE_VELOCITY: [[3, 0], [-3, 0]],

    NUM_PLATFORMS: 3,
    PLATFORM_POS: [[100, 420], [420, 420], [700, 420]],
    PLATFORM_HEIGHT: [10, 10, 10],
    PLATFORM_WIDTH: [100, 100, 100],
    PLATFORM_HAS_LADDER: [true, true ,true]
  },
  10: {
    NUM_BUBBLES: 2,
    BUBBLE_SIZE: [1, 0],
    BUBBLE_START_POS: [[100, 100], [750, 30]],
    BUBBLE_VELOCITY: [[3, 0], [-2, 0]],

   NUM_PLATFORMS: 14,
   PLATFORM_POS: [[100, 200], [200, 200], [300, 200], [400, 200], [500, 200], [600, 200], [700, 200], [150, 300], [250, 300], [350, 300], [450, 300], [550, 300], [650, 300], [750, 300]],
   PLATFORM_HEIGHT: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
   PLATFORM_WIDTH: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
   PLATFORM_HAS_LADDER: false
  },
  11: {

  },
  12: {

  },
  13: {

  },
  14: {

  },
  15: {

  },
  16: {

  },
  17: {

  },
  18: {

  },
  19: {

  },
  20: {

  }
}