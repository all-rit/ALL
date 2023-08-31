const {sequelize, DataTypes} = require('sequelize');

const Repair = sequelize.define(
    'RepairLab8',
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
    }, {
      tableName: 'lab8_repair',
    },
);

(async () => {
  await sequelize.sync({});
  return Repair;
});

module.exports = {
  Repair,
};
