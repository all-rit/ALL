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
			}
		},
		{ tableName: 'session' }
	);

	Session.associate = (models) => {
		Session.belongsTo(models.User, { as: 'user', foreignKey: 'userid' });
		Session.hasMany(models.Login, { as: 'logins', foreignKey: 'usersessionid' });
	};

	return Session;
};
