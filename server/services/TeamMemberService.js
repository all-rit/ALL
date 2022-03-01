const db = require('../database');

exports.getAllTeamMembers = () => {
	return db.TeamMembers
		.findAll({
			order: [
				['id']
			],
			raw: true
			
		})
}

exports.getAllProfessors = () => {
	return db.Professors
		.findAll({
			order: [
				['id']
			],
			raw: true
		})
}