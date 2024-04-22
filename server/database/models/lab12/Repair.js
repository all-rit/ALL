const FORM_REPAIR = 'FormRepair';
const DATABASE_REPAIR = 'DatabaseRepair';
module.exports = (sequelize, DataTypes) => {
  const IdentityRepair = sequelize.define('RepairLab12',
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
            DataTypes.enum(
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
        tableName: 'lab12_repair',
      },
  );
  IdentityRepair.sync();
  return IdentityRepair;
};
