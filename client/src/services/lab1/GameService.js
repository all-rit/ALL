import API from '../API';

const endpoints = {
	CREATE_GAME: '/lab1/game/start',
	CREATE_ROUND: '/lab1/game/round',
	CREATE_CHOICE: '/lab1/game/choice',
	END_GAME: '/lab1/game/end',
};

export default {
	createGame: (playthrough) => {
		return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.CREATE_GAME, {
			playthrough
		});
	},
	createRound: (soundOption) => {
		return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.CREATE_ROUND, {
			soundOption
		});
	},
	createChoice: (score, hintUsed, boxNumber, correct) => {
		return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.CREATE_CHOICE, {
			score,
			hintUsed,
			boxNumber,
			correct
		});
	},
	updateEndGameScore: (score) => {
		return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.END_GAME, {
			score,
		})
	}
};
