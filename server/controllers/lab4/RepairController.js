const RepairService = require('../../services/lab4/RepairService');

exports.submitChangeButton = (req, res) => {
	RepairService.submitChangeButton({
		usersessionid: req.session.token,
		height: req.height,
		width: req.width
	}).then((id) => {
		if(id){
			req.session.repair = id;
		}
		res.sendStatus(200);
	});
};
