import update from 'immutability-helper';
import {
	EXERCISE_IDLE,
	DELAY_TIME,
	READ_TIME,
	FILE_DEFAULT_VALUES
} from '../../constants/lab7/index';

export const types = {
	UPDATE_STATE: '@accessibility-lab/lab7/exercise/update_state',
	RESET: '@accessibility-lab/lab7/exercise/reset',
	// TICK: '@accessibility-lab/lab7/exercise/tick',
	ENABLE_END: '@accessibility-lab/lab7/exercise/enable_end',
	UPDATE_SCORE: '@accessibility-lab/lab7/exercise/update_score',
	INCREMENT_INTRUSIONS: '@accessibility-lab/lab7/exercise/increment_intrusions',
	INCREMENT_PROTECTED: '@accessibility-lab/lab7/exercise/increment_protected',
	INCREMENT_INCORRECT: '@accessibility-lab/lab7/exercise/increment_incorrect',
	START_NEW_ROUND: '@accessibility-lab/lab7/exercise/start_new_round',
	DELAY_TICK: '@accessibility-lab/lab7/exercise/delay_tick',
	READ_TICK: '@accessibility-lab/lab7/exercise/read_tick',
	RESET_DELAY_TIMER: '@accessibility-lab/lab7/exercise/reset_delay_timer',
	RESET_READ_TIMER: '@accessibility-lab/lab7/exercise/reset_read-timer',
	ADD_RESULT: '@accessibility-lab/lab7/exercise/add_result',
	UPDATE_FILE_ACCESS: '@accessibility-lab/lab7/exercise/update_file_access',
	UPDATE_AI_RESULTS: '@accessibility-lab/lab7/exercise/update_AI_results'
};

export const initialState = {
	state: EXERCISE_IDLE,
	plays: 0,
	results: [],
	end: false,

	delayTime: DELAY_TIME,
	readTime: READ_TIME,

	score: 0,
	roundNumber: 0,
	aiResult: null,
	intrusions: 0,
	protected: 0,
	incorrect: 0,

	files: FILE_DEFAULT_VALUES,
	threat: 0
};

const ExerciseReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_STATE:
			return {
				...state,
				state: action.state
			};
		case types.RESET:
			return {
				...state,
				plays: state.plays + 1,
				results: state.results
			};
		case types.DELAY_TICK:
			return {
				...state,
				delayTime: state.delayTime - 1
			};
		case types.READ_TICK:
			return {
				...state,
				readTime: state.readTime - 1
			};
		case types.RESET_DELAY_TIMER:
			return {
				...state,
				delayTime: DELAY_TIME
			}
		case types.RESET_READ_TIMER:
			return {
				...state,
				readTime: READ_TIME
			}
		case types.UPDATE_SCORE:
			return {
				...state,
				score: actions.score
			}
		case types.INCREMENT_INTRUSIONS:
			return {
				...state,
				intrusions: state.intrusions + 1
			};
		case types.INCREMENT_PROTECTED:
			return {
				...state,
				protected: state.protected + 1
			};
		case types.INCREMENT_INCORRECT:
			return {
				...state,
				incorrect: state.incorrect + 1
			};
		case types.START_NEW_ROUND:
			return {
				...state,
				roundNumber: state.roundNumber + 1,
				files: FILE_DEFAULT_VALUES
			};
		case types.ADD_RESULT:
			return {
				...state,
				results: state.results.concat(action.result)
			};
		case types.UPDATE_FILE_ACCESS:
			return update(state, {
				files: {
					[action.file]: {
						$set: action.accessStatus
					}
				}
			});
		case types.UPDATE_AI_RESULTS:
			return {
				...state,
				aiResult: action.aiResult
			};
		case types.UPDATE_THREAT_LEVEL:
			return {
				...state,
				threatLevel: action.threat
			}
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
	reset: () => ({ type: types.RESET }),
	delayTick: () => ({ type: types.DELAY_TICK }),
	readTick: () => ({ type: types.READ_TICK }),
	resetDelayTimer: () => ({ type: types.RESET_DELAY_TIMER }),
	resetReadTimer: () => ({ type: types.RESET_READ_TIMER }),
	updateScore: () => ({ type: types.UPDATE_SCORE }),
	incrementIntrusions: () => ({ type: types.INCREMENT_INTRUSIONS }),
	incrementProtected: () => ({ type: types.INCREMENT_PROTECTED }),
	incrementIncorrect: () => ({ type: types.INCREMENT_INCORRECT }),
	startNewRound: () => ({ type: types.START_NEW_ROUND }),
	addResult: (result) => ({ type: types.ADD_RESULT, result }),
	updateFileAccess: (accessStatus) => ({ type: types.UPDATE_FILE_ACCESS, accessStatus }),
	updateThreatLevel: (num) => ({ type: types.UPDATE_THREAT_LEVEL, num }),
	updateAIResults: (aiResult) => ({ type: types.UPDATE_AI_RESULTS, aiResult }),
	enableEnd: () => ({ type: types.ENABLE_END })
};

export default ExerciseReducer;

