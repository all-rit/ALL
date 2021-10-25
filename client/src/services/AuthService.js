import API from './API';

const endpoints = {
	GET_USER: '/user'
};

const AuthService = {
	getUser: () => {
		return API.get(process.env.REACT_APP_SERVER_URL + endpoints.GET_USER)
			.then((response) => response.json())
			.then((json) => json);
	}
};

export default AuthService;

