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
				incorrectColorTwo: action.incorrectColorTwo,
			};
		default:
			return state;
	}
};

export const actions = {
	updateRepair: (background, correctColor, incorrectColorOne, incorrectColorTwo) => ({
		type: types.UPDATE_REPAIR,
		background, correctColor, incorrectColorOne, incorrectColorTwo
	}),

};
