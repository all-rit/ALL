const GameService = require('../services/GameService');

exports.createGame = (req, res) => {
	GameService.createGame(req.session.token).then((id) => {
		req.session.game = id;

		res.send(200);
	});
};

exports.createRound = (req, res) => {
	GameService.createRound({
		id: req.session.game,
		soundOption: req.body.sound
	}).then((id) => {
		req.session.round = id;

		res.send(200);
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
		res.send(200);
	});
};
