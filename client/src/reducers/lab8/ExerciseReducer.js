import { EXERCISE_IDLE, EXERCISE_PLAYING } from "../../constants/lab8/index";

export const types = {
  UPDATE_STATE: "@ai-lab/lab8/bias/exercise/update_state",
  ENABLE_END: "@accessibility-lab/lab8/exercise/enable_end",
  RESET: "@accessibility-lab/lab8/exercise/reset",
};

export const initialState = {
  state: EXERCISE_IDLE,
  end: false,
};

const ExerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_STATE:
      return {
        ...state,
        state: action.state,
      };
    case types.ENABLE_END:
      return {
        ...state,
        end: action.state,
      };
    case types.RESET:
      return {
        ...initialState,
        state: EXERCISE_PLAYING,
      };
    default:
      return state;
  }
};

export const actions = {
  updateState: (state) => ({ type: types.UPDATE_STATE, state }),
  enableEnd: () => ({ type: types.ENABLE_END }),
  reset: () => ({ type: types.RESET }),
};

export default ExerciseReducer;
