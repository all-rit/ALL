import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import {
  AppReducer as Lab1AppReducer,
  initialState as Lab1AppInititalState,
  types as Lab1AppTypes,
} from "./AppReducer";
import {
  RepairReducer as Lab1RepairReducer,
  initialState as Lab1RepairInititalState,
  types as Lab1RepairTypes,
} from "./RepairReducer";
import {
  ExerciseReducer as Lab1ExerciseReducer,
  initialState as Lab1ExerciseInititalState,
  types as Lab1ExerciseTypes,
} from "./ExerciseReducer";

const Lab1StateContext = createContext({
  state: {
    ...Lab1AppInititalState,
    ...Lab1RepairInititalState,
    ...Lab1ExerciseInititalState,
  },
  actions: {
    updatePopup: () => {},
    openInstructions: () => {},
    closeInstructions: () => {},
    updateState: () => {},
    reset: () => {},
    tick: () => {},
    roundTick: () => {},
    countdownTick: () => {},
    resetRoundTimer: () => {},
    resetCountdownTimer: () => {},
    updateScore: () => {},
    incrementCorrectAnswers: () => {},
    incrementIncorrectAnswers: () => {},
    startNewRound: () => {},
    updateHintBoxStatus: () => {},
    updateHintUsed: () => {},
    revealBox: () => {},
    hideBox: () => {},
    updateBox: () => {},
    updateBoxStatus: () => {},
    toggleSound: () => {},
    addResult: () => {},
    updateCongratulationMessage: () => {},
    updateRepair: () => {},
    updateTab: () => {},
    openRepair: () => {},
    closeRepair: () => {},
  },
});

/**
 * Custom hook that provides access to the Lab1StateContext.
 * @returns {Object} The Lab1StateContext object.
 * @throws {Error} If used outside of Lab1ContextProvider.
 */
const useLab1StateContext = () => {
  const context = useContext(Lab1StateContext);

  if (context === undefined) {
    throw new Error(
      "useLab1StateContext must be used within Lab1ContextProvider"
    );
  }

  return context;
};

/**
 * @file Lab1Context.js
 * @desc This file contains the implementation of the Lab1ContextProvider component, which is responsible for managing the state and actions related to Lab1 in the application.
 */
