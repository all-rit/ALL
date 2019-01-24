import {
  UPDATE_CODE,
  RESET_CODE,
  UPDATE_CODE_EDITOR_STATUS
} from './CodeEditorConstants';

const initialState = {
  firstRow: '',
  secondRow: '',
  thirdRow: '',
  fourthRow: '',
  fifthRow: '',
  codeEditorOpen: false
};

export const CodeEditorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CODE:
      return {
        ...state,
        firstRow: action.firstRow,
        secondRow: action.secondRow,
        thirdRow: action.thirdRow,
        fourthRow: action.fourthRow,
        fifthRow: action.fifthRow
      };
    
    case RESET_CODE:
      return initialState;
    
    case UPDATE_CODE_EDITOR_STATUS:
      return {
        ...state,
        codeEditorOpen: action.status
      };

    default:
      return state;
  }
};