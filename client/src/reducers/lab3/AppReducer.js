export const types = {
    LOGIN: "@accessibility-lab/app/login",
    LOGOUT: "@accessibility-lab/app/logout",
    UPDATE_USER: "@accessibility-lab/app/update_user",
    SET_BODY: '@accessibility-lab/app/set_body',
    UPDATE_POPUP: '@accessibility-lab/audio-cue/app/update_popup',
  
  };
  
  export const initialState = {
    user: null,
    body: 0,
    popupMessage: ''
  };
  
  export const AppReducer =  (state = initialState, action) => {
    switch (action.type) {
      case types.UPDATE_USER:
        return {
          ...state,
          user: action.user
        };
      case types.SET_BODY:
        return {
          ...state,
          body: action.body
        };
      case types.LOGOUT:
        return {
          ...state,
          user: action.user
        };
      case types.UPDATE_POPUP:
        return {
          ...state,
          popupMessage: action.message
        };
      default:
        return state;
    }
  };
  
  export const actions = {
    login: () => ({ type: types.LOGIN }),
    logout: () => ({ type: types.LOGOUT }),
    setBody: (body) => ({type: types.SET_BODY, body}),
    updateUser: user => ({ type: types.UPDATE_USER, user }),
    updatePopup: (message) => ({ type: types.UPDATE_POPUP, message })
  };
  