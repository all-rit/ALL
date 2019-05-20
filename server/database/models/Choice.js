module.exports = (sequelize, DataTypes) => {
	const Choice = sequelize.define(
		'Choice',
		{
			ChoiceID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			BoxNumber: { type: DataTypes.INTEGER },
			Correct: { type: DataTypes.BOOLEAN }
		},
		{ tableName: 'AudioCue_Choice' }
	);

	Choice.associate = (models) => {
		Choice.belongsTo(models.Round, { as: 'round', foreignKey: 'RoundID' });
	};

	return Choice;
};
