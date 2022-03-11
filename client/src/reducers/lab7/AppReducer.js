export const types = {
	UPDATE_POPUP: '@accessibility-lab/cognitive/app/update_popup',
	OPEN_INSTRUCTIONS: '@accessibility-lab/cognitive/app/open_instructions',
	CLOSE_INSTRUCTIONS: '@accessibility-lab/cognitive/app/close_instructions'
};

export const initialState = {
	popupMessage: '',
	instructionsVisible: false,
};

const AppReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_POPUP:
			return {
				...state,
				popupMessage: action.message
			};

		case types.OPEN_INSTRUCTIONS:
			return {
				...state,
				instructionsVisible: true
			};

		case types.CLOSE_INSTRUCTIONS:
			return {
				...state,
				instructionsVisible: false
			};

		default:
			return state;
	}
};

export const actions = {
	updatePopup: (message) => ({ type: types.UPDATE_POPUP, message }),
	openInstructions: () => ({ type: types.OPEN_INSTRUCTIONS }),
	closeInstructions: () => ({ type: types.CLOSE_INSTRUCTIONS })
};

export default AppReducer;

