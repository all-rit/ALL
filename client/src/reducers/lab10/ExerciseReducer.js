import {
  COLORS,
  EXERCISE_IDLE,
  SIMULATION_ENDED,
  SIMULATION_IDLE,
  SIMULATION_STARTED,
  STEP_COUNT,
  TRAINING_DURATION,
} from "src/constants/lab10";
import WalkingManImageRight from "src/assets/images/lab10/walking-man-right.svg";
import WalkingManImageLeft from "src/assets/images/lab10/walking-man-left.svg";

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
  SET_WEIGHTS: "@accessibility-lab/lab10/exercise/set_weights",
  UPDATE_WEIGHTS: "@accessibility-lab/lab10/exercise/update_weights",
  SET_AI: "@accessibility-lab/lab10/exercise/set_ai",
  COLLECT_WEIGHTS: "@accessibility-lab/lab10/exercise/collect_weights",
  SET_SESSION_COUNTERS:
    "@accessibility-lab/lab10/exercise/set_session_counters",
  INCREMENT_TRAINING_COUNTER:
    "@accessibility-lab/lab10/exercise/increment_training_counter",
  INCREMENT_EXPERIENCE_COUNTER:
    "@accessibility-lab/lab10/exercise/increment_experience_counter",
};

export const initialState = {
  state: EXERCISE_IDLE,
  end: false,
  objectPosition: STEP_COUNT * 6,
  objectImage: WalkingManImageRight,
  userAttempts: 0,
  trainingDuration: TRAINING_DURATION,
  ai: false,
  userInputDisabled: true,
  simulationStatus: SIMULATION_IDLE,
  weights: Object.fromEntries(COLORS),
  collectWeights: true,
  simulationCovered: true,
  trainingCounter: 0,
  experienceCounter: 0,
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

    /* TODO: can we just leave it as ...state */
    case types.UPDATE_WEIGHTS:
      state.weights[action.color] += 1;
      return {
        ...state,
        weights: state.weights,
      };

    case types.SET_WEIGHTS:
      return {
        ...state,
        weights: action.weights,
      };

    case types.SET_SIMULATION_STATUS:
      return {
        ...state,
        simulationStatus: action.simulationStatus,
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
    case types.SET_AI:
      return {
        ...state,
        ai: action.ai,
      };
    case types.COLLECT_WEIGHTS:
      return {
        ...state,
        collectWeights: action.collectWeights,
      };
    case types.SET_SIMULATION_COVERED:
      return {
        ...state,
        simulationCovered: action.simulationCovered,
      };
    case types.SET_SESSION_COUNTERS:
      return {
        ...state,
        trainingCounter: action.session?.trainingCounter || 0,
        experienceCounter: action.session?.experienceCounter || 0,
      };
    case types.INCREMENT_TRAINING_COUNTER:
      return {
        ...state,
        trainingCounter: state.trainingCounter + 1,
      };
    case types.INCREMENT_EXPERIENCE_COUNTER:
      return {
        ...state,
        experienceCounter: state.experienceCounter + 1,
      };
    default:
      return state;
  }
};

export const actions = {
  updateState: (state) => ({ type: types.UPDATE_STATE, state }),
  enableEnd: (state) => ({ type: types.ENABLE_END, state }),
  startSimulation: () => ({
    type: types.SET_SIMULATION_STATUS,
    simulationStatus: SIMULATION_STARTED,
  }),
  endSimulation: () => ({
    type: types.SET_SIMULATION_STATUS,
    simulationStatus: SIMULATION_ENDED,
  }),
  idleSimulation: () => ({
    type: types.SET_SIMULATION_STATUS,
    simulationStatus: SIMULATION_IDLE,
  }),
  enableUserInput: () => ({
    type: types.SET_USER_INPUT,
    userInputDisabled: false,
  }),
  disableUserInput: () => ({
    type: types.SET_USER_INPUT,
    userInputDisabled: true,
  }),
  enableSimulationCover: () => ({
    type: types.SET_SIMULATION_COVERED,
    simulationCovered: true,
  }),
  disableSimulationCover: () => ({
    type: types.SET_SIMULATION_COVERED,
    simulationCovered: false,
  }),

  updateColorWeight: (color) => ({
    type: types.UPDATE_WEIGHTS,
    color,
  }),
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
  enableAI: () => ({ type: types.SET_AI, ai: true }),
  disableAI: () => ({ type: types.SET_AI, ai: false }),
  setTrainingDuration: (trainingDuration) => ({
    type: types.SET_TRAINING_DURATION,
    trainingDuration,
  }),
  setWeights: (weights) => ({ type: types.SET_WEIGHTS, weights }),
  enableCollectWeights: () => ({
    type: types.COLLECT_WEIGHTS,
    collectWeights: true,
  }),
  disableCollectWeights: () => ({
    type: types.COLLECT_WEIGHTS,
    collectWeights: false,
  }),
  setSessionCounters: (session) => ({
    type: types.SET_SESSION_COUNTERS,
    session,
  }),
  incrementTrainingCounter: () => ({
    type: types.INCREMENT_TRAINING_COUNTER,
  }),
  incrementExperienceCounter: () => ({
    type: types.INCREMENT_EXPERIENCE_COUNTER,
  }),
};

export default ExerciseReducer;
