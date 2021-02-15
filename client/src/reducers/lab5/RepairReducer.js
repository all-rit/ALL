export const types = {
	UPDATE_REPAIR_PAGELAYOUT: '@accessibility-lab/cognitive/repair/update_repair_pagelayout',
	UPDATE_TAB: '@accessibility-lab/cognitive/repair/update_tab',
	OPEN_REPAIR: '@accessibility-lab/cognitive/repair/open_repair',
	CLOSE_REPAIR: '@accessibility-lab/cognitive/repair/close_repair'
};

export const initialState = {
	h1value: null,
	ulvalue: null,
	classvalue: null,
	fontvalue: null,
	fontfamilyvalue: null,
	repairVisible: false,
	changesApplied: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_REPAIR_PAGELAYOUT:
			return {
				...state,
				h1value: action.h1value,
				ulvalue: action.ulvalue,
				classvalue: action.classvalue,
				fontvalue: action.fontvalue,
				fontfamilyvalue: action.fontfamilyvalue,
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
	updateRepairPageLayout: (h1value, ulvalue, classvalue, fontvalue, fontfamilyvalue) => ({
		type: types.UPDATE_REPAIR_PAGELAYOUT,
		h1value,
		ulvalue,
		classvalue,
		fontvalue,
		fontfamilyvalue,
	}),
	updateTab: (tab) => ({ type: types.UPDATE_TAB, tab }),
	openRepair: () => ({ type: types.OPEN_REPAIR }),
	closeRepair: () => ({ type: types.CLOSE_REPAIR })
};
