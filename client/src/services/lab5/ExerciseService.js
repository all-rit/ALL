import API from '../API';

const endpoints = {
	SUBMIT_CHOICE: '/lab5/exercise/choice',
};

export default {
	submitChoice: (correct, question,selectedoption,
				   options) => {
		return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_CHOICE, {
			correct,
			question,
			selectedoption,
			options
		});
	}
};
