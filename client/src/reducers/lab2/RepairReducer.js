export const types = {
	UPDATE_REPAIR: '@accessibility-lab/lab2/repair/update_repair',
};

export const initialState = {
	background: '',
    correctColor: '',
    incorrectColorOne: '',
    incorrectColorTwo: ''
};
export default (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_REPAIR:
			return {
				...state,
				background: action.background,
				correctColor: action.correctColor,
				incorrectColorOne: action.incorrectColorOne,
				incorrectColorTwo: action.catAltValue,
			};
		default:
			return state;
	}
};

export const actions = {
	updateRepair: (cowAltValue, carAltValue, burgerAltValue, catAltValue) => ({
		type: types.UPDATE_REPAIR,
		cowAltValue, carAltValue, burgerAltValue, catAltValue
	}),

};
