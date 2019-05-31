module.exports = (sequelize, DataTypes) => {
	const Game = sequelize.define(
		'Game',
		{
			gameid: {
				type: DataTypes.INTEGER,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			loginid: {
				type: DataTypes.INTEGER
			},
			score: { type: DataTypes.INTEGER, defaultValue: 0 },
			playthrough: { type: DataTypes.INTEGER },
			timeplayed: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
		},
		{ tableName: 'audiocue_game' }
	);

	return Game;
};
