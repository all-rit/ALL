import {
  START_GAME,
  END_GAME,
  RESET_GAME,
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