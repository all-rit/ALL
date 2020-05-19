const db = require('../database');

exports.submitChange = (data) => {
	return db.Login
		.findAll({ limit: 1, where: { usersessionid: data.token }, order: [ [ 'loginid', 'DESC' ] ] })
		.then((logins) => {
			return logins[0];
		})
		.then((login) => {
			return db.Repair.create({
				loginid: login.loginid,
				availablemessage: data.availableMessage,
				unavailablemessage: data.unavailableMessage,
				availablebackgroundcolor: data.availableBackgroundColor,
				unavailablebackgroundcolor: data.unavailableBackgroundColor,
				shake: data.shake // change made
			});
		})
		.then(() => {
			return true;
		})
		.catch((err) => {
			console.log(err);
		});
};
