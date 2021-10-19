// import update from 'immutability-helper';
import {
	EXERCISE_IDLE
} from '../../constants/lab5/index';

export const types = {
	UPDATE_STATE: '@accessibility-lab/cognitive/exercise/update_state',
	ENABLE_END: '@accessibility-lab/cognitive/exercise/enable_end'
};

export const initialState = {
	state: EXERCISE_IDLE,
	end: false
};

const ExerciseReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_STATE:
			return {
				...state,
				state: action.state
			};
		case types.ENABLE_END:
			return {
				...state,
				end: action.state
			};

		default:
			return state;
	}
};

export const actions = {
	updateState: (state) => ({ type: types.UPDATE_STATE, state }),
	enableEnd: (state) => ({ type: types.ENABLE_END, state })
};

export default ExerciseReducer;

