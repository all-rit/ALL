import {
	UPDATE_CODE,
	UPDATE_CORRECT_BACKGROUND,
	UPDATE_INCORRECT_BACKGROUND,
	RESET_CODE,
	UPDATE_CODE_EDITOR_STATUS,
	UPDATE_TAB
} from './Constants';

export const updateCode = (correctMessage, incorrectMessage) => {
	return {
		type: UPDATE_CODE,
		correctMessage,
		incorrectMessage
	};
};

export const updateCorrectBackground = (color) => {
	return {
		type: UPDATE_CORRECT_BACKGROUND,
		color
	};
};

export const updateIncorrectBackground = (color) => {
	return {
		type: UPDATE_INCORRECT_BACKGROUND,
		color
	};
};

export const resetCode = () => {
	return {
		type: RESET_CODE
	};
};

export const updateCodeEditorStatus = (status) => {
	return {
		type: UPDATE_CODE_EDITOR_STATUS,
		status
	};
};

export const updateTab = (number) => {
	return {
		type: UPDATE_TAB,
		number
	};
};
