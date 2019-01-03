export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';
export const RESET_GAME = 'RESET_GAME';
export const TIMER_TICK = 'TIMER_TICK';
export const INCREASE_SCORE = 'INCREASE_SCORE';
export const DECREASE_SCORE = 'DECREASE_SCORE';
export const INCREMENT_CORRECT_ANSWERS = 'INCREMENT_CORRECT_ANSWERS';
export const INCREMENT_INCORRECT_ANSWERS = 'INCREMENT_INCORRECT_ANSWERS';
export const START_NEW_ROUND = 'START_NEW_ROUND';
export const UPDATE_HINT_BOX_STATUS = 'UPDATE_HINT_BOX_STATUS';
export const UPDATE_HINT = 'RANDOMIZE_HINT';
export const UPDATE_BOX = 'RANDOMIZE_BOX';
export const UPDATE_SOUND_STATUS = 'UPDATE_SOUND_STATUS';

// Game States
export const IDLE = 'IDLE';
export const STARTED = 'STARTED';
export const ENDED = 'ENDED';

// Default Values
export const TIMER_SECONDS = 2;
export const HINT_TIMER_MILLISECONDS = 3 * 1000; // hint is attempted to be randomized every x seconds
export const HINT_BOX_TIMER_MILLISECONDS = 3 * 1000; // hint box collapses after x seconds
export const POSSIBLE_HINTS = [
  'The box is an odd number.',
  'The box is an even number.',
  'The box is one of the two on the left/right.',
  'The box is not at both ends.',
  'The box is white.',
  'The box is black.'];
export const BOX_HINT_COMBINATIONS = {
  1: [0, 2, 4],
  2: [1, 3, 5],
  3: [0, 3, 5],
  4: [1, 2, 4]
};
