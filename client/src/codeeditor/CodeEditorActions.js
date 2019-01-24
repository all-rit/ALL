import {
  UPDATE_CODE,
  RESET_CODE,
  UPDATE_CODE_EDITOR_STATUS
} from './CodeEditorConstants';

export const updateCode = (firstRow, secondRow, thirdRow, fourthRow, fifthRow) => {
  return {
    type: UPDATE_CODE,
    firstRow,
    secondRow,
    thirdRow,
    fourthRow,
    fifthRow
  };
};

export const resetCode = () => {
  return {
    type: RESET_CODE
  };
};

export const updateCodeEditorStatus = (status) => {
  return {
    type: UPDATE_CODE_EDITOR_STATUS,
    status
  };
};
