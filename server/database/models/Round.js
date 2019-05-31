module.exports = (sequelize, DataTypes) => {
	const Round = sequelize.define(
		'Round',
		{
			roundid: {
				type: DataTypes.INTEGER,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			gameid: {
				type: DataTypes.INTEGER
				
			},
			hintused: { type: DataTypes.BOOLEAN },
			soundoption: { type: DataTypes.BOOLEAN }
		},
		{ tableName: 'audiocue_round' }
	);

	return Round;
};
