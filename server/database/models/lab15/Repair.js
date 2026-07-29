const MODEL_REPAIR = 'ModelRepair';
module.exports = (sequelize, DataTypes) => {
  const IdentityRepair = sequelize.define('RepairLab15',
      {
        repairId: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        userid: {
          type: DataTypes.BIGINT,
        },
        section: {
          type:
            DataTypes.ENUM(
                MODEL_REPAIR,
            ),
        },
        repair: {
          type: DataTypes.JSON,
        },
        isComplete: {
          type: DataTypes.BOOLEAN,
        },
        attemptTime: {
          type: DataTypes.DATE,
        },
        repairCount: {
          type: DataTypes.BIGINT,
        },
      },
      {
        tableName: 'lab15_repair',
      },
  );
  IdentityRepair.sync();
  return IdentityRepair;
};
