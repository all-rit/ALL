// Exercise States
export const EXERCISE_ENDED = "EXERCISE_ENDED";
export const EXERCISE_COUNTDOWN = "EXERCISE_COUNTDOWN";

// Hint Box States
export const HINT_BOX_OPEN = "HINT_BOX_OPEN";
export const HINT_BOX_CLOSED = "HINT_BOX_CLOSED";
export const HINT_BOX_THINKING = "HINT_BOX_THINKING";

// Box States
export const BOX_UNOPENED = "BOX_UNOPENED";
export const BOX_CORRECT = "BOX_CORRECT";
export const BOX_INCORRECT = "BOX_INCORRECT";
export const BOX_DISABLED = "BOX_DISABLED";
export const BOX_REVEALED = "BOX_REVEALED";
export const BOX_LOCKED = "BOX_LOCKED";

// Default Values
export const MILLISECONDS_IN_A_SECOND = 1000;
export const TIMEOUT_MIN_MS = 10;

export const BOXES_NUM_VALUE = 4;
export const COUNTDOWN_SECONDS = 3;
export const TIMER_SECONDS = 30;
export const OPEN_HINT_BOX_DELAY = 1.5;
export const HINT_BOX_THINKING_TIMER_SECONDS = 0.5;
export const BOX_DEFAULT_VALUES = {
  1: BOX_UNOPENED,
  2: BOX_UNOPENED,
  3: BOX_UNOPENED,
  4: BOX_UNOPENED,
};
export const CONGRATULATION_MESSAGES = [
  "Nice one!",
  "You found that treasure!",
  "Wow, you're an expert treasure hunter!",
  "Right on!",
];

export const LAB_ID = 1;
