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
			userid: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			usersessionid: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			location: { type: DataTypes.INET },
			login: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
		},
		{ tableName: 'login' }
	);

	return Login;
};
