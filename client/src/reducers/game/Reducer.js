import update from 'immutability-helper';

import {
	UPDATE_GAME_STATE,
	RESET_GAME,
	TIMER_TICK,
	ROUND_TICK,
	COUNTDOWN_TIMER_TICK,
	RESET_ROUND_TIMER,
	RESET_COUNTDOWN_TIMER,
	UPDATE_SCORE,
	INCREMENT_CORRECT_ANSWERS,
	INCREMENT_INCORRECT_ANSWERS,
	START_NEW_ROUND,
	UPDATE_HINT_BOX_STATUS,
	UPDATE_HINT,
	UPDATE_HINT_USED,
	UPDATE_BOX,
	UPDATE_BOX_STATUS,
	UPDATE_SOUND_STATUS,
	UPDATE_CONGRATULATION_MESSAGE,
	GAME_IDLE,
	HINT_BOX_CLOSED,
	MILLISECONDS_IN_A_SECOND,
	TIMEOUT_MIN_MS,
	TIMER_SECONDS,
	COUNTDOWN_SECONDS,
	BOX_DEFAULT_VALUES
} from './Constants';

const initialState = {
	state: GAME_IDLE,
	numberOfPlays: 2,
	time: TIMER_SECONDS * MILLISECONDS_IN_A_SECOND / TIMEOUT_MIN_MS,
	countdownTime: COUNTDOWN_SECONDS,
	score: 0,
	roundNumber: 0,
	roundTime: 0,
	correctAnswers: 0,
	incorrectAnswers: 0,
	correctBoxNumber: undefined,
	currentHint: undefined,
	hintBoxState: HINT_BOX_CLOSED,
	hintUsed: false,
	boxes: BOX_DEFAULT_VALUES,
	soundEnabled: true,
	congratulationMessage: undefined
};

export const GameReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case UPDATE_GAME_STATE:
			return {
				...state,
				state: action.state
			};

		case RESET_GAME:
			return {
				...initialState,
				numberOfPlays: state.numberOfPlays + 1
			};

		case TIMER_TICK:
			return {
				...state,
				time: state.time - 1
			};

		case ROUND_TICK:
			return {
				...state,
				roundTime: state.roundTime + TIMEOUT_MIN_MS
			};

		case COUNTDOWN_TIMER_TICK:
			return {
				...state,
				countdownTime: state.countdownTime - 1
			};

		case RESET_ROUND_TIMER:
			return {
				...state,
				roundTime: 0
			};

		case RESET_COUNTDOWN_TIMER:
			return {
				...state,
				countdownTime: COUNTDOWN_SECONDS
			};

		case UPDATE_SCORE:
			return {
				...state,
				score: action.score
			};

		case INCREMENT_CORRECT_ANSWERS:
			return {
				...state,
				correctAnswers: state.correctAnswers + 1
			};

		case INCREMENT_INCORRECT_ANSWERS:
			return {
				...state,
				incorrectAnswers: state.incorrectAnswers + 1
			};

		case START_NEW_ROUND:
			return {
				...state,
				roundNumber: state.roundNumber + 1,
				boxes: BOX_DEFAULT_VALUES
			};

		case UPDATE_HINT_BOX_STATUS:
			return {
				...state,
				hintBoxState: action.status
			};

		case UPDATE_HINT:
			return {
				...state,
				currentHint: action.hint
			};

		case UPDATE_HINT_USED:
			return {
				...state,
				hintUsed: action.status
			};

		case UPDATE_BOX:
			return {
				...state,
				correctBoxNumber: action.box
			};

		case UPDATE_BOX_STATUS:
			return update(state, {
				boxes: {
					[action.box]: {
						$set: action.status
					}
				}
			});

		case UPDATE_SOUND_STATUS:
			return {
				...state,
				soundEnabled: action.status
			};

		case UPDATE_CONGRATULATION_MESSAGE:
			return {
				...state,
				congratulationMessage: action.message
			};

		default:
			return state;
	}
};
