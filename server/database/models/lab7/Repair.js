module.exports = (sequelize, DataTypes) => {
  const Repair = sequelize.define(
      'RepairLab7',
      {
        repairid: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        usersessionid: {
          type: DataTypes.BIGINT,
        },
        repair: {
          type: DataTypes.STRING,
        },
        report: {
          type: DataTypes.JSON,
        },
      },
      {tableName: 'lab7_repair'},
  );
  Repair.sync();
  return Repair;
};
