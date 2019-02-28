import {
  UPDATE_START_AT,
  UPDATE_END_AT,
  RESET,
  UPDATE_GAME_STATE,
  RESET_COUNTDOWN_TIMER,
  COUNTDOWN_TIMER_TICK,
  TIMER_TICK,
  UPDATE_SCORE,
  INCREMENT_CORRECT_ANSWERS,
  INCREMENT_INCORRECT_ANSWERS,
  START_NEW_ROUND,
  UPDATE_ROUND_LENGTH,
  UPDATE_HINT_BOX_STATUS,
  UPDATE_HINT,
  UPDATE_HINT_USED,
  UPDATE_BOX,
  UPDATE_BOX_STATUS,
  UPDATE_SOUND_STATUS,
  UPDATE_INSTRUCTIONS_STATUS,
  UPDATE_CONGRATULATION_MESSAGE
} from './GameConstants';

export const updateStartAt = () => {
  return {
    type: UPDATE_START_AT
  };
};

export const updateEndAt = () => {
  return {
    type: UPDATE_END_AT
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};

export const updateGameState = (gameState) => {
  return {
    type: UPDATE_GAME_STATE,
    gameState
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

export const updateScore = (score) => {
  return {
    type: UPDATE_SCORE,
    score
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

export const updateBoxStatus = (box, status) => {
  return {
    type: UPDATE_BOX_STATUS,
    box,
    status
  };
};

export const updateSoundStatus = (status) => {
  return {
    type: UPDATE_SOUND_STATUS,
    status
  };
};

export const updateInstructionsStatus = (status) => {
  return {
    type: UPDATE_INSTRUCTIONS_STATUS,
    status
  };
};

export const updateCongratulationMessage = (message) => {
  return {
    type: UPDATE_CONGRATULATION_MESSAGE,
    message
  };
};
