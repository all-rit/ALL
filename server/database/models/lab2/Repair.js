module.exports = (sequelize, DataTypes) => {
	const Repair = sequelize.define(
		'RepairLab2',
		{
			repairid: {
				type: DataTypes.INTEGER,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			usersessionid: {
				type: DataTypes.BIGINT
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
		{ tableName: 'lab2_repair' }
	);
	Repair.sync();
	return Repair;
};
