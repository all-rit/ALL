const db = require('../database');

exports.createGame = (data) => {
	return db.Login
		.findAll({ limit: 1, where: { UserSessionID: data.token }, order: [ [ 'LoginID', 'DESC' ] ] })
		.then((logins) => {
			return logins[0];
		})
		.then((login) => {
			return db.Game.create({
				LoginID: login.LoginID,
				Playthrough: data.playthrough
			});
		})
		.then((game) => {
			return game.GameID;
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.createRound = (data) => {
	return db.Game
		.findByPk(data.id)
		.then((game) => {
			return db.Round.create({ GameID: game.GameID, SoundOption: data.soundOption });
		})
		.then((round) => {
			return round.RoundID;
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.createChoice = (data) => {
	return db.Choice
		.create({
			RoundID: data.round,
			BoxNumber: data.boxNumber,
			Correct: data.correct
		})
		.then(() => {
			if (correct) {
				throw new Error('Gotta update the game and round.');
			}

			return true;
		})
		.catch(() => {
			db.Game.findByPk(data.id).then((game) => {
				game.update({ Score: data.score });
			});
			db.Round.findByPk(data.round).then((round) => {
				round.update({ HintUsed: data.hintUsed });
			});

			return true;
		});
};
