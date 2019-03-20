import { UPDATE_USER, UPDATE_POPUP } from './Constants';

export const updateUser = (user) => {
	return {
		type: UPDATE_USER,
		user
	};
};

export const updatePopup = (message) => {
	return {
		type: UPDATE_POPUP,
		message
	};
};

export const login = () => {
	return (dispatch) => {
		fetch(process.env.REACT_APP_SERVER_URL + '/user', {
			credentials: 'include'
		})
			.then((response) => response.json())
			.then((json) => dispatch(updateUser(json)));
	};
};
