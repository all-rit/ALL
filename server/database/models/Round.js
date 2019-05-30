module.exports = (sequelize, DataTypes) => {
	const Round = sequelize.define(
		'Round',
		{
			roundid: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			hintused: { type: DataTypes.BOOLEAN },
			soundoption: { type: DataTypes.BOOLEAN }
		},
		{ tableName: 'audiocue_round' }
	);

	Round.associate = (models) => {
		Round.belongsTo(models.Game, { as: 'game', foreignKey: 'gameid' });
		Round.hasMany(models.Choice, { as: 'choices', foreignKey: 'roundid' });
	};

	return Round;
};
