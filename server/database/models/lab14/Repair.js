const FORM_REPAIR = 'FormRepair';
const DATABASE_REPAIR = 'DatabaseRepair';
module.exports = (sequelize, DataTypes) => {
  const IdentityRepair = sequelize.define('RepairLab14',
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
                FORM_REPAIR,
                DATABASE_REPAIR,
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
        tableName: 'lab14_repair',
      },
  );
  IdentityRepair.sync();
  return IdentityRepair;
};
