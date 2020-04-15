export const types = {
	LOGIN: '@accessibility-lab/audio-cue/app/login',
	UPDATE_USER: '@accessibility-lab/audio-cue/app/update_user',
	UPDATE_POPUP: '@accessibility-lab/audio-cue/app/update_popup',
	OPEN_INSTRUCTIONS: '@accessibility-lab/audio-cue/app/open_instructions',
	CLOSE_INSTRUCTIONS: '@accessibility-lab/audio-cue/app/close_instructions',
	SET_BODY: '@accessibility-lab/app/set_body'
};

export const initialState = {
	user: null,
	popupMessage: '',
	instructionsVisible: false,
	body: 0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_USER:
			return {
				...state,
				user: action.user
			};
		case types.SET_BODY:
			return {
				...state,
				body: action.body
			};
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
	login: () => ({ type: types.LOGIN }),
	setBody: (body) => ({type: types.SET_BODY, body}),
	updateUser: (user) => ({ type: types.UPDATE_USER, user }),
	updatePopup: (message) => ({ type: types.UPDATE_POPUP, message }),
	openInstructions: () => ({ type: types.OPEN_INSTRUCTIONS }),
	closeInstructions: () => ({ type: types.CLOSE_INSTRUCTIONS })
};
