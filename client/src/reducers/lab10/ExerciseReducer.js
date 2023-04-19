import {
  COLORS,
  EXERCISE_IDLE,
  SIMULATION_ENDED,
  SIMULATION_IDLE,
  SIMULATION_STARTED,
  STEP_COUNT,
  TRAINING_DURATION,
} from "../../constants/lab10/index";
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
  RESET_USER_ATTEMPTS: "@accessibility-lab/lab10/exercise/reset_user_attempts",
  SET_TRAINING_DURATION:
    "@accessibility-lab/lab10/exercise/set_training_duration",
  SET_SIMULATION_COVERED:
    "@accessibility-lab/lab10/exercise/set_simulation_covered",
  SET_SIMULATION_STARTED:
    "@accessibility-lab/lab10/exercise/set_simulation_started",
  SET_SIMULATION_STATUS:
    "@accessibility-lab/lab10/exercise/set_simulation_status",
  UPDATE_WEIGHTS: "@accessibility-lab/lab10/exercise/update_weights",
};

export const initialState = {
  state: EXERCISE_IDLE,
  end: false,
  objectPosition: STEP_COUNT * 6,
  objectImage: WalkingManImageRight,
  userAttempts: 0,
  trainingDuration: TRAINING_DURATION,

  userInputDisabled: true,
  simulationStatus: SIMULATION_IDLE,
  weights: COLORS.reduce((a, v) => ({ ...a, [v]: 0 }), {}),
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
    case types.INCREMENT_USER_ATTEMPTS:
      return {
        ...state,
        userAttempts: state.userAttempts + 1,
      };
    case types.RESET_USER_ATTEMPTS:
      return {
        ...state,
        userAttempts: initialState.userAttempts,
      };
    case types.SET_TRAINING_DURATION:
      return {
        ...state,
        trainingDuration: action.trainingDuration,
      };

    case types.UPDATE_WEIGHTS:
      if (COLORS.includes(action.color)) {
        state.weights[action.color] += 1;
      }
      return {
        ...state,
        weights: state.weights,
      };

    case types.SET_SIMULATION_STATUS:
      return {
        ...state,
        simulationStatus: action.simulationStatus,
        userInputDisabled: action.userInputDisabled,
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
  incrementUserAttempts: () => ({ type: types.INCREMENT_USER_ATTEMPTS }),
  resetUserAttempts: () => ({ type: types.RESET_USER_ATTEMPTS }),
  setTrainingDuration: (trainingDuration) => ({
    type: types.SET_TRAINING_DURATION,
    trainingDuration,
  }),
  updateColorWeight: (color) => ({
    type: types.UPDATE_WEIGHTS,
    color,
  }),
  startSimulation: () => ({
    type: types.SET_SIMULATION_STATUS,
    simulationStatus: SIMULATION_STARTED,
    userInputDisabled: false,
  }),
  endSimulation: () => ({
    type: types.SET_SIMULATION_STATUS,
    simulationStatus: SIMULATION_ENDED,
    userInputDisabled: true,
  }),
  idleSimulation: (userInputDisabled) => ({
    type: types.SET_SIMULATION_STATUS,
    simulationStatus: SIMULATION_IDLE,
    userInputDisabled,
  }),
};

export default ExerciseReducer;
