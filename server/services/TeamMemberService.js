const db = require('../database');

exports.getAllTeamMembers = () => {
	return db.TeamMembers
		.findAll({
			raw: true
		})
}

exports.getAllProfessors = () => {
	return db.Professors
		.findAll({
			raw: true
		})
}