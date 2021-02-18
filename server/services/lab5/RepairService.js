const db = require('../../database');

exports.submitChange = (data) => {
	return db.RepairLab5.create({
			usersessionid: data.usersessionid,
			activity: data.activity,
			repair: data.repair
		})
		.then(() => {
			return true;
		})
		.catch((err) => {
			console.log(err);
		});
};
