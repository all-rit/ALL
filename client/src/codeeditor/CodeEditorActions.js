import {
  UPDATE_CODE,
  RESET_CODE
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
