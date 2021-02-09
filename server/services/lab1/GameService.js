const db = require('../../database');

exports.createGame = (data) => {
	return db.GameLab1.create({
				usersessionid: data.usersessionid,
				playthrough: data.playthrough
			})
		.then((game) => {
			return game.gameid;
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.createRound = (data) => {
	return db.GameLab1
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
			if (data.correct) {
				db.GameLab1.findByPk(data.id).then((game) => {
					game.update({ score: data.score });
				});
				db.Round.findByPk(data.round).then((round) => {
					round.update({ hintused: data.hintUsed });
				});
			}
			return true;
		})
};

exports.updateEndGameScore = (data) => {
	return db.GameLab1.findByPk(data.id).then((game) => {
		game.update({score: data.score});
	})
};
