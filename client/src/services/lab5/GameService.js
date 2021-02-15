import API from '../API';

const endpoints = {
	SUBMIT_CHOICE: '/lab5/game/choice',
};

export default {
	submitChoice: (correct, question) => {
		return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_CHOICE, {
			correct,
			question
		});
	}
};
