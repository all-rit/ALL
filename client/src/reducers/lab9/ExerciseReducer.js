import { EXERCISE_IDLE } from "../../constants/lab9/index";

export const types = {
  UPDATE_STATE: "@accessibility-lab/lab9/exercise/update_state",
  ENABLE_END: "@accessibility-lab/lab9/exercise/enable_end",
  INCREMENT_FLAGGED_POSTS:
    "@accessibility-lab/lab9/exercise/increment_flagged_posts",
};

export const initialState = {
  state: EXERCISE_IDLE,
  end: false,
  flaggedPosts: 0,
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
        end: action.end,
      };
    case types.INCREMENT_FLAGGED_POSTS:
      return {
        ...state,
        flaggedPosts: state.flaggedPosts + 1,
      };
    default:
      return state;
  }
};

export const actions = {
  updateState: (state) => ({ type: types.UPDATE_STATE, state }),
  enableEnd: (end) => ({ type: types.ENABLE_END, end }),
  incrementFlaggedPosts: () => ({ type: types.INCREMENT_FLAGGED_POSTS }),
};

export default ExerciseReducer;
