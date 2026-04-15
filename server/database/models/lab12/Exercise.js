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
        isFormRepairComplete: {
          type: DataTypes.BOOLEAN,
        },
        isDatabaseRepairComplete: {
          type: DataTypes.BOOLEAN,
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
        tableName: 'lab12_exercise',
      },
  );

  Exercise.sync();
  return Exercise;
};
