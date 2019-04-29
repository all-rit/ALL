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
	ADD_RESULTS
} from './Constants';

export const updateGameState = (state) => {
	return {
		type: UPDATE_GAME_STATE,
		state
	};
};

export const resetGame = () => {
	return {
		type: RESET_GAME
	};
};

export const timerTick = () => {
	return {
		type: TIMER_TICK
	};
};

export const roundTick = () => {
	return {
		type: ROUND_TICK
	};
};

export const countdownTimerTick = () => {
	return {
		type: COUNTDOWN_TIMER_TICK
	};
};

export const resetRoundTimer = () => {
	return {
		type: RESET_ROUND_TIMER
	};
};

export const resetCountdownTimer = () => {
	return {
		type: RESET_COUNTDOWN_TIMER
	};
};

export const updateScore = (score) => {
	return {
		type: UPDATE_SCORE,
		score
	};
};

export const incrementCorrectAnswers = () => {
	return {
		type: INCREMENT_CORRECT_ANSWERS
	};
};

export const incrementIncorrectAnswers = () => {
	return {
		type: INCREMENT_INCORRECT_ANSWERS
	};
};

export const startNewRound = () => {
	return {
		type: START_NEW_ROUND
	};
};

export const updateHintBoxStatus = (status) => {
	return {
		type: UPDATE_HINT_BOX_STATUS,
		status
	};
};

export const updateHint = (hint) => {
	return {
		type: UPDATE_HINT,
		hint
	};
};

export const updateHintUsed = (status) => {
	return {
		type: UPDATE_HINT_USED,
		status
	};
};

export const updateBox = (box) => {
	return {
		type: UPDATE_BOX,
		box
	};
};

export const updateBoxStatus = (box, status) => {
	return {
		type: UPDATE_BOX_STATUS,
		box,
		status
	};
};

export const updateSoundStatus = (status) => {
	return {
		type: UPDATE_SOUND_STATUS,
		status
	};
};

export const updateCongratulationMessage = (message) => {
	return {
		type: UPDATE_CONGRATULATION_MESSAGE,
		message
	};
};

export const addResults = (results) => {
	return {
		type: ADD_RESULTS,
		results
	};
};
