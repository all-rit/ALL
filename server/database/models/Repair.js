module.exports = (sequelize, DataTypes) => {
	const Repair = sequelize.define(
		'Repair',
		{
			RepairID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			AvailableMessage: {
				type: DataTypes.STRING
			},
			UnavailableMessage: {
				type: DataTypes.STRING
			},
			AvailableBackgroundColor: {
				type: DataTypes.STRING
			},
			UnavailableBackgroundColor: {
				type: DataTypes.STRING
			}
		},
		{ tableName: 'AudioCue_Repair' }
	);

	Repair.associate = (models) => {
		Repair.belongsTo(models.Login, { as: 'login', foreignKey: 'LoginID' });
	};

	return Repair;
};
