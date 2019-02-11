import {
  UPDATE_CODE,
  RESET_CODE,
  UPDATE_CODE_EDITOR_STATUS,

  CODE_BLOCK_ANSWER1,
  CODE_BLOCK_ANSWER2,
  CODE_BLOCK_ANSWER3
} from './CodeEditorConstants';

const initialState = {
  firstRow: CODE_BLOCK_ANSWER1,
  secondRow: CODE_BLOCK_ANSWER2,
  thirdRow: CODE_BLOCK_ANSWER3,
  codeEditorOpen: false
};

export const CodeEditorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CODE:
      return {
        ...state,
        firstRow: action.firstRow,
        secondRow: action.secondRow,
        thirdRow: action.thirdRow
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