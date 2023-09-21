const ExerciseService = require('../../services/lab10/ExerciseService');

exports.updateWeights = (req, res) => {
  ExerciseService.updateWeights({
    userid: req.body.userId,
    weights: req.body.weights,
  }).then((id) => {
    req.session.exercise = id;
    return res.sendStatus(200);
  });
};

