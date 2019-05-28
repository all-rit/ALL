module.exports = (sequelize, DataTypes) => {
	const Round = sequelize.define(
		'Round',
		{
			RoundID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			HintUsed: { type: DataTypes.BOOLEAN },
			SoundOption: { type: DataTypes.BOOLEAN }
		},
		{ tableName: 'audiocue_round' }
	);

	Round.associate = (models) => {
		Round.belongsTo(models.Game, { as: 'game', foreignKey: 'GameID' });
		Round.hasMany(models.Choice, { as: 'choices', foreignKey: 'RoundID' });
	};

	return Round;
};
