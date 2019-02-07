import {
  START_GAME,
  END_GAME,
  RESET_GAME,
  UPDATE_GAME_STATE,
  START_COUNTDOWN,
  RESET_COUNTDOWN_TIMER,
  COUNTDOWN_TIMER_TICK,
  TIMER_TICK,
  INCREASE_SCORE,
  DECREASE_SCORE,
  INCREMENT_CORRECT_ANSWERS,
  INCREMENT_INCORRECT_ANSWERS,
  START_NEW_ROUND,
  UPDATE_ROUND_LENGTH,
  UPDATE_HINT_BOX_STATUS,
  UPDATE_HINT,
  UPDATE_HINT_USED,
  UPDATE_BOX,
  UPDATE_SOUND_STATUS
} from './GameConstants';

export const startGame = () => {
  return {
    type: START_GAME
  };
};

export const endGame = () => {
  return {
    type: END_GAME
  };
};

export const resetGame = () => {
  return {
    type: RESET_GAME
  };
};

export const updateGameState = (gameState) => {
  return {
    type: UPDATE_GAME_STATE,
    gameState
  };
};

export const startCountdown = () => {
  return {
    type: START_COUNTDOWN
  };
};

export const resetCountdownTimer = () => {
  return {
    type: RESET_COUNTDOWN_TIMER
  };
};

export const countdownTimerTick = () => {
  return {
    type: COUNTDOWN_TIMER_TICK
  };
};

export const timerTick = () => {
  return {
    type: TIMER_TICK
  };
};

export const increaseScore = () => {
  return {
    type: INCREASE_SCORE
  };
};

export const decreaseScore = () => {
  return {
    type: DECREASE_SCORE
  };
};

export const incrementCorrectAnswers = () => {
  return {
    type: INCREMENT_CORRECT_ANSWERS
  };
};

export const incrementIncorrectAnswers = () => {
  return {
    type: INCREMENT_INCORRECT_ANSWERS
  };
};

export const startNewRound = () => {
  return {
    type: START_NEW_ROUND
  };
};

export const updateRoundLength = (time) => {
  return {
    type: UPDATE_ROUND_LENGTH,
    time
  };
};

export const updateHintBoxStatus = (status) => {
  return {
    type: UPDATE_HINT_BOX_STATUS,
    status
  };
};

export const updateHint = (hint) => {
  return {
    type: UPDATE_HINT,
    hint
  };
};

export const updateHintUsed = (status) => {
  return {
    type: UPDATE_HINT_USED,
    status
  };
};

export const updateBox = (box) => {
  return {
    type: UPDATE_BOX,
    box
  };
};

export const updateSoundStatus = (status) => {
  return {
    type: UPDATE_SOUND_STATUS,
    status
  };
};