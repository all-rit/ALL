module.exports = (sequelize, DataTypes) => {
  const Repair = sequelize.define(
      'RepairLab2',
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
        background: {
          type: DataTypes.STRING,
        },
        correctColor: {
          type: DataTypes.STRING,
        },
        incorrectColorOne: {
          type: DataTypes.STRING,
        },
        incorrectColorTwo: {
          type: DataTypes.STRING,
        },
      },
      {tableName: 'lab2_repair'},
  );
  Repair.sync();
  return Repair;
};
