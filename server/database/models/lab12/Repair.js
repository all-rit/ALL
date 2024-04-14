/* eslint-disable new-cap */
const IDENTITY_REPAIR = 'identityRepair';
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
            DataTypes.ENUM(
                IDENTITY_REPAIR,
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
  );
  IdentityRepair.sync();
  return IdentityRepair;
};
