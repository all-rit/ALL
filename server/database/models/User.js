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
			//todo add last initial
			lastinitial: { type: DataTypes.TEXT },
			image: { type: DataTypes.TEXT },  //todo get rid of this potentially
		},
		{ tableName: 'users' }
	);
	User.sync();
	return User;
};
