const db = require('../database');

exports.getAllLabs = () => {
	return db.Labs
		.findAll({
			raw: true
		})
}