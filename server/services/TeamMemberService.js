const db = require('../database');

exports.getAllTeamMembers = () => {
	return db.sequelize.query('SELECT * FROM "team_members" WHERE "isActive"=true ORDER BY id', {
        type: db.sequelize.QueryTypes.SELECT,
        raw: true
    });
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

exports.getAllAlumni = () => {
	return db.sequelize.query('SELECT * FROM "team_members" WHERE "isActive"=false ORDER BY id', {
        type: db.sequelize.QueryTypes.SELECT,
        raw: true
    });
}