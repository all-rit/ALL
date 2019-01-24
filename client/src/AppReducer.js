import { LOGIN } from './AppConstants';

const initialState = {
  user: {
    UserID: null,
    FirstName: "",
    Nickname: "",
    Admin: false
  }
};

export const AppReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user
      };
    
      default:
        return state;
  }
};
