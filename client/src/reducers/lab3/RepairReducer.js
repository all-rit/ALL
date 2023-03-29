export const types = {
  UPDATE_REPAIR: "@accessibility-lab/lab3/repair/update_repair",
  UPDATE_TAB: "@accessibility-lab/lab3/repair/update_tab",
  OPEN_REPAIR: "@accessibility-lab/lab3/repair/open_repair",
  CLOSE_REPAIR: "@accessibility-lab/lab3/repair/close_repair",
  UPDATE_REPAIR_ERROR: "@accessibility-lab/lab3/repair/update_repair_error"
};

export const initialState = {
  cowAltValue: "",
  carAltValue: "",
  burgerAltValue: "",
  catAltValue: "",
  currentTab: 1,
  repairVisible: false,
  changesApplied: false,
  repairError: false,
};
const RepairReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_REPAIR:
      return {
        ...state,
        cowAltValue: action.cowAltValue,
        carAltValue: action.carAltValue,
        burgerAltValue: action.burgerAltValue,
        catAltValue: action.catAltValue,
        changesApplied: true,
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

    case types.UPDATE_REPAIR_ERROR:
      return {
        ...state,
        repairError: action.repairError,
      };

    case types.CLOSE_REPAIR:
      return {
        ...state,
        repairVisible: false,
      };

    default:
      return state;
  }
};

export const actions = {
  updateRepairError: (repairError) => ({type:types.UPDATE_REPAIR_ERROR, repairError}),
  updateRepair: (cowAltValue, carAltValue, burgerAltValue, catAltValue) => ({
    type: types.UPDATE_REPAIR,
    cowAltValue,
    carAltValue,
    burgerAltValue,
    catAltValue,
  }),
  updateTab: (tab) => ({ type: types.UPDATE_TAB, tab }),
  openRepair: () => ({ type: types.OPEN_REPAIR }),
  closeRepair: () => ({ type: types.CLOSE_REPAIR }),
};

export default RepairReducer;
