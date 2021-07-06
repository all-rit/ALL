module.exports = (sequelize, DataTypes) => {
	const Exercise = sequelize.define(
		'ExerciseLab5',
		{
			exerciseid: {
				type: DataTypes.INTEGER,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			usersessionid: {
				type: DataTypes.BIGINT
			},
			correct: { type: DataTypes.BOOLEAN },
			question: { type: DataTypes.STRING },
			selectedoption: { type: DataTypes.STRING },
			options: { type: DataTypes.STRING }
		},
		{ tableName: 'lab5_exercise' }
	);
	Exercise.sync();
	return Exercise;
};
