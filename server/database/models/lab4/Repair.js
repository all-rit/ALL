module.exports = (sequelize, DataTypes) => {
  const Repair = sequelize.define(
      'RepairLab4',
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
        height: {
          type: DataTypes.INTEGER,
        },
        width: {
          type: DataTypes.INTEGER,
        },
        skiptomain: {
          type: DataTypes.STRING,
        },
        tabindex: {
          type: DataTypes.INTEGER,
        },
      },
      {tableName: 'lab4_repair'},
  );
  Repair.sync();
  return Repair;
};
