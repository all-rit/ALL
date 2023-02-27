const RepairService = require('../../services/lab7/RepairService');

exports.submitChange = (req, res) => {
  RepairService.submitChange({
    usersessionid: req.session.token,
    activity: req.body.activity,
    repair: req.body.repair,
  }).then((repairId) => {
    return res.status(200).json({repairId});
  });
};

exports.updateReport = (req, res) => {
  RepairService.updateReport({
    repairId: req.body.repairId,
    report: req.body.report,
  }).then(() => {
    res.sendStatus(200);
  });
};