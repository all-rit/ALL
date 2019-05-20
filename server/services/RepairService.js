const db = require('../database');

exports.submitChange = (data) => {
	return db.Login
		.findAll({ limit: 1, where: { UserSessionID: data.token }, order: [ [ 'LoginID', 'DESC' ] ] })
		.then((logins) => {
			return logins[0];
		})
		.then((login) => {
			return db.Repair.create({
				LoginID: login.LoginID,
				AvailableMessage: data.availableMessage,
				UnavailableMessage: data.unavailableMessage,
				AvailableBackgroundColor: data.availableBackgroundColor,
				UnavailableBackgroundColor: data.unavailableBackgroundColor
			});
		})
		.then(() => {
			return true;
		})
		.catch((err) => {
			console.log(err);
		});
};
