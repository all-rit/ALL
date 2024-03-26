const types = {
  UPDATE_POPUP: "@accessibility-lab/audio-cue/app/update_popup",
  OPEN_INSTRUCTIONS: "@accessibility-lab/audio-cue/app/open_instructions",
  CLOSE_INSTRUCTIONS: "@accessibility-lab/audio-cue/app/close_instructions",
};

const initialState = {
  popupMessage: "",
  instructionsVisible: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_POPUP:
      return {
        ...state,
        popupMessage: action.message,
      };

    case types.OPEN_INSTRUCTIONS:
      return {
        ...state,
        instructionsVisible: true,
      };

    case types.CLOSE_INSTRUCTIONS:
      return {
        ...state,
        instructionsVisible: false,
      };

    default:
      return state;
  }
};

export { AppReducer, initialState, types };
