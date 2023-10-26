module.exports = (sequelize, DataTypes) => {
  const AddressRepair = sequelize.define('AddressRepairLab9',
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
        repair: {
          type: DataTypes.JSON,
        },
        isComplete: {
          type: DataTypes.BOOLEAN,
        },
        attemptTime: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: 'lab9_address_repair',
      },
  );

  AddressRepair.sync();
  return AddressRepair;
};
