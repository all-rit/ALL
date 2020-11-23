module.exports = (sequelize, DataTypes) => {
	const Login = sequelize.define(
		'Login',
		{
			loginid: {
				type: DataTypes.INTEGER,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			userid: {
				type: DataTypes.INTEGER
			},
			usersessionid: {
				type: DataTypes.NUMBER(21)
			},
			location: { type: DataTypes.INET },
			login: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
		},
		{ tableName: 'login' }
	);
	Login.sync();
	return Login;
};
