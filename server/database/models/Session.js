module.exports = (sequelize, DataTypes) => {
	const Session = sequelize.define(
		'Session',
		{
			UserSessionID: {
				type: DataTypes.NUMBER(21),
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			}
		},
		{ tableName: 'Session' }
	);

	Session.associate = (models) => {
		Session.belongsTo(models.User, { as: 'user', foreignKey: 'UserID' });
		Session.hasMany(models.Login, { as: 'logins', foreignKey: 'UserSessionID' });
	};

	return Session;
};
