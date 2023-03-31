import { EXERCISE_IDLE, STEP_COUNT } from "../../constants/lab10/index";
import WalkingManImageRight from "../../assets/images/lab10/walking-man-right.svg";
import WalkingManImageLeft from "../../assets/images/lab10/walking-man-left.svg";

export const types = {
  UPDATE_STATE: "@accessibility-lab/lab10/exercise/update_state",
  ENABLE_END: "@accessibility-lab/lab10/exercise/enable_end",
  INCREMENT_OBJECT_POSITION_X:
    "@accessibility-lab/lab10/exercise/increment_object_position_x",
  DECREMENT_OBJECT_POSITION_X:
    "@accessibility-lab/lab10/exercise/decrement_object_position_x",
  SET_OBJECT_AT_EDGE_LEFT_TRUE:
    "@accessibility-lab/lab10/exercise/set_object_at_edge_left_true",
  SET_OBJECT_AT_EDGE_LEFT_FALSE:
    "@accessibility-lab/lab10/exercise/set_object_at_edge_left_false",
  SET_OBJECT_AT_EDGE_RIGHT_TRUE:
    "@accessibility-lab/lab10/exercise/set_object_at_edge_right_true",
  SET_OBJECT_AT_EDGE_RIGHT_FALSE:
    "@accessibility-lab/lab10/exercise/set_object_at_edge_right_false",
  SET_ACTION_LEFT: "@accessibility-lab/lab10/exercise/set_action_left",
  SET_ACTION_RIGHT: "@accessibility-lab/lab10/exercise/set_action_right",
};

export const initialState = {
  state: EXERCISE_IDLE,
  end: false,
  objectPositionX: 0,
  objectImage: WalkingManImageRight,
  objectAtEdgeLeft: false,
  objectAtEdgeRight: false,
  action: null,
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
    case types.INCREMENT_OBJECT_POSITION_X:
      return {
        ...state,
        objectPositionX: state.objectPositionX + STEP_COUNT,
        objectImage: WalkingManImageRight,
      };
    case types.DECREMENT_OBJECT_POSITION_X:
      return {
        ...state,
        objectPositionX: state.objectPositionX - STEP_COUNT,
        objectImage: WalkingManImageLeft,
      };
    case types.SET_OBJECT_AT_EDGE_LEFT_TRUE:
      return {
        ...state,
        objectAtEdgeLeft: true,
      };
    case types.SET_OBJECT_AT_EDGE_LEFT_FALSE:
      return {
        ...state,
        objectAtEdgeLeft: false,
      };
    case types.SET_OBJECT_AT_EDGE_RIGHT_TRUE:
      return {
        ...state,
        objectAtEdgeRight: true,
      };
    case types.SET_OBJECT_AT_EDGE_RIGHT_FALSE:
      return {
        ...state,
        objectAtEdgeRight: false,
      };
    case types.SET_ACTION_LEFT:
      return {
        ...state,
        action: "LEFT",
      };
    case types.SET_ACTION_RIGHT:
      return {
        ...state,
        action: "RIGHT",
      };
    default:
      return state;
  }
};

export const actions = {
  updateState: (state) => ({ type: types.UPDATE_STATE, state }),
  enableEnd: (state) => ({ type: types.ENABLE_END, state }),
  incrementObjectPositionX: () => ({ type: types.INCREMENT_OBJECT_POSITION_X }),
  decrementObjectPositionX: () => ({ type: types.DECREMENT_OBJECT_POSITION_X }),
  setObjectAtEdgeLeftTrue: () => ({ type: types.SET_OBJECT_AT_EDGE_LEFT_TRUE }),
  setObjectAtEdgeLeftFalse: () => ({
    type: types.SET_OBJECT_AT_EDGE_LEFT_FALSE,
  }),
  setObjectAtEdgeRightTrue: () => ({
    type: types.SET_OBJECT_AT_EDGE_RIGHT_TRUE,
  }),
  setObjectAtEdgeRightFalse: () => ({
    type: types.SET_OBJECT_AT_EDGE_RIGHT_FALSE,
  }),
  setActionLeft: () => ({ type: types.SET_ACTION_LEFT }),
  setActionRight: () => ({ type: types.SET_ACTION_RIGHT }),
};

export default ExerciseReducer;
