import { UPDATE_USER } from './Constants';

const initialState = {
	user: {
		UserID: null,
		FirstName: '',
		Nickname: '',
		Admin: false
	}
};

export const AppReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case UPDATE_USER:
			return {
				...state,
				user: action.user
			};

		default:
			return state;
	}
};
