const RepairService = require('../services/RepairService');

exports.submitChange = (req, res) => {
	RepairService.submitChange({
		token: req.session.token,
		availableMessage: req.body.availableMessage,
		unavailableMessage: req.body.unavailableMessage,
		availableBackgroundColor: req.body.availableBackgroundColor,
		unavailableBackgroundColor: req.body.unavailableBackgroundColor,
		shake: req.body.shake // change made
	}).then(() => {
		res.sendStatus(200);
	});
};
