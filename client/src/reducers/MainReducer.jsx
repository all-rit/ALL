export const types = {
  LOGIN: "@accessibility-lab/login",
  UPDATE_USER: "@accessibility-lab/update_user",
  SET_LAB: "@accessibility-lab/lab",
  SET_BODY: "@accessibility-lab/app/set_body",
  SET_IS_IMAGINE: "@accessibility-lab/isImagine",
  SHOW_SNACKBAR: "@accessibility-lab/showSnackbar",
  HIDE_SNACKBAR: "@accessibility-lab/hideSnackbar",
  DEV_LOGIN: "@accessibility-lab/developmentLogin",
};

export const initialState = {
  user: null,
  lab: 99,
  body: 0,
  isImagine: false,
  snackbar: {
    open: false,
    message: "",
    notificationType: "",
  },
};

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BODY:
      return {
        ...state,
        body: action.body,
      };
    case types.UPDATE_USER:
      return {
        ...state,
        user: action.user,
      };
    case types.SET_LAB:
      return {
        ...state,
        lab: action.lab,
      };
    case types.SET_IS_IMAGINE:
      return {
        ...state,
        isImagine: action.isImagine,
      };
    case types.SHOW_SNACKBAR:
      return {
        ...state,
        snackbar: {
          open: true,
          message: action.payload.message,
          notificationType: action.payload.notificationType,
        },
      };
    case types.HIDE_SNACKBAR:
      return {
        ...state,
        snackbar: {
          open: false,
          message: "",
        },
      };
    default:
      return state;
  }
};

export const actions = {
  setBody: (body) => ({ type: types.SET_BODY, body }),
  login: () => ({ type: types.LOGIN }),
  developmentLogin: (user) => ({ type: types.LOGIN, user }),
  setLab: (lab) => ({ type: types.SET_LAB, lab }),
  updateUser: (user) => ({ type: types.UPDATE_USER, user }),
  setIsImagine: (isImagine) => ({ type: types.SET_IS_IMAGINE, isImagine }),
  showSnackbar: (message, notificationType) => ({
    type: types.SHOW_SNACKBAR,
    message,
    notificationType,
  }),
  hideSnackbar: () => ({ types: types.HIDE_SNACKBAR }),
};

export default MainReducer;
