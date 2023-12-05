import { EXERCISE_IDLE } from "src/constants/index";

export const types = {
  LOGIN: "@accessibility-lab/login",
  UPDATE_USER: "@accessibility-lab/update_user",
  SET_LAB: "@accessibility-lab/lab",
  SET_BODY: "@accessibility-lab/app/set_body",
  UPDATE_USER_STATE: "@accessibility-lab/update_user_state",
};

export const initialState = {
  userState: EXERCISE_IDLE,
  main: {
    user: null,
    lab: 0,
    body: 0,
  },
};

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
    default:
      return state;
  }
};
