module.exports = (sequelize, DataTypes) =>{
  const Exercise = sequelize.define(
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
        tableName: 'lab8_exercise',
      },
  );
  Exercise.sync();
  return Exercise;
};
