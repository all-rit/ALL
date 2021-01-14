const db = require('../database');
exports.createPage = (data) => {
	return db.page.create({
		usersessionid: data.usersessionid,
		labid: data.labid,
		pagename: data.pagename,
		completiontime: data.completiontime,
	}).then((page) => {
		return page.pageid;
	}).catch((err) => {
		console.log(err);
	})
};
