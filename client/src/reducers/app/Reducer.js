import { UPDATE_USER, UPDATE_POPUP } from './Constants';

const initialState = {
	user: {
		UserID: null,
		FirstName: '',
		Nickname: '',
		Admin: false
	},
	popup: '',
	popupType: 'success'
};

export const AppReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case UPDATE_USER:
			return {
				...state,
				user: action.user
			};

		case UPDATE_POPUP:
			return {
				...state,
				popup: action.message
			};

		default:
			return state;
	}
};
