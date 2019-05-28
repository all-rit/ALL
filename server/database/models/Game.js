module.exports = (sequelize, DataTypes) => {
	const Game = sequelize.define(
		'Game',
		{
			GameID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			Score: { type: DataTypes.INTEGER, defaultValue: 0 },
			Playthrough: { type: DataTypes.INTEGER },
			TimePlayed: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
		},
		{ tableName: 'audiocue_game' }
	);

	Game.associate = (models) => {
		Game.belongsTo(models.Login, { as: 'login', foreignKey: 'LoginID' });
		Game.hasMany(models.Round, { as: 'rounds', foreignKey: 'GameID' });
	};

	return Game;
};
