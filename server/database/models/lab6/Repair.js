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
          type: DataTypes.STRING,
        },
        yearsexperience: {
          type: DataTypes.INTEGER,
        },
        availability: {
          type: DataTypes.STRING,
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
