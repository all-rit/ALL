export const types = {
  LOGIN: "@accessibility-lab/audio-cue/app/login",
  LOGOUT: "@accessibility-lab/app/logout",
  UPDATE_USER: "@accessibility-lab/audio-cue/app/update_user",
  UPDATE_POPUP: "@accessibility-lab/audio-cue/app/update_popup",
  OPEN_INSTRUCTIONS: "@accessibility-lab/audio-cue/app/open_instructions",
  CLOSE_INSTRUCTIONS: "@accessibility-lab/audio-cue/app/close_instructions"
};

export const initialState = {
  user: null,
  popupMessage: "",
  instructionsVisible: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER:
      return {
        ...state,
        user: action.user
      };

    case types.UPDATE_POPUP:
      return {
        ...state,
        popupMessage: action.message
      };

    case types.OPEN_INSTRUCTIONS:
      return {
        ...state,
        instructionsVisible: true
      };

    case types.CLOSE_INSTRUCTIONS:
      return {
        ...state,
        instructionsVisible: false
      };
    case types.LOGOUT:
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};

export const actions = {
  login: () => ({ type: types.LOGIN }),
  logout: () => ({ type: types.LOGOUT }),
  updateUser: user => ({ type: types.UPDATE_USER, user }),
  updatePopup: message => ({ type: types.UPDATE_POPUP, message }),
  openInstructions: () => ({ type: types.OPEN_INSTRUCTIONS }),
  closeInstructions: () => ({ type: types.CLOSE_INSTRUCTIONS })
};
