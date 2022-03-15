module.exports = (sequelize, DataTypes) => {
	const Exercise = sequelize.define(
		'ExerciseLab7',
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
		{ tableName: 'lab7_exercise' }
	);
	Exercise.sync();
	return Exercise;
};
