const LabService = require('../services/LabService');

exports.getAllLabs = (req, res) => {
	LabService.getAllLabs().then((records) => {
		res.json(records);
	})
};