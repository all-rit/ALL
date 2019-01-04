import {
  UPDATE_CODE,
  RESET_CODE
} from './CodeEditorConstants';

const initialState = {
  firstRow: '',
  secondRow: '',
  thirdRow: '',
  fourthRow: '',
  fifthRow: ''
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

    default:
      return state;
  }
};