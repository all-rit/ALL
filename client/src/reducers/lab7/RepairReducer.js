export const types = {
  RESET_REPAIR: "@accessibility-lab/lab7/repair/reset_repair",
  UNDO_REPAIR_CHANGES: "@accessibility-lab/lab7/repair/undo_repair_changes",
  UPDATE_REPAIR_EQUATION:
    "@accessibility-lab/lab7/repair/update_repair_equation",
  UPDATE_REWARD_VALUE: "@accessibility-lab/lab7/repair/update_reward_value",
  UPDATE_COST_VALUE: "@accessibility-lab/lab7/repair/update_cost_value",
  UPDATE_REPAIR_ERROR: "@accessibility-lab/lab7/repair/update_repair_error",
  UPDATE_TAB: "@accessibility-lab/lab7/repair/update_tab",
  OPEN_REPAIR: "@accessibility-lab/lab7/repair/open_repair",
  CLOSE_REPAIR: "@accessibility-lab/lab7/repair/close_repair",
  UPDATE_MAKE_DECISION: "@accessibility-lab/lab7/repair/update_make_decision",
};

export const initialState = {
  rewardValue: null,
  costValue: null,

  repairError: null,

  repairVisible: false,
  changesApplied: false,
  makeDecision: null,
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
    case types.UPDATE_REPAIR_EQUATION:
      return {
        ...state,
        rewardValue: action.rewardValue,
        costValue: action.costValue,
        changesApplied: true,
      };
    case types.UPDATE_REWARD_VALUE:
      return {
        ...state,
        rewardValue: action.rewardValue,
      };
    case types.UPDATE_COST_VALUE:
      return {
        ...state,
        costValue: action.costValue,
      };
    case types.UPDATE_REPAIR_ERROR:
      return {
        ...state,
        repairError: action.repairError,
      };
    case types.UPDATE_TAB:
      return {
        ...state,
        currentTab: action.tab,
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
    case types.UPDATE_MAKE_DECISION:
      return {
        ...state,
        makeDecision: action.func,
      };
    default:
      return state;
  }
};

export const actions = {
  resetRepair: () => ({ type: types.RESET_REPAIR }),
  undoRepairChanges: () => ({ type: types.UNDO_REPAIR_CHANGES }),
  updateRepairEquation: (rewardValue, costValue) => ({
    type: types.UPDATE_REPAIR_EQUATION,
    rewardValue,
    costValue,
  }),
  updateRewardValue: (rewardValue) => ({
    type: types.UPDATE_REWARD_VALUE,
    rewardValue,
  }),
  updateCostValue: (costValue) => ({
    type: types.UPDATE_COST_VALUE,
    costValue,
  }),
  updateRepairError: (repairError) => ({
    type: types.UPDATE_REPAIR_ERROR,
    repairError,
  }),
  updateTab: (tab) => ({ type: types.UPDATE_TAB, tab }),
  openRepair: () => ({ type: types.OPEN_REPAIR }),
  closeRepair: () => ({ type: types.CLOSE_REPAIR }),
  updateMakeDecision: (func) => ({ type: types.UPDATE_MAKE_DECISION, func }),
};

export default RepairReducer;
