const db = require('../database');
exports.createPage = (data) => {
	if (data.usersessionid){
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
	}
	return Promise.resolve();

};
