export const UPDATE_START_AT = 'UPDATE_START_AT';
export const UPDATE_END_AT = 'UPDATE_END_AT';
export const RESET = 'RESET_GAME';
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';
export const RESET_COUNTDOWN_TIMER = 'RESET_COUNTDOWN_TIMER';
export const COUNTDOWN_TIMER_TICK = 'COUNTDOWN_TIMER_TICK';
export const TIMER_TICK = 'TIMER_TICK';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const INCREMENT_CORRECT_ANSWERS = 'INCREMENT_CORRECT_ANSWERS';
export const INCREMENT_INCORRECT_ANSWERS = 'INCREMENT_INCORRECT_ANSWERS';
export const START_NEW_ROUND = 'START_NEW_ROUND';
export const UPDATE_ROUND_LENGTH = 'UPDATE_ROUND_LENGTH';
export const UPDATE_HINT_BOX_STATUS = 'UPDATE_HINT_BOX_STATUS';
export const UPDATE_HINT = 'RANDOMIZE_HINT';
export const UPDATE_HINT_USED = 'UPDATE_HINT_USED';
export const UPDATE_BOX = 'RANDOMIZE_BOX';
export const UPDATE_BOX_STATUS = 'UPDATE_BOX_STATUS';
export const UPDATE_SOUND_STATUS = 'UPDATE_SOUND_STATUS';
export const UPDATE_INSTRUCTIONS_STATUS = 'UPDATE_INSTRUCTIONS_STATUS';
export const UPDATE_CONGRATULATION_MESSAGE = 'UPDATE_CONGRATULATION_MESSAGE';

// Game States
export const IDLE = 'IDLE';
export const PLAYING = 'PLAYING';
export const COUNTDOWN = 'COUNTDOWN';
export const ENDED = 'ENDED';

// Hint Box States
export const HINT_BOX_OPEN = 'HINT_BOX_OPEN';
export const HINT_BOX_CLOSED = 'HINT_BOX_CLOSED';
export const HINT_BOX_THINKING = 'HINT_BOX_THINKING';

// Box States
export const BOX_UNOPENED = 'BOX_UNOPENED';
export const BOX_CORRECT = 'BOX_CORRECT';
export const BOX_INCORRECT = 'BOX_INCORRECT';
export const BOX_DISABLED = 'BOX_DISABLED';

// Default Values
export const MILLISECONDS_IN_A_SECOND = 1000;
export const MILLISECONDS_MIN_VALUE = 10;

export const COUNTDOWN_SECONDS = 3;
export const TIMER_SECONDS = 30;
export const HINT_TIMER_MILLISECONDS = 2.5 * 1000; // hint is attempted to be randomized every x seconds
export const HINT_BOX_TIMER_MILLISECONDS = 3 * 1000; // hint box collapses after x seconds
export const HINT_BOX_THINKING_TIMER_MILLISECONDS = 3 * 1000; // hint box thinks before displaying hint
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
export const BOX_DEFAULT_VALUES = {1: BOX_UNOPENED, 2: BOX_UNOPENED, 3: BOX_UNOPENED, 4: BOX_UNOPENED};
export const CONGRATULATION_MESSAGES = [
  "Nice one!",
  "You found that treasure!",
  "Wow, you're probably an expert treasure hunter!",
  "Right on!"
];
