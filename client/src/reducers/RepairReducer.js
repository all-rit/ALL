export const types = {
	UPDATE_REPAIR: '@accessibility-lab/audio-cue/repair/update_repair',
	UPDATE_TAB: '@accessibility-lab/audio-cue/repair/update_tab',
	OPEN_REPAIR: '@accessibility-lab/audio-cue/repair/open_repair',
	CLOSE_REPAIR: '@accessibility-lab/audio-cue/repair/close_repair'
};

export const initialState = {
	availableMessage: '', // change made
	unavailableMessage: '', // change made
	availableBackgroundColor: '#FFFFFF',
	unavailableBackgroundColor: '#FFFFFF',
	currentTab: 1,
	repairVisible: false,
	changesApplied: false,
	shake: false // change made
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_REPAIR:
			return {
				...state,
				availableMessage: action.availableMessage,
				unavailableMessage: action.unavailableMessage,
				availableBackgroundColor: action.availableBackgroundColor,
				unavailableBackgroundColor: action.unavailableBackgroundColor,
				shake: action.shake, // change made (don't know what this does)
				changesApplied: true
			};

		case types.UPDATE_TAB:
			return {
				...state,
				currentTab: action.tab
			};

		case types.OPEN_REPAIR:
			return {
				...state,
				repairVisible: true
			};

		case types.CLOSE_REPAIR:
			return {
				...state,
				repairVisible: false
			};

		default:
			return state;
	}
};

export const actions = {
	updateRepair: (availableMessage, unavailableMessage, availableBackgroundColor, unavailableBackgroundColor, shake) => ({ // change made
		type: types.UPDATE_REPAIR,
		availableMessage,
		unavailableMessage,
		availableBackgroundColor,
		unavailableBackgroundColor,
		shake // change made
	}),
	updateTab: (tab) => ({ type: types.UPDATE_TAB, tab }),
	openRepair: () => ({ type: types.OPEN_REPAIR }),
	closeRepair: () => ({ type: types.CLOSE_REPAIR })
};
