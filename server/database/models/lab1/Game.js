module.exports = (sequelize, DataTypes) => {
	const Game = sequelize.define(
		'GameLab1',
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
			score: { type: DataTypes.INTEGER, defaultValue: 0 },
			playthrough: { type: DataTypes.INTEGER },
			timeplayed: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
		},
		{ tableName: 'lab1_game' }
	);
	Game.sync();
	return Game;
};
