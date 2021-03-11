const RepairService = require('../../services/lab2/RepairService');

exports.submitChange = (req, res) => {
	RepairService.submitChange({
		usersessionid: req.session.token,
		background: req.body.background,
		correctColor: req.body.correctColor,
		incorrectColorOne: req.body.incorrectColorOne,
		incorrectColorTwo: req.body.incorrectColorTwo
	}).then(() => {
		res.sendStatus(200);
	});
};
