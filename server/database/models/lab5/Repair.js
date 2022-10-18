module.exports = (sequelize, DataTypes) => {
  const Repair = sequelize.define(
      'RepairLab5',
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
        activity: {
          type: DataTypes.STRING,
        },
        repair: {
          type: DataTypes.STRING,
        },
      },
      {tableName: 'lab5_repair'},
  );
  Repair.sync();
  return Repair;
};
