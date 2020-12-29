const GameService = require('../../services/lab1/GameService');

exports.createGame = (req, res) => {
	GameService.createGame({
		usersessionid: req.session.token,
		playthrough: req.body.playthrough
	}).then((id) => {
		req.session.game = id;
		res.sendStatus(200);
	});
};

exports.createRound = (req, res) => {
	GameService.createRound({
		id: req.session.game,
		soundOption: req.body.soundOption
	}).then((id) => {
		req.session.round = id;

		res.sendStatus(200);
	});
};

exports.createChoice = (req, res) => {
	GameService.createChoice({
		id: req.session.game,
		round: req.session.round,
		score: req.body.score,
		hintUsed: req.body.hintUsed,
		boxNumber: req.body.boxNumber,
		correct: req.body.correct
	}).then(() => {
		res.sendStatus(200);
	});
};
