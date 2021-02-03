export const types = {
    UPDATE_POPUP: '@accessibility-lab/audio-cue/app/update_popup',
  
  };
  
  export const initialState = {
    popupMessage: ''
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
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
    updatePopup: (message) => ({ type: types.UPDATE_POPUP, message })
  };
  