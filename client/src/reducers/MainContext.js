import React, { createContext, useContext, useReducer } from "react";
import {
  MainReducerForContext,
  initialState,
  types,
} from "./MainReducerForContext";
import { PropTypes } from "prop-types";
import AuthService from "src/services/AuthService";

/**
 * MainStateContext is a context object created using createContext() function.
 * It provides the initial state and actions for the main context of the application.
 *
 * @type {React.Context}
 */
const MainStateContext = createContext({
  state: initialState,
  actions: {
    setBody: () => {},
    login: () => {},
    setLab: () => {},
    updateUser: () => {},
    updateUserState: () => {},
  },
});

/**
 * Custom hook that provides access to the main state context.
 * @returns {Object} The main state context.
 * @throws {Error} If used outside of MainStateContextProvider.
 */
const useMainStateContext = () => {
  const context = useContext(MainStateContext);

  if (context === undefined) {
    throw new Error(
      "useMainStateContext must be used within MainStateContextProvider"
    );
  }

  return context;
};

/**
 * MainContextProvider component that provides the main context for the application.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {ReactNode} The rendered component.
 */
export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducerForContext, initialState);

  /**
   * Actions object containing various action functions.
   * @typedef {Object} Actions
   * @property {Function} setBody - Sets the body value in the state.
   * @property {Function} login - Performs the login action.
   * @property {Function} setLab - Sets the lab value in the state.
   * @property {Function} updateUser - Updates the user value in the state.
   * @property {Function} updateUserState - Updates the user state value in the state.
   */
  const actions = {
    setBody: (newBody) =>
      dispatch({ type: types.SET_BODY, payload: { body: newBody } }),
    login: async () => {
      try {
        const user = await AuthService.getUser();
        dispatch({ type: types.LOGIN });
        // If the login was successful, perform another action
        if (user) {
          dispatch({ type: types.UPDATE_USER, payload: { user: user } });
        }
      } catch (error) {
        console.error(error);
      }
    },
    setLab: (newLab) =>
      dispatch({ type: types.SET_LAB, payload: { lab: newLab } }),
    updateUser: (newUser) =>
      dispatch({ type: types.UPDATE_USER, payload: { user: newUser } }),
    updateUserState: (newUserState) =>
      dispatch({
        type: types.UPDATE_USER_STATE,
        payload: { userState: newUserState },
      }),
  };

  /**
   * Represents the value of the MainContext.
   * @typedef {Object} MainContextValue
   * @property {Object} state - The state object.
   * @property {Object} actions - The actions object.
   */
  const value = {
    state: { ...state },
    actions: { ...actions },
  };

  return (
    <MainStateContext.Provider value={value}>
      {children}
    </MainStateContext.Provider>
  );
};

MainContextProvider.propTypes = {
  children: PropTypes.element,
};

export default useMainStateContext;
