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
  UPDATE_SOUND_STATUS,

  STARTED,
  ENDED,
  IDLE,

  TIMER_SECONDS
} from './GameConstants';

const initialState = {
  gameState: IDLE,
  startedAt: undefined,
  endedAt: undefined,
  seconds: TIMER_SECONDS,
  score: 0,
  roundNumber: 0,
  roundLength: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  correctBoxNumber: undefined,
  currentHint: undefined,
  isHintBoxOpen: false,
  hintUsed: false,
  soundEnabled: true
};

export const GameReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameState: STARTED,
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

    case TIMER_TICK:
      return {
        ...state,
        seconds: state.seconds - 1
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
        roundNumber: state.roundNumber + 1
      };

    case UPDATE_ROUND_LENGTH:
      return {
        ...state,
        roundLength: action.seconds
      };

    case UPDATE_HINT_BOX_STATUS:
      return {
        ...state,
        isHintBoxOpen: action.status
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

    case UPDATE_SOUND_STATUS:
      return {
        ...state,
        soundEnabled: action.status
      };

    default:
      return state;
  }
};