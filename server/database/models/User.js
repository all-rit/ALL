module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			UserID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			FirstName: { type: DataTypes.STRING },
			NickName: { type: DataTypes.STRING },
			Admin: { type: DataTypes.BOOLEAN, defaultValue: false }
		},
		{ tableName: 'Users' }
	);

	User.associate = (models) => {
		User.hasMany(models.Session, { as: 'sessions', foreignKey: 'UserID' });
	};

	return User;
};
