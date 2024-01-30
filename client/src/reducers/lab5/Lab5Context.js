import React, { createContext, useContext, useReducer } from "react";
import { PropTypes } from "prop-types";
import {AppReducer as Lab5AppReducer, initialState as Lab5AppInititalState, types as Lab5AppTypes} from "./AppReducer";
import {RepairReducer as Lab5RepairReducer, initialState as Lab5RepairInititalState, types as Lab5RepairTypes} from "./RepairReducer";

/**
 * Context object for Lab5 state and actions.
 * @typedef {Object} Lab5StateContext
 * @property {Object} state - The initial state for Lab5.
 * @property {Object} actions - The actions available for Lab5.
 * @property {Function} actions.updatePopup - Updates the popup.
 * @property {Function} actions.openInstructions - Opens the instructions.
 * @property {Function} actions.closeInstructions - Closes the instructions.
 * @property {Function} actions.updateState - Updates the state.
 * @property {Function} actions.enableEnd - Enables the end.
 * @property {Function} actions.updateRepairPageLayout - Updates the repair page layout.
 * @property {Function} actions.updateRepairForm - Updates the repair form.
 * @property {Function} actions.updateRepairNotification - Updates the repair notification.
 * @property {Function} actions.updateTab - Updates the tab.
 * @property {Function} actions.openRepair - Opens the repair.
 * @property {Function} actions.closeRepair - Closes the repair.
 */
const Lab5StateContext = createContext({
    state: {...Lab5AppInititalState, ...Lab5RepairInititalState},
    actions: {
      updatePopup: () => {},
      openInstructions: () => {},
      closeInstructions: () => {},
      updateRepairPageLayout: () => {},
      updateRepairForm: () => {},
      updateRepairNotification: () => {},
      updateTab: () => {},
      openRepair: () => {},
      closeRepair: () => {},
    },
});

/**
 * Custom hook that returns the Lab5StateContext.
 * @returns {Object} The Lab5StateContext object.
 * @throws {Error} If used outside of Lab5ContextProvider.
 */
const useLab5StateContext = () => {
  const context = useContext(Lab5StateContext);

  if (context === undefined) {
    throw new Error(
      "useLab5StateContext must be used within Lab5ContextProvider"
    );
  }

  return context;
};

/**
 * Lab5ContextProvider component.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components.
 * @returns {React.ReactNode} The rendered component.
 */
export const Lab5ContextProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(Lab5AppReducer, Lab5AppInititalState);
  const [repairState, repairDispatch] = useReducer(Lab5RepairReducer, Lab5RepairInititalState);


  /**
   * Actions for Lab5App.
   * @typedef {Object} appActions
   * @property {function} updatePopup - Updates the popup with the given message.
   * @property {function} openInstructions - Opens the instructions.
   * @property {function} closeInstructions - Closes the instructions.
   */
  const appActions = {
    updatePopup: (message) => appDispatch({ type: Lab5AppTypes.UPDATE_POPUP, message }),
    openInstructions: () => appDispatch({ type: Lab5AppTypes.OPEN_INSTRUCTIONS }),
    closeInstructions: () => appDispatch({ type: Lab5AppTypes.CLOSE_INSTRUCTIONS }),
  };


  /**
   * Object containing action functions for updating the repair page layout, form, notification, tab, and repair state.
   * @typedef {Object} repairActions
   * @property {Function} updateRepairPageLayout - Function to update the repair page layout.
   * @property {Function} updateRepairForm - Function to update the repair form.
   * @property {Function} updateRepairNotification - Function to update the repair notification.
   * @property {Function} updateTab - Function to update the active tab.
   * @property {Function} openRepair - Function to open the repair.
   * @property {Function} closeRepair - Function to close the repair.
   */
  const repairActions = {
    updateRepairPageLayout: (
      h1value,
      ulvalue,
      classvalue,
      fontvalue,
      fontfamilyvalue
    ) => repairDispatch({
      type: Lab5RepairTypes.UPDATE_REPAIR_PAGELAYOUT,
      h1value,
      ulvalue,
      classvalue,
      fontvalue,
      fontfamilyvalue,
    }),
    updateRepairForm: (errorNotification, successNotification, borderColor) => repairDispatch({
      type: Lab5RepairTypes.UPDATE_REPAIR_FORM,
      errorNotification,
      successNotification,
      borderColor,
    }),
    updateRepairNotification: (fontsizevalue, timeout) => repairDispatch({
      type: Lab5RepairTypes.UPDATE_REPAIR_NOTIFICATION,
      fontsizevalue,
      timeout,
    }),
    updateTab: (tab) => repairDispatch({ type: Lab5RepairTypes.UPDATE_TAB, tab }),
    openRepair: () => repairDispatch({ type: Lab5RepairTypes.OPEN_REPAIR }),
    closeRepair: () => repairDispatch({ type: Lab5RepairTypes.CLOSE_REPAIR }),
  };

  /**
   * The value object containing the state and actions for Lab5Context.
   * @typedef {Object} Lab5ContextValue
   * @property {Object} state - The combined state object.
   * @property {Object} actions - The combined actions object.
   */
  const value = {
    state: { ...appState, ...repairState},
    actions: { ...appActions, ...repairActions },
  };

  return (
    <Lab5StateContext.Provider value={value}>
      {children}
    </Lab5StateContext.Provider>
  );
}

Lab5ContextProvider.propTypes = {
  children: PropTypes.element,
};

export default useLab5StateContext;