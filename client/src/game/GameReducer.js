import update from 'immutability-helper';

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
  UPDATE_BOX_STATUS,
  UPDATE_SOUND_STATUS,

  PLAYING,
  ENDED,
  IDLE,
  COUNTDOWN,

  HINT_BOX_CLOSED,

  MILLISECONDS_IN_A_SECOND,
  MILLISECONDS_MIN_VALUE,
  TIMER_SECONDS,
  COUNTDOWN_SECONDS,
  BOX_DEFAULT_VALUES
} from './GameConstants';

const initialState = {
  gameState: IDLE,
  startedAt: undefined,
  endedAt: undefined,
  time: TIMER_SECONDS * MILLISECONDS_IN_A_SECOND / MILLISECONDS_MIN_VALUE,
  countdownTime: COUNTDOWN_SECONDS,
  score: 0,
  roundNumber: 0,
  roundLength: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  correctBoxNumber: undefined,
  currentHint: undefined,
  hintBoxState: HINT_BOX_CLOSED,
  hintUsed: false,
  soundEnabled: true,
  boxes: BOX_DEFAULT_VALUES
};

export const GameReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameState: PLAYING,
        startedAt: new Date().getTime()
      };

    case END_GAME:
      return {
        ...state,
        gameState: ENDED,
        endedAt: new Date().getTime()
      };

    case RESET_GAME:
      return initialState;

    case UPDATE_GAME_STATE:
      return {
        ...state,
        gameState: action.gameState
      };

    case START_COUNTDOWN:
      return {
        ...state,
        gameState: COUNTDOWN
      };

    case RESET_COUNTDOWN_TIMER:
      return {
        ...state,
        countdownTime: COUNTDOWN_SECONDS
      };

    case COUNTDOWN_TIMER_TICK:
      return {
        ...state,
        countdownTime: state.countdownTime - 1
      };

    case TIMER_TICK:
      return {
        ...state,
        time: state.time - 1
      };

    case INCREASE_SCORE:
      return {
        ...state,
        score: state.score + 5
      };

    case DECREASE_SCORE:
      return {
        ...state,
        score: state.score - 1
      };

    case INCREMENT_CORRECT_ANSWERS:
      return {
        ...state,
        correctAnswers: state.correctAnswers + 1
      };

    case INCREMENT_INCORRECT_ANSWERS:
      return {
        ...state,
        incorrectAnswers: state.incorrectAnswers + 1
      };

    case START_NEW_ROUND:
      return {
        ...state,
        roundNumber: state.roundNumber + 1,
        boxes: BOX_DEFAULT_VALUES
      };

    case UPDATE_ROUND_LENGTH:
      return {
        ...state,
        roundLength: action.time
      };

    case UPDATE_HINT_BOX_STATUS:
      return {
        ...state,
        hintBoxState: action.status
      };

    case UPDATE_HINT:
      return {
        ...state,
        currentHint: action.hint
      };

    case UPDATE_HINT_USED:
      return {
        ...state,
        hintUsed: action.status
      };

    case UPDATE_BOX:
      return {
        ...state,
        correctBoxNumber: action.box
      };

    case UPDATE_BOX_STATUS:
      return update(state, {
        boxes: {
          [action.box]: {
            $set: action.status
          }
        }
      });

    case UPDATE_SOUND_STATUS:
      return {
        ...state,
        soundEnabled: action.status
      };

    default:
      return state;
  }
};