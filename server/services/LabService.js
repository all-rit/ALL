const db = require('../database');

exports.getAllLabs = () => {
	return db.Labs
		.findAll({
			order: [
				['id', 'ASC']
			],
			raw: true
		})
}