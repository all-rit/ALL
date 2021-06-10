module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define(
		'Users',
		{
			userid: {
				type: DataTypes.INTEGER,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			firstname: { type: DataTypes.TEXT },
			lastinitial: { type: DataTypes.CHAR(1) },
			email1: { type: DataTypes.TEXT },
			email2: { type: DataTypes.TEXT },
			image: { type: DataTypes.TEXT },  //todo get rid of this potentially
		},
		{ tableName: 'users' }
	);
	Users.sync();
	// Users.sync({
	// 	force: true
	// }).then(function() {
	// 	Users.create({
	// 		firstname: 'Samuel',
	// 		lastinitial: 'M',
	// 		email1: 'sam@yahoo.com',
	// 	});
	// 	Users.create({
	// 		firstname: 'Su Thit',
	// 		lastinitial: 'T',
	// 		email1: 'stthazi@yahoo.com'
	// 	})
	// })
	return Users;
};
