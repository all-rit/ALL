const db = require('../database');

exports.createGame = (data) => {
	return db.Login
		.findAll({ limit: 1, where: { usersessionid: data.token }, order: [ [ 'loginid', 'DESC' ] ] })
		.then((logins) => {
			return logins[0];
		})
		.then((login) => {
			return db.Game.create({
				loginid: login.loginid,
				playthrough: data.playthrough
			});
		})
		.then((game) => {
			return game.gameid;
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.createRound = (data) => {
	return db.Game
		.findByPk(data.id)
		.then((game) => {
			return db.Round.create({ gameid: game.gameid, soundoption: data.soundOption });
		})
		.then((round) => {
			console.log(round.roundid)
			return round.roundid;
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.createChoice = (data) => {
	return db.Choice
		.create({
			roundid: data.round,
			boxnumber: data.boxNumber,
			correct: data.correct
		})
		.then(() => {
			if (correct) {
				throw new Error('Gotta update the game and round.');
			}

			return true;
		})
		.catch(() => {
			db.Game.findByPk(data.id).then((game) => {
				game.update({ score: data.score });
			});
			db.Round.findByPk(data.round).then((round) => {
				round.update({ hintused: data.hintUsed });
			});

			return true;
		});
};
