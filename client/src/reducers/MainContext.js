import React, { createContext, useContext, useReducer } from "react";
import {
  MainReducerForContext,
  initialState,
  types,
} from "./MainReducerForContext";
import { PropTypes } from "prop-types";
import AuthService from "src/services/AuthService";

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

const useMainStateContext = () => {
  const context = useContext(MainStateContext);

  if (context === undefined) {
    throw new Error(
      "useMainStateContext must be used within MainStateContextProvider"
    );
  }

  return context;
};

export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducerForContext, initialState);
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
