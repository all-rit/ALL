import { EXERCISE_IDLE } from "../../constants/lab11/index";

export const types = {
  UPDATE_STATE: "@accessibility-lab/lab11/exercise/update_state",
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
    default:
      return state;
  }
};

export const actions = {
  updateState: (state) => ({ type: types.UPDATE_STATE, state }),
};

export default ExerciseReducer;
