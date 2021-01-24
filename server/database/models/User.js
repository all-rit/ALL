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
			image: { type: DataTypes.TEXT },
		},
		{ tableName: 'users' }
	);
	User.sync();
	return User;
};
