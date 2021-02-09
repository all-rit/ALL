module.exports = (sequelize, DataTypes) => {
	const Repair = sequelize.define(
		'RepairLab5',
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
			cowAltValue: {
				type: DataTypes.STRING
			},
			carAltValue: {
				type: DataTypes.STRING
			},
			burgerAltValue: {
				type: DataTypes.STRING
			},
			catAltValue: {
				type: DataTypes.STRING
			}
		},
		{ tableName: 'lab5_repair' }
	);
	Repair.sync();
	return Repair;
};
