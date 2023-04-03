import { EXERCISE_IDLE } from "../../constants/lab10/index";
import WalkingManImageRight from "../../assets/images/lab10/walking-man-right.svg";
import WalkingManImageLeft from "../../assets/images/lab10/walking-man-left.svg";

export const types = {
  UPDATE_STATE: "@accessibility-lab/lab10/exercise/update_state",
  ENABLE_END: "@accessibility-lab/lab10/exercise/enable_end",
  SET_OBJECT_POSITION: "@accessibility-lab/lab10/exercise/set_object_position",
  SET_IMAGE_LEFT: "@accessibility-lab/lab10/exercise/set_image_left",
  SET_IMAGE_RIGHT: "@accessibility-lab/lab10/exercise/set_image_right",
};

export const initialState = {
  state: EXERCISE_IDLE,
  end: false,
  objectPosition: 0,
  objectImage: WalkingManImageRight,
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
    case types.SET_IMAGE_LEFT:
      return {
        ...state,
        objectImage: WalkingManImageLeft,
      };
    case types.SET_IMAGE_RIGHT:
      return {
        ...state,
        objectImage: WalkingManImageRight,
      };
    case types.SET_OBJECT_POSITION:
      return {
        ...state,
        objectPosition: action.objectPosition,
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
  setImageLeft: () => ({ type: types.SET_IMAGE_LEFT }),
  setImageRight: () => ({ type: types.SET_IMAGE_RIGHT }),
};

export default ExerciseReducer;
