const ExerciseService = require('../../services/lab7/ExerciseService');

exports.submitChoice = (req, res) => {
  ExerciseService.submitChoice({
    usersessionid: req.session.token,
  }).then((id) => {
    req.session.exercise = id;
    res.sendStatus(200);
  });
};

