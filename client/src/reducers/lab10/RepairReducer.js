export const types = {
  UPDATE_POPUP: "@accessibility-lab/lab10/repair/update_popup",
  UPDATE_MOVE_LEFT_VALUE:
    "@accessibility-lab/lab10/repair/update_move_left_value",
  UPDATE_MOVE_RIGHT_VALUE:
    "@accessibility-lab/lab10/repair/update_move_right_value",
  UNDO_REPAIR_CHANGES: "@accessibility-lab/lab10/repair/undo_repair_changes",
  UPDATE_TIME_VALUE: "@accessibility-lab/lab10/repair/update_time_value",
  UPDATE_TIME_ERROR: "@accessibility-lab/lab10/repair/update_time_error",
  UPDATE_REPAIR_ERROR: "@accessibility-lab/lab10/repair/update_repair_error",
  OPEN_REPAIR: "@accessibility-lab/lab7/repair/open_repair",
  CLOSE_REPAIR: "@accessibility-lab/lab7/repair/close_repair",
  UPDATE_CHANGES_APPLIED:
    "@accessibility-lab/lab10/repair/update_changes_applied",
  UPDATE_LEFT_ERROR: "@accessibility-lab/lab10/repair/update_left_error",
  UPDATE_RIGHT_ERROR: "@accessibility-lab/lab10/repair/update_right_error",
  UPDATE_TAB: "@accessibility-lab/lab10/repair/update_tab",
    RESET_REPAIR: "@accessibility-lab/lab10/repair/reset_repair"
};

export const initialState = {
  leftValue: "",
  rightValue: "",
  leftError: "",
  rightError: "",
  timeValue: "",
  popupMessage: "",
  timeError: null,
  repairError: false,
  repairVisible: false,
  changesApplied: false,
};

const RepairReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_REPAIR:
      return {
        ...initialState,
      };
    case types.UNDO_REPAIR_CHANGES:
      return {
        ...state,
        changesApplied: false,
      };
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
    case types.UPDATE_TIME_VALUE:
      return {
        ...state,
        timeValue: action.timeValue,
      };
    case types.UPDATE_TIME_ERROR:
      return {
        ...state,
        timeError: action.timeError,
      };
    case types.UPDATE_REPAIR_ERROR:
      return {
        ...state,
        repairError: action.repairError,
      };
    case types.UPDATE_LEFT_ERROR:
      return {
        ...state,
        leftError: action.leftError,
      };
    case types.UPDATE_RIGHT_ERROR:
      return {
        ...state,
        rightError: action.rightError,
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
    case types.UPDATE_TAB:
      return {
        ...state,
        currentTab: action.tab,
      };
    case types.UPDATE_POPUP:
      return {
        ...state,
        popupMessage: action.message,
      };

    case types.SET_REPAIR_ID:
      return {
        ...state,
        repairId: action.repairId,
      };
    case types.UPDATE_CHANGES_APPLIED:
      return {
        ...state,
        changesApplied: action.changesApplied,
      };
    default:
      return state;
  }
};

export const actions = {
  undoRepairChanges: () => ({ type: types.UNDO_REPAIR_CHANGES }),
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
  updateLeftError: (leftError) => ({
    type: types.UPDATE_LEFT_ERROR,
    leftError,
  }),
  updateRightError: (rightError) => ({
    type: types.UPDATE_RIGHT_ERROR,
    rightError,
  }),
  updateTimeValue: (timeValue) => ({
    type: types.UPDATE_TIME_VALUE,
    timeValue,
  }),
  updateChangesApplied: (changesApplied) => ({
    type: types.UPDATE_CHANGES_APPLIED,
    changesApplied,
  }),
  updatePopup: (message) => ({ type: types.UPDATE_POPUP, message }),
  openRepair: () => ({ type: types.OPEN_REPAIR }),
  closeRepair: () => ({ type: types.CLOSE_REPAIR }),
  setRepairId: (repairId) => ({ type: types.SET_REPAIR_ID, repairId }),
};

export default RepairReducer;
