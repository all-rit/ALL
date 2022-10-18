const RepairService = require('../../services/lab3/RepairService');

exports.submitChange = (req, res) => {
  RepairService.submitChange({
    usersessionid: req.session.token,
    cowAltValue: req.body.cowAltValue,
    carAltValue: req.body.carAltValue,
    burgerAltValue: req.body.burgerAltValue,
    catAltValue: req.body.catAltValue,
  }).then(() => {
    res.sendStatus(200);
  });
};
