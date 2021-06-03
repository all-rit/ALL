module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			userid: {
				type: DataTypes.INTEGER,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			firstname: { type: DataTypes.TEXT },
			lastinitial: { type: DataTypes.CHAR(1) },
			isInstructor: { type: DataTypes.BOOLEAN },
			email1: { type: DataTypes.TEXT },
			email2: { type: DataTypes.TEXT },
			image: { type: DataTypes.TEXT },  //todo get rid of this potentially
		},
		{ tableName: 'users' }
	);
	User.sync();
	// User.sync({
	// 	force: true
	// }).then(function() {
	// 	User.create({
	// 		firstname: 'Samuel',
	// 		lastinitial: 'M',
	// 		isInstructor: true,
	// 		email1: 'sam@yahoo.com',
	// 	});
	// 	User.create({
	// 		firstname: 'Su Thit',
	// 		lastinitial: 'T',
	// 		isInstructor: false,
	// 		email1: 'stthazi@yahoo.com'
	// 	})
	// })
	return User;
};
