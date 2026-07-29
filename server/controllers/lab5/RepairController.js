const RepairService = require('../../services/lab5/RepairService');

exports.submitChange = (req, res) => {
  RepairService.submitChange({
    usersessionid: req.session.token,
    activity: req.body.activity,
    repair: req.body.repair,
  }).then(() => {
    res.sendStatus(200);
  });
};
