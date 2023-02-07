const RepairService = require('../../services/lab6/RepairService');

exports.submitChange = (req, res) => {
  RepairService.submitChange({
    userid: req.body.userid,
    appearance: req.body.appearance,
    yearsexperience: req.body.yearsexperience,
    availability: req.body.availability,
    expectedpay: req.body.expectedpay,
  }).then(() => {
    res.sendStatus(200);
  });
};

exports.getUserChange = (req, res) => {
  RepairService.getUserChange(req.params.userID).then((records) => {
    res.json(records);
  });
};
