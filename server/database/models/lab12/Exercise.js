module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('ExerciseLab12',
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
        isRepairComplete: {
          type: DataTypes.BOOLEAN,
        },
        attemptTime: {
          type: DataTypes.Date,
        },
        attemptCount: {
          type: DataTypes.INTEGER,
        },
      },
      {
        tableName: 'lab12_exercise',
      },
  );

  Exercise.sync();
  return Exercise;
};
