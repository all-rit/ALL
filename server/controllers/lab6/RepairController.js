const RepairService = require('../../services/lab6/RepairService');

exports.submitChange = (req, res) => {
  RepairService.submitChange({
    usersessionid: req.session.token,
    appearance: req.body.appearance,
    yearsexperience: req.body.yearsexperience,
    availability: req.body.availability,
    expectedpay: req.body.expectedpay,
  }).then((id) => {
    if (id) {
      req.session.repair = id;
    }
    res.sendStatus(200);
  });
};
