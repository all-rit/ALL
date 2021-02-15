module.exports = (sequelize, DataTypes) => {
	const Game = sequelize.define(
		'GameLab5',
		{
			gameid: {
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
		},
		{ tableName: 'lab5_game' }
	);
	Game.sync();
	return Game;
};
