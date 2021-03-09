const RepairService = require('../../services/lab4/RepairService');

exports.submitChangeButton = (req, res) => {
	RepairService.submitChangeButton({
		usersessionid: req.session.token,
		height: req.body.height,
		width: req.body.width
	}).then((id) => {
		if(id){
			req.session.repair = id;
		}
		res.sendStatus(200);
	});
};

exports.submitChangeSkip = (req, res) => {
	RepairService.submitChangeSkip({
		usersessionid: req.session.token,
		skiptomain: req.body.skiptomain,
	}).then(() => {
		res.sendStatus(200);
	});
};

exports.submitChangeHint = (req, res) => {
	RepairService.submitChangeHint({
		usersessionid: req.session.token,
		tabindex: req.body.tabindex,
	}).then(() => {
		res.sendStatus(200);
	});
};


