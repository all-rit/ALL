module.exports = (sequelize, DataTypes) => {
	const Session = sequelize.define(
		'Session',
		{
			usersessionid : {
				type: DataTypes.NUMBER(21),
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			userid: {
				type: DataTypes.INTEGER
			}
		},
		{ tableName: 'session' }
	);

	return Session;
};
