import { UPDATE_OPEN_STATUS } from './Constants';

export const updateInstructionsStatus = (status) => {
	return {
		type: UPDATE_OPEN_STATUS,
		status
	};
};
