const db = require('../database');
exports.createPage = (data) => {
	return db.page
		.findOne({
				where:
					{
						usersessionid:data.usersessionid,
						labid:data.labid,
						pagename: data.pagename
					}
			}
		).then((page)=> {
			if (page !== null) {
				page.completiontime = data.completiontime;
				page.save();
				return page.pageid
			} else {
				db.page.create({
					usersessionid: data.usersessionid,
					labid: data.labid,
					pagename: data.pagename,
					completiontime: data.completiontime
				}).then((page) => {
						return page.pageid
					}
				);
			}
		})
		.catch((err) => {
		console.log(err);
	})
};
