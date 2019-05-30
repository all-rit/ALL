module.exports = (sequelize, DataTypes) => {
	const Game = sequelize.define(
		'Game',
		{
			gameid: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			score: { type: DataTypes.INTEGER, defaultValue: 0 },
			playthrough: { type: DataTypes.INTEGER },
			timeplayed: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
		},
		{ tableName: 'audiocue_game' }
	);

	Game.associate = (models) => {
		Game.belongsTo(models.Login, { as: 'login', foreignKey: 'loginid' });
		Game.hasMany(models.Round, { as: 'rounds', foreignKey: 'gameid' });
	};

	return Game;
};
