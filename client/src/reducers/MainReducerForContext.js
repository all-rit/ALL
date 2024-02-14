import { EXERCISE_IDLE } from "src/constants/index";

/**
 * Defines the types of actions for the MainReducerForContext.
 * @typedef {Object} Types
 * @property {string} LOGIN - The action type for login.
 * @property {string} UPDATE_USER - The action type for updating user.
 * @property {string} SET_LAB - The action type for setting lab.
 * @property {string} SET_BODY - The action type for setting body.
 * @property {string} UPDATE_USER_STATE - The action type for updating user state.
 * @property {bool} SET_IS_IMAGINE - The action type for setting up special actions for Imagine based content.
 */

/**
 * The types of actions for the MainReducerForContext.
 * @type {Types}
 */
export const types = {
  LOGIN: "@accessibility-lab/context/login",
  UPDATE_USER: "@accessibility-lab/context/update_user",
  SET_LAB: "@accessibility-lab/context/lab",
  SET_BODY: "@accessibility-lab/context/app/set_body",
  UPDATE_USER_STATE: "@accessibility-lab/context/update_user_state",
  SET_IS_IMAGINE: "@accessibility-lab/context/set_is_imagine"
};

/**
 * Initial state for the main reducer.
 * @typedef {Object} MainReducerState
 * @property {string} userState - The user state.
 * @property {Object} main - The main object.
 * @property {Object} main.user - The user object.
 * @property {number} main.lab - The lab number.
 * @property {number} main.body - The body number.
 * @property {bool} main.isImagine - The current state of isImagine.
 */

/**
 * The initial state for the main reducer.
 * @type {MainReducerState}
 */
export const initialState = {
  userState: EXERCISE_IDLE,
  main: {
    user: null,
    lab: 0,
    body: 0,
    isImagine: false
  },
};

/**
 * Main reducer function for context.
 * @param {Object} state - The current state.
 * @param {Object} action - The action object.
 * @returns {Object} - The updated state.
 */
export const MainReducerForContext = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case types.SET_BODY:
      return {
        ...state,
        main: {
          ...state.main,
          body: payload.body,
        },
      };
    case types.UPDATE_USER:
      return {
        ...state,
        main: {
          ...state.main,
          user: payload.user,
        },
      };
    case types.SET_LAB:
      return {
        ...state,
        main: {
          ...state.main,
          lab: payload.lab,
        },
      };
    case types.UPDATE_USER_STATE:
      return {
        ...state,
        userState: payload.userState,
      };
    case types.SET_IS_IMAGINE:
      return {
        ...state,
        main: {
          ...state.main,
          isImagine: payload.isImagine
        }
      };
    default:
      return state;
  }
};
