import { UPDATE_OPEN_STATUS } from './Constants';

const initialState = {
	open: false
};

export const InstructionsReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case UPDATE_OPEN_STATUS:
			return {
				...state,
				open: action.status
			};

		default:
			return state;
	}
};
