export const types = {
  UPDATE_POPUP: "@accessibility-lab/lab3/app/update_popup",
};

export const initialState = {
  popupMessage: "",
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_POPUP:
      return {
        ...state,
        popupMessage: action.message,
      };
    default:
      return state;
  }
};

export const actions = {
  updatePopup: (message) => ({ type: types.UPDATE_POPUP, message }),
};
export default AppReducer;
