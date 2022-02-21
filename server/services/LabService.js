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

exports.getLabAbout = (labID) => {
    return db.sequelize.query('SELECT "aboutPage" FROM "labs" WHERE "labs"."id"=(:labID)', {
        replacements: {labID: labID},
        type: db.sequelize.QueryTypes.SELECT,
        raw: true
    });
}

exports.getLabReinforcement = (labID) => {
    return db.sequelize.query('SELECT "reinforcement" FROM "labs" WHERE "labs"."id"=(:labID)', {
        replacements: {labID: labID},
        type: db.sequelize.QueryTypes.SELECT,
        raw: true
    });
}