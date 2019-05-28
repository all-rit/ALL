module.exports = (sequelize, DataTypes) => {
	const Login = sequelize.define(
		'Login',
		{
			LoginID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			Location: { type: DataTypes.INET },
			Login: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
		},
		{ tableName: 'login' }
	);

	Login.associate = (models) => {
		Login.belongsTo(models.User, { as: 'user', foreignKey: 'UserID' });
		Login.belongsTo(models.Session, { as: 'session', foreignKey: 'UserSessionID' });
		Login.hasMany(models.Game, { as: 'games', foreignKey: 'LoginID' });
		Login.hasMany(models.Repair, { as: 'repairs', foreignKey: 'LoginID' });
	};

	return Login;
};
