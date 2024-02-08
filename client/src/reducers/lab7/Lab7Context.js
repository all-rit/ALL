import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import {
  AppReducer as Lab7AppReducer,
  initialState as Lab7AppInititalState,
  types as Lab7AppTypes,
} from "./AppReducer";
import {
  RepairReducer as Lab7RepairReducer,
  initialState as Lab7RepairInititalState,
  types as Lab7RepairTypes,
} from "./RepairReducer";
import {
    ExerciseReducer as Lab7ExerciseReducer,
    initialState as Lab7ExerciseInititalState,
    types as Lab7ExerciseTypes,
  } from "./ExerciseReducer";


const Lab7StateContext = createContext({
  state: { ...Lab7AppInititalState, ...Lab7RepairInititalState, ...Lab7ExerciseInititalState },
  actions: {
    enableEnd: () => {},
    reset: () => {},
    incrementScore: () => {},
    incrementIntrusions: () => {},
    incrementProtected: () => {},
    incrementIncorrect: () => {},
    startNewRound: () => {},
    updateThreatLevel: () => {},
    addResults: () => {},
    updateRedirectURL: () => {},
    setModal: () => {},
    setMessage: () => {},
    updatePopup: () => {},
    openInstructions: () => {},
    closeInstructions: () => {},
    resetRepair: () => {},
    undoRepairChanges: () => {},
    updateRepairEquation: () => {},
    updateRewardValue: () => {},
    updateCostValue: () => {},
    updateRewardError: () => {},
    updateCostError: () => {},
    updateRepairError: () => {},
    updateTab: () => {},
    openRepair: () => {},
    closeRepair: () => {},
    updateMakeDecision: () => {},
    setRepairId: () => {},
  },
});

/**
 * Custom hook that provides access to the Lab7StateContext.
 * @returns {Object} The Lab7StateContext object.
 * @throws {Error} If used outside of Lab7ContextProvider.
 */
const useLab7StateContext = () => {
  const context = useContext(Lab7StateContext);

  if (context === undefined) {
    throw new Error(
      "useLab7StateContext must be used within Lab7ContextProvider"
    );
  }

  return context;
};

/**
 * @file Lab7Context.js
 * @desc This file contains the implementation of the Lab7ContextProvider component, which is responsible for managing the state and actions related to Lab7 in the application.
 */
const Lab7ContextProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(
    Lab7AppReducer,
    Lab7AppInititalState
  );
  const [repairState, repairDispatch] = useReducer(
    Lab7RepairReducer,
    Lab7RepairInititalState
  );
  const [exerciseState, exerciseDispatch] = useReducer(
    Lab7ExerciseReducer,
    Lab7ExerciseInititalState
  );

  
  const appActions = {
    updatePopup: (message) => appDispatch({ type: Lab7AppTypes.UPDATE_POPUP, message }),
    openInstructions: () => appDispatch({ type: Lab7AppTypes.OPEN_INSTRUCTIONS }),
    closeInstructions: () => appDispatch({ type: Lab7AppTypes.CLOSE_INSTRUCTIONS }),
  };

  
  const repairActions = {
    resetRepair: () => repairDispatch({ type: Lab7RepairTypes.RESET_REPAIR }),
    undoRepairChanges: () => repairDispatch({ type: Lab7RepairTypes.UNDO_REPAIR_CHANGES }),
    updateRepairEquation: (rewardValue, costValue) => repairDispatch({
        type: Lab7RepairTypes.UPDATE_REPAIR_EQUATION,
        rewardValue,
        costValue,
    }),
    updateRewardValue: (rewardValue) => repairDispatch({
        type: Lab7RepairTypes.UPDATE_REWARD_VALUE,
        rewardValue,
    }),
    updateCostValue: (costValue) => repairDispatch({
        type: Lab7RepairTypes.UPDATE_COST_VALUE,
        costValue,
    }),
    updateRewardError: (rewardError) => repairDispatch({
        type: Lab7RepairTypes.UPDATE_REWARD_ERROR,
        rewardError,
    }),
    updateCostError: (costError) => repairDispatch({
        type: Lab7RepairTypes.UPDATE_COST_ERROR,
        costError,
    }),
    updateRepairError: (repairError) => repairDispatch({
        type: Lab7RepairTypes.UPDATE_REPAIR_ERROR,
        repairError,
    }),
    updateTab: (tab) => repairDispatch({ type: Lab7RepairTypes.UPDATE_TAB, tab }),
    openRepair: () => repairDispatch({ type: Lab7RepairTypes.OPEN_REPAIR }),
    closeRepair: () => repairDispatch({ type: Lab7RepairTypes.CLOSE_REPAIR }),
    updateMakeDecision: (func) => repairDispatch({ type: Lab7RepairTypes.UPDATE_MAKE_DECISION, func }),
    setRepairId: (repairId) => repairDispatch({ type: Lab7RepairTypes.SET_REPAIR_ID, repairId }),
  };

  const exerciseActions = {
    enableEnd: () => exerciseDispatch({ type: Lab7ExerciseTypes.ENABLE_END }),
    reset: () => exerciseDispatch({ type: Lab7ExerciseTypes.RESET }),
    incrementScore: (score) => exerciseDispatch({ type: Lab7ExerciseTypes.INCREMENT_SCORE, score }),
    incrementIntrusions: () => exerciseDispatch({ type: Lab7ExerciseTypes.INCREMENT_INTRUSIONS }),
    incrementProtected: () => exerciseDispatch({ type: Lab7ExerciseTypes.INCREMENT_PROTECTED }),
    incrementIncorrect: () => exerciseDispatch({ type: Lab7ExerciseTypes.INCREMENT_INCORRECT }),
    startNewRound: () => exerciseDispatch({ type: Lab7ExerciseTypes.START_NEW_ROUND }),
    updateThreatLevel: (threatLvl) => exerciseDispatch({
        type: Lab7ExerciseTypes.UPDATE_THREAT_LEVEL,
        threatLvl,
    }),
    addResults: (results) => exerciseDispatch({ type: Lab7ExerciseTypes.ADD_RESULTS, results }),
    updateRedirectURL: (url) => exerciseDispatch({ type: Lab7ExerciseTypes.UPDATE_REDIRECT_URL, url }),
    setModal: (isModalOpen) => exerciseDispatch({ type: Lab7ExerciseTypes.SET_MODAL, isModalOpen }),
    setMessage: (message) => exerciseDispatch({ type: Lab7ExerciseTypes.SET_MESSAGE, message }),
  };

  
  const value = {
    state: { ...appState, ...repairState, ...exerciseState },
    actions: { ...appActions, ...repairActions, ...exerciseActions },
  };

  return (
    <Lab7StateContext.Provider value={value}>
      {children}
    </Lab7StateContext.Provider>
  );
};

Lab7ContextProvider.propTypes = {
    children: PropTypes.element,
};
  
export { Lab7ContextProvider, useLab7StateContext};