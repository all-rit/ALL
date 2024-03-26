const types = {
  UPDATE_REPAIR: "@accessibility-lab/audio-cue/repair/update_repair",
  UPDATE_TAB: "@accessibility-lab/audio-cue/repair/update_tab",
  OPEN_REPAIR: "@accessibility-lab/audio-cue/repair/open_repair",
  CLOSE_REPAIR: "@accessibility-lab/audio-cue/repair/close_repair",
};

const initialState = {
  availableMessage: "",
  unavailableMessage: "",
  availableBackgroundColor: "#FFFFFF",
  unavailableBackgroundColor: "#FFFFFF",
  currentTab: 1,
  repairVisible: false,
  changesApplied: false,
};

const RepairReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_REPAIR:
      return {
        ...state,
        availableMessage: action.availableMessage,
        unavailableMessage: action.unavailableMessage,
        availableBackgroundColor: action.availableBackgroundColor,
        unavailableBackgroundColor: action.unavailableBackgroundColor,
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

    case types.CLOSE_REPAIR:
      return {
        ...state,
        repairVisible: false,
      };

    default:
      return state;
  }
};

export { RepairReducer, initialState, types };
