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

exports.retrieveWeights = (req, res) => {
  ExerciseService.retrieveWeights(req.params.userID)
      .then((records) => {
        if (records === null || !Object.hasOwn(records, 'weights')) {
          return res.sendStatus(404);
        }
        return res.json({weights: records['weights']});
      });
};

