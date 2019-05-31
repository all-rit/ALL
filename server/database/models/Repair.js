module.exports = (sequelize, DataTypes) => {
	const Repair = sequelize.define(
		'Repair',
		{
			repairid: {
				type: DataTypes.INTEGER,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			loginid: {
				type: DataTypes.INTEGER
			},
			availablemessage: {
				type: DataTypes.STRING
			},
			unavailablemessage: {
				type: DataTypes.STRING
			},
			availablebackgroundcolor: {
				type: DataTypes.STRING
			},
			unavailablebackgroundcolor: {
				type: DataTypes.STRING
			}
		},
		{ tableName: 'audiocue_repair' }
	);

	return Repair;
};
