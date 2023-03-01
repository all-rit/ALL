const ExerciseService = require('../../services/lab7/ExerciseService');

exports.submitRepair = (req, res) => {
  ExerciseService.submitChoice({
    userid: req.body.userId,
    report: req.body.report,
  }).then((id) => {
    req.session.exercise = id;
    return res.sendStatus(200);
  });
};

