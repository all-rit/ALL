const ExerciseService = require('../../services/lab7/ExerciseService');

exports.submitChoice = (req, res) => {
  ExerciseService.submitChoice({
    usersessionid: req.session.token,
  }).then((id) => {
    req.session.exercise = id;
    res.sendStatus(200);
  });
};

exports.updateEndExerciseScore = (req, res) => {
  ExerciseService.updateEndExerciseScore({
    id: req.session.exercise,
    score: req.body.score,
  }).then(() => {
    res.sendStatus(200);
  });
};

