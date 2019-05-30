module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			userid: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			firstname: { type: DataTypes.TEXT },
			nickname: { type: DataTypes.TEXT },
			admin: { type: DataTypes.BOOLEAN, defaultValue: false }
		},
		{ tableName: 'users' }
	);

	return User;
};
