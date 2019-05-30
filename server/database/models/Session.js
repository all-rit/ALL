module.exports = (sequelize, DataTypes) => {
	const Session = sequelize.define(
		'Session',
		{
			usersessionid : {
				type: DataTypes.NUMBER(21),
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			userid: {
				type: DataTypes.INTEGER,
				allowNull: false
			}
		},
		{ tableName: 'session' }
	);

	return Session;
};
