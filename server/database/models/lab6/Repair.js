module.exports = (sequelize, DataTypes) => {
  const Repair = sequelize.define(
      'RepairLab6',
      {
        repairid: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        userid: {
          type: DataTypes.INTEGER,
        },
        appearance: {
          type: DataTypes.INTEGER,
        },
        yearsexperience: {
          type: DataTypes.INTEGER,
        },
        availability: {
          type: DataTypes.INTEGER,
        },
        expectedpay: {
          type: DataTypes.INTEGER,
        },
      },
      {tableName: 'lab6_repair'},
  );
  Repair.sync();
  return Repair;
};