const Lab1ContextProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(
    Lab1AppReducer,
    Lab1AppInititalState
  );
  const [repairState, repairDispatch] = useReducer(
    Lab1RepairReducer,
    Lab1RepairInititalState
  );
  const [exerciseState, exerciseDispatch] = useReducer(
    Lab1ExerciseReducer,
    Lab1ExerciseInititalState
  );

  /**
   * Actions for Lab1App.
   * @typedef {Object} appActions
   * @property {function} updatePopup - Updates the popup with the given message.
   * @property {function} openInstructions - Opens the instructions.
   * @property {function} closeInstructions - Closes the instructions.
   */

  /**
   * Actions for Lab1App.
   * @type {appActions}
   */
  const appActions = {
    updatePopup: (message) =>
      appDispatch({ type: Lab1AppTypes.UPDATE_POPUP, message }),
    openInstructions: () =>
      appDispatch({ type: Lab1AppTypes.OPEN_INSTRUCTIONS }),
    closeInstructions: () =>
      appDispatch({ type: Lab1AppTypes.CLOSE_INSTRUCTIONS }),
  };

  /**
   * Object containing action functions for Lab1Context.
   *
   * @typedef {Object} exerciseActions
   * @property {function} updateState - Updates the state.
   * @property {function} reset - Resets the exercise.
   * @property {function} tick - Performs a tick action.
   * @property {function} roundTick - Performs a round tick action.
   * @property {function} countdownTick - Performs a countdown tick action.
   * @property {function} resetRoundTimer - Resets the round timer.
   * @property {function} resetCountdownTimer - Resets the countdown timer.
   * @property {function} updateScore - Updates the score.
   * @property {function} incrementCorrectAnswers - Increments the count of correct answers.
   * @property {function} incrementIncorrectAnswers - Increments the count of incorrect answers.
   * @property {function} startNewRound - Starts a new round.
   * @property {function} updateHintBoxStatus - Updates the status of the hint box.
   * @property {function} updateHintUsed - Updates the hint used.
   * @property {function} revealBox - Reveals the box.
   * @property {function} hideBox - Hides the box.
   * @property {function} updateBox - Updates the box.
   * @property {function} updateBoxStatus - Updates the status of the box.
   * @property {function} toggleSound - Toggles the sound.
   * @property {function} addResult - Adds a result.
   * @property {function} updateCongratulationMessage - Updates the congratulation message.
   */
  const exerciseActions = {
    updateState: (state) =>
      exerciseDispatch({ type: Lab1ExerciseTypes.UPDATE_STATE, state }),
    reset: () => exerciseDispatch({ type: Lab1ExerciseTypes.RESET }),
    tick: () => exerciseDispatch({ type: Lab1ExerciseTypes.TICK }),
    roundTick: () => exerciseDispatch({ type: Lab1ExerciseTypes.ROUND_TICK }),
    countdownTick: () =>
      exerciseDispatch({ type: Lab1ExerciseTypes.COUNTDOWN_TICK }),
    resetRoundTimer: () =>
      exerciseDispatch({ type: Lab1ExerciseTypes.RESET_ROUND_TIMER }),
    resetCountdownTimer: () =>
      exerciseDispatch({ type: Lab1ExerciseTypes.RESET_COUNTDOWN_TIMER }),
    updateScore: (score) =>
      exerciseDispatch({ type: Lab1ExerciseTypes.UPDATE_SCORE, score }),
    incrementCorrectAnswers: () =>
      exerciseDispatch({ type: Lab1ExerciseTypes.INCREMENT_CORRECT_ANSWERS }),
    incrementIncorrectAnswers: () =>
      exerciseDispatch({
        type: Lab1ExerciseTypes.INCREMENT_INCORRECT_ANSWERS,
      }),
    startNewRound: () =>
      exerciseDispatch({ type: Lab1ExerciseTypes.START_NEW_ROUND }),
    updateHintBoxStatus: (status) =>
      exerciseDispatch({
        type: Lab1ExerciseTypes.UPDATE_HINT_BOX_STATUS,
        status,
      }),
    updateHintUsed: (hintUsed) =>
      exerciseDispatch({ type: Lab1ExerciseTypes.UPDATE_HINT_USED, hintUsed }),
    revealBox: () => exerciseDispatch({ type: Lab1ExerciseTypes.REVEAL_BOX }),
    hideBox: () => exerciseDispatch({ type: Lab1ExerciseTypes.HIDE_BOX }),
    updateBox: (box) =>
      exerciseDispatch({ type: Lab1ExerciseTypes.UPDATE_BOX, box }),
    updateBoxStatus: (box, status) =>
      exerciseDispatch({
        type: Lab1ExerciseTypes.UPDATE_BOX_STATUS,
        box,
        status,
      }),
    toggleSound: () =>
      exerciseDispatch({ type: Lab1ExerciseTypes.TOGGLE_SOUND }),
    addResult: (result) =>
      exerciseDispatch({ type: Lab1ExerciseTypes.ADD_RESULT, result }),
    updateCongratulationMessage: (message) =>
      exerciseDispatch({
        type: Lab1ExerciseTypes.UPDATE_CONGRATULATION_MESSAGE,
        message,
      }),
  };

  /**
   * Actions related to repairing in Lab1.
   * @typedef {Object} repairActions
   * @property {Function} updateRepair - Updates the repair with the provided parameters.
   * @property {Function} updateTab - Updates the tab with the provided value.
   * @property {Function} openRepair - Opens the repair.
   * @property {Function} closeRepair - Closes the repair.
   */

  /**
   * Actions related to repairing in Lab1.
   * @type {repairActions}
   */
  const repairActions = {
    updateRepair: (
      availableMessage,
      unavailableMessage,
      availableBackgroundColor,
      unavailableBackgroundColor
    ) =>
      repairDispatch({
        type: Lab1RepairTypes.UPDATE_REPAIR,
        availableMessage,
        unavailableMessage,
        availableBackgroundColor,
        unavailableBackgroundColor,
      }),
    updateTab: (tab) =>
      repairDispatch({ type: Lab1RepairTypes.UPDATE_TAB, tab }),
    openRepair: () => repairDispatch({ type: Lab1RepairTypes.OPEN_REPAIR }),
    closeRepair: () => repairDispatch({ type: Lab1RepairTypes.CLOSE_REPAIR }),
  };

  /**
   * The value object that contains the state and actions for Lab1Context.
   *
   * @typedef {Object} value
   * @property {Object} state - The combined state object.
   * @property {Object} actions - The combined actions object.
   */
  const value = {
    state: { ...appState, ...repairState, ...exerciseState },
    actions: { ...appActions, ...repairActions, ...exerciseActions },
  };

  return (
    <Lab1StateContext.Provider value={value}>
      {children}
    </Lab1StateContext.Provider>
  );
};

Lab1ContextProvider.propTypes = {
  children: PropTypes.element,
};

export { Lab1ContextProvider, useLab1StateContext };
