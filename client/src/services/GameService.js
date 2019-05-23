import API from './API';

const endpoints = {
	CREATE_GAME: '/game/start',
	CREATE_ROUND: '/game/round',
	CREATE_CHOICE: '/game/choice'
};

export default {
	createGame: (playthrough) => {
		return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.CREATE_GAME, {
			playthrough
		});
	},
	createRound: (soundOption) => {
		return API.post(process.env.REACT_APP_SERVER_URL + endpoints.CREATE_ROUND, {
			soundOption
		});
	},
	createChoice: (score, hintUsed, boxNumber, correct) => {
		return API.post(process.env.REACT_APP_SERVER_URL + endpoints.CREATE_CHOICE, {
			score,
			hintUsed,
			boxNumber,
			correct
		});
	}
};
