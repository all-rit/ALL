const db = require('../../database');
exports.submitChoice = (data) => {
	if (data.usersessionid){
		return db.GameLab5.create({
			usersessionid: data.usersessionid,
			question: data.question,
			correct: data.correct,
			selectedoption:data.selectedoption,
			options: data.options
		}).then((game) => {
			return game.gameid;
		}).catch((err) => {
			console.log(err);
		})
	}
	return Promise.resolve();

};
