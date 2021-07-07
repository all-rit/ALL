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
			exerciseid: {
				type: DataTypes.INTEGER
				
			},
			hintused: { type: DataTypes.BOOLEAN },
			soundoption: { type: DataTypes.BOOLEAN }
		},
		{ tableName: 'lab1_round' }
	);
	Round.sync();
	return Round;
};
