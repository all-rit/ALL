const ExerciseService = require('../../services/lab1/ExerciseService');

exports.createExercise = (req, res) => {
  ExerciseService.createExercise({
    usersessionid: req.session.token,
    playthrough: req.body.playthrough,
  }).then((id) => {
    req.session.exercise = id;
    res.sendStatus(200);
  });
};

exports.createRound = (req, res) => {
  ExerciseService.createRound({
    id: req.session.exercise,
    soundOption: req.body.soundOption,
  }).then((id) => {
    req.session.round = id;

    res.sendStatus(200);
  });
};

exports.createChoice = (req, res) => {
  ExerciseService.createChoice({
    id: req.session.exercise,
    round: req.session.round,
    score: req.body.score,
    hintUsed: req.body.hintUsed,
    boxNumber: req.body.boxNumber,
    correct: req.body.correct,
  }).then(() => {
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
