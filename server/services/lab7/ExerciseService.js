const db = require('../../database');
exports.submitChoice = (data) => {
	if (data.usersessionid){
		return db.ExerciseLab7.create({
			usersessionid: data.usersessionid,
			question: data.question,
			correct: data.correct,
			selectedoption:data.selectedoption,
			options: data.options
		}).then((exercise) => {
			return exercise.exerciseid;
		}).catch((err) => {
			console.log(err);
		})
	}
	return Promise.resolve();

};

exports.updateEndExerciseScore = (data) => {
	return db.ExerciseLab7.findByPk(data.id).then((exercise) => {
	  exercise.update({score: data.score});
	});
  };
  