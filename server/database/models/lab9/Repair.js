/* eslint-disable new-cap */
const ADDRESS_REPAIR = 'address-repair';
const DATE_REPAIR = 'date-repair';
const NAV_REPAIR = 'nav-repair';
module.exports = (sequelize, DataTypes) => {
  const DateRepair = sequelize.define('RepairLab9',
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
          type: DataTypes.ENUM(ADDRESS_REPAIR, DATE_REPAIR, NAV_REPAIR),
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
        tableName: 'lab9_repair',
      },
  );

  DateRepair.sync();
  return DateRepair;
};

