const db = require('../../database');

exports.createExercise = (data) => {
  return db.ExerciseLab1.create({
    usersessionid: data.usersessionid,
    playthrough: data.playthrough,
  })
      .then((exercise) => {
        return exercise.exerciseid;
      })
      .catch((err) => {
        console.log(err);
      });
};

exports.createRound = (data) => {
  return db.ExerciseLab1
      .findByPk(data.id)
      .then((exercise) => {
        return db.Round.create({exerciseid: exercise.exerciseid, soundoption: data.soundOption});
      })
      .then((round) => {
        console.log(round.roundid);
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
        correct: data.correct,
      })
      .then(() => {
        if (data.correct) {
          db.ExerciseLab1.findByPk(data.id).then((exercise) => {
            exercise.update({score: data.score});
          });
          db.Round.findByPk(data.round).then((round) => {
            round.update({hintused: data.hintUsed});
          });
        }
        return true;
      });
};

exports.updateEndExerciseScore = (data) => {
  return db.ExerciseLab1.findByPk(data.id).then((exercise) => {
    exercise.update({score: data.score});
  });
};
