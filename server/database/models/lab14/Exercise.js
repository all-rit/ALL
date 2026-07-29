module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('ExerciseLab14',
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
        attemptTime: {
          type: DataTypes.DATE,
        },
        isExerciseComplete: {
          type: DataTypes.BOOLEAN,
        },
        hasViewed: {
          type: DataTypes.BOOLEAN,
        },
        attemptCount: {
          type: DataTypes.INTEGER,
        },
      },
      {
        tableName: 'lab14_exercise',
      },
  );

  Exercise.sync();
  return Exercise;
};
