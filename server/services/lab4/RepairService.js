const db = require('../../database');

exports.submitChangeButton = (data) => {
	const usersessionid = data.usersessionid;
	const repairid = data.repairid;
	const height = data.height;
	const width = data.width;
	if(usersessionid){
		return db.RepairLab4
			.findOne({
					where:
						{
							repairid:repairid,
						}
				}
			).then((repair)=> {
				if(repair !== null) {
					repair.height = height;
					repair.width = width;
					repair.save();
				}
				else{
					db.RepairLab4.create({
						usersessionid:usersessionid,
						height:height,
						width: width,
					}).then((repair) => {
						return repair.repairid;
					});
				}
			}).catch((err) => {
				console.log(err);
			});
	}
	return Promise.resolve();
};
