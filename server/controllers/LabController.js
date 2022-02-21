const LabService = require('../services/LabService');

exports.getAllLabs = (req, res) => {
	LabService.getAllLabs().then((records) => {
		res.json(records);
	})
};
exports.getLabAbout = (req, res) => {
	LabService.getLabAbout(req.params.labID).then((records) => {
		res.json(records);
	})
};
exports.getLabReinforcement = (req, res) => {
	LabService.getLabReinforcement(req.params.labID).then((records) => {
		res.json(records);
	})
};