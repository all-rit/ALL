export const types = {
	UPDATE_REPAIR_EQUATION: '@accessibility-lab/lab7/repair/update_repair_equation',
	UPDATE_REPAIR_FORM: '@accessibility-lab/lab7/repair/update_repair_form',
	UPDATE_TAB: '@accessibility-lab/lab7/repair/update_tab',
	OPEN_REPAIR: '@accessibility-lab/lab7/repair/open_repair',
	CLOSE_REPAIR: '@accessibility-lab/lab7/repair/close_repair'
};

export const initialState = {
	rewardvalue: null,
    costvalue: null,
	repairVisible: false,
	changesApplied: false
};

const RepairReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_REPAIR_EQUATION:
			return {
				...state,
				rewardvalue: action.rewardvalue,
				costvalue: action.costvalue,
				changesApplied: true
			};
		case types.UPDATE_REPAIR_FORM:
			return {
				...state,
				errorNotification: action.errorNotification,
				successNotification: action.successNotification,
				borderColor: action.borderColor,
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
	updateRepairEquation: (rewardvalue, costvalue) => ({
		type: types.UPDATE_REPAIR_EQUATION,
		rewardvalue,
		costvalue
	}),
	updateRepairForm: (errorNotification,
					   successNotification,
					   borderColor) => ({
		type: types.UPDATE_REPAIR_FORM,
		errorNotification,
		successNotification,
		borderColor
	}),
	updateTab: (tab) => ({ type: types.UPDATE_TAB, tab }),
	openRepair: () => ({ type: types.OPEN_REPAIR }),
	closeRepair: () => ({ type: types.CLOSE_REPAIR })
};

export default RepairReducer;

