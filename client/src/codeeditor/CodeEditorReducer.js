import {
  UPDATE_CODE,
  UPDATE_CORRECT_BACKGROUND,
  UPDATE_INCORRECT_BACKGROUND,
  RESET_CODE,
  UPDATE_CODE_EDITOR_STATUS,
  UPDATE_TAB
} from './CodeEditorConstants';

const initialState = {
  correctMessage: "?",
  incorrectMessage: "?",
  correctBackgroundColor: "#FFFFFF",
  incorrectBackgroundColor: "#FFFFFF",
  currentTab: 1,
  codeEditorOpen: false
};

export const CodeEditorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CODE:
      return {
        ...state,
        correctMessage: action.correctMessage,
        incorrectMessage: action.incorrectMessage
      };

    case UPDATE_CORRECT_BACKGROUND:
      return {
        ...state,
        correctBackgroundColor: action.color
      };

    case UPDATE_INCORRECT_BACKGROUND:
      return {
        ...state,
        incorrectBackgroundColor: action.color
      };

    case RESET_CODE:
      return initialState;

    case UPDATE_CODE_EDITOR_STATUS:
      return {
        ...state,
        codeEditorOpen: action.status
      };

    case UPDATE_TAB:
      return {
        ...state,
        currentTab: action.number
      };

    default:
      return state;
  }
};