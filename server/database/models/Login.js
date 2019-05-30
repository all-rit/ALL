module.exports = (sequelize, DataTypes) => {
	const Login = sequelize.define(
		'Login',
		{
			loginid: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			location: { type: DataTypes.INET },
			login: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
		},
		{ tableName: 'login' }
	);

	Login.associate = (models) => {
		Login.belongsTo(models.User, { as: 'user', foreignKey: 'userid' });
		Login.belongsTo(models.Session, { as: 'session', foreignKey: 'usersessionid' });
		Login.hasMany(models.Game, { as: 'games', foreignKey: 'loginid' });
		Login.hasMany(models.Repair, { as: 'repairs', foreignKey: 'loginid' });
	};

	return Login;
};
