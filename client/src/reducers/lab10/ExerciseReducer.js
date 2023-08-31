import { EXERCISE_IDLE } from "../../constants/lab10/index";
import WalkingManImageRight from "../../assets/images/lab10/walking-man-right.svg";
import WalkingManImageLeft from "../../assets/images/lab10/walking-man-left.svg";

export const types = {
  UPDATE_STATE: "@accessibility-lab/lab10/exercise/update_state",
  ENABLE_END: "@accessibility-lab/lab10/exercise/enable_end",
  SET_OBJECT_POSITION: "@accessibility-lab/lab10/exercise/set_object_position",
  SET_OBJECT_IMAGE: "@accessibility-lab/lab10/exercise/set_object_image",
  SET_USER_INPUT: "@accessibility-lab/lab10/exercise/set_user_input",
  INCREMENT_USER_ATTEMPTS:
    "@accessibility-lab/lab10/exercise/increment_user_attempts",
};

export const initialState = {
  state: EXERCISE_IDLE,
  end: false,
  objectPosition: 0,
  objectImage: WalkingManImageRight,
  userInputDisabled: true,
  userAttempts: 0,
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
    case types.SET_OBJECT_IMAGE:
      return {
        ...state,
        objectImage: action.objectImage,
      };
    case types.SET_OBJECT_POSITION:
      return {
        ...state,
        objectPosition: action.objectPosition,
      };
    case types.SET_USER_INPUT:
      return {
        ...state,
        userInputDisabled: action.userInputDisabled,
      };
    case types.INCREMENT_USER_ATTEMPTS:
      return {
        ...state,
        userAttempts: state.userAttempts + 1,
      };
    default:
      return state;
  }
};

export const actions = {
  updateState: (state) => ({ type: types.UPDATE_STATE, state }),
  enableEnd: (state) => ({ type: types.ENABLE_END, state }),
  setObjectPosition: (objectPosition) => ({
    type: types.SET_OBJECT_POSITION,
    objectPosition,
  }),
  setImageLeft: () => ({
    type: types.SET_OBJECT_IMAGE,
    objectImage: WalkingManImageLeft,
  }),
  setImageRight: () => ({
    type: types.SET_OBJECT_IMAGE,
    objectImage: WalkingManImageRight,
  }),
  disableUserInput: () => ({
    type: types.SET_USER_INPUT,
    userInputDisabled: true,
  }),
  enableUserInput: () => ({
    type: types.SET_USER_INPUT,
    userInputDisabled: false,
  }),
  incrementUserAttempts: () => ({ type: types.INCREMENT_USER_ATTEMPTS }),
};

export default ExerciseReducer;
