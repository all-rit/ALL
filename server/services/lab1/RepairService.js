const db = require('../../database');

exports.submitChange = (data) => {
	return db.Repair.create({
			usersessionid: data.usersessionid,
			availablemessage: data.availableMessage,
			unavailablemessage: data.unavailableMessage,
			availablebackgroundcolor: data.availableBackgroundColor,
			unavailablebackgroundcolor: data.unavailableBackgroundColor
		})
		.then(() => {
			return true;
		})
		.catch((err) => {
			console.log(err);
		});
};
