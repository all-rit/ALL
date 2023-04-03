export const types = {
  UPDATE_POPUP: "@accessibility-lab/lab10/repair/update_popup",
  UPDATE_MOVE_LEFT_VALUE: "@accessibility-lab/lab10/repair/update_move_left_value",
  UPDATE_MOVE_RIGHT_VALUE: "@accessibility-lab/lab10/repair/update_move_right_value",
  UPDATE_REPAIR_ERROR: "@accessibility-lab/lab10/repair/update_repair_error",
  OPEN_REPAIR: "@accessibility-lab/lab7/repair/open_repair",
  CLOSE_REPAIR: "@accessibility-lab/lab7/repair/close_repair",

}

export const initialState = {
  leftValue: "",
  rightValue: "",
  repairError: null,
  repairVisible: false,
  changesApplied: false,
}

const RepairReducer = (state = initialState, action ) => {
  switch (action.type) {
    case types.UPDATE_MOVE_LEFT_VALUE:
      return {
        ...state,
        leftValue: action.leftValue,
      };
    case types.UPDATE_MOVE_RIGHT_VALUE:
      return {
        ...state,
        rightValue: action.rightValue,
      };
    case types.UPDATE_REPAIR_ERROR:
      return {
        ...state,
        repairError: action.repairError,
      };
    case types.OPEN_REPAIR:
      return {
        ...state,
        repairVisible: true,
      };
    case types.CLOSE_REPAIR:
      return {
        ...state,
        repairVisible: false,
      };
    case types.UPDATE_POPUP:
      return {
        ...state,
        popupMessage: action.message,
      }
    default:
      return state;
  }
};

export const actions = {
  updateMoveLeftValue: (leftValue) => ({
    type: types.UPDATE_MOVE_LEFT_VALUE,
    leftValue,
  }),
  updateMoveRightValue: (rightValue) => ({
    type: types.UPDATE_MOVE_RIGHT_VALUE,
    rightValue,
  }),
  updateRepairError: (repairError) => ({
    type: types.UPDATE_REPAIR_ERROR,
    repairError,
  }),
  updatePopup: (message) => ({ type: types.UPDATE_POPUP, message }),
  openRepair: () => ({ type: types.OPEN_REPAIR}),
  closeRepair: () => ({ type: types.CLOSE_REPAIR}),
};

export default RepairReducer;