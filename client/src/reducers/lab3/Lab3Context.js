import React, { createContext, useContext, useReducer } from "react";
import { PropTypes } from "prop-types";
import {
  AppReducer as Lab3AppReducer,
  initialState as Lab3AppInititalState,
  types as Lab3AppTypes,
} from "./AppReducer";
import {
  RepairReducer as Lab3RepairReducer,
  initialState as Lab3RepairInititalState,
  types as Lab3RepairTypes,
} from "./RepairReducer";

/**
 * Context object for Lab3 state and actions.
 * @typedef {Object} Lab3StateContext
 * @property {Object} state - The initial state for Lab3.
 * @property {Object} actions - The actions available for Lab3.
 * @property {Function} actions.updatePopup - Function to update the popup.
 * @property {Function} actions.updateRepairError - Function to update the repair error.
 * @property {Function} actions.updateTab - Function to update the tab.
 * @property {Function} actions.openRepair - Function to open the repair.
 * @property {Function} actions.closeRepair - Function to close the repair.
 */
const Lab3StateContext = createContext({
  state: { ...Lab3AppInititalState, ...Lab3RepairInititalState },
  actions: {
    updatePopup: () => {},
    updateRepairError: () => {},
    updateTab: () => {},
    openRepair: () => {},
    closeRepair: () => {},
  },
});

/**
 * Custom hook that provides access to the Lab3StateContext.
 * @returns {Object} The Lab3StateContext object.
 * @throws {Error} If used outside of Lab3ContextProvider.
 */
const useLab3StateContext = () => {
  const context = useContext(Lab3StateContext);

  if (context === undefined) {
    throw new Error(
      "useLab3StateContext must be used within Lab3ContextProvider"
    );
  }

  return context;
};

/**
 * @file Lab3Context.js
 * @desc This file contains the implementation of the Lab3ContextProvider component, which is responsible for managing the state and actions related to Lab3 in the application.
 */
export const Lab3ContextProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(
    Lab3AppReducer,
    Lab3AppInititalState
  );
  const [repairState, repairDispatch] = useReducer(
    Lab3RepairReducer,
    Lab3RepairInititalState
  );


/**
 * Object containing actions for Lab3Context.
 * @typedef {Object} appActions
 * @property {Function} updatePopup - Action to update the popup with a message.
 * @param {string} message - The message to be displayed in the popup.
 */
  const appActions = {
    updatePopup: (message) => appDispatch({ type: Lab3AppTypes.UPDATE_POPUP, message }),
  };

/**
 * Object containing actions related to repair in Lab3Context.
 * @typedef {Object} RepairActions
 * @property {function} updateRepairError - Action to update repair error.
 * @property {function} updateRepair - Action to update repair values.
 * @property {function} updateTab - Action to update tab.
 * @property {function} openRepair - Action to open repair.
 * @property {function} closeRepair - Action to close repair.
 */
  const repairActions = {
    updateRepairError: (repairError) => repairDispatch({
        type: Lab3RepairTypes.UPDATE_REPAIR_ERROR,
        repairError,
      }),
      updateRepair: (cowAltValue, carAltValue, burgerAltValue, catAltValue) => repairDispatch({
        type: Lab3RepairTypes.UPDATE_REPAIR,
        cowAltValue,
        carAltValue,
        burgerAltValue,
        catAltValue,
      }),
      updateTab: (tab) => repairDispatch({ type: Lab3RepairTypes.UPDATE_TAB, tab }),
      openRepair: () => repairDispatch({ type: Lab3RepairTypes.OPEN_REPAIR }),
      closeRepair: () => repairDispatch({ type: Lab3RepairTypes.CLOSE_REPAIR }),
  };

/**
 * The value object containing the state and actions for Lab3Context.
 * @typedef {Object} Lab3ContextValue
 * @property {Object} state - The combined state of appState and repairState.
 * @property {Object} actions - The combined actions of appActions and repairActions.
 */
  const value = {
    state: { ...appState, ...repairState },
    actions: { ...appActions, ...repairActions },
  };

  return (
    <Lab3StateContext.Provider value={value}>
      {children}
    </Lab3StateContext.Provider>
  );
};

Lab3ContextProvider.propTypes = {
  children: PropTypes.element,
};

export default useLab3StateContext;