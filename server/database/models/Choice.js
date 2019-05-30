module.exports = (sequelize, DataTypes) => {
	const Choice = sequelize.define(
		'Choice',
		{
			choiceid: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			boxnumber: { type: DataTypes.INTEGER },
			correct: { type: DataTypes.BOOLEAN }
		},
		{ tableName: 'audiocue_choice' }
	);

	Choice.associate = (models) => {
		Choice.belongsTo(models.Round, { as: 'round', foreignKey: 'roundid' });
	};

	return Choice;
};
