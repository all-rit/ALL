module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('ExerciseLab11',
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
        isRepairWordCountComplete: {
          type: DataTypes.BOOLEAN,
        },
        isRepairSentenceCountComplete: {
          type: DataTypes.BOOLEAN,
        },
        isRepairComplexWordCountComplete: {
          type: DataTypes.BOOLEAN,
        },
        attemptTime: {
          type: DataTypes.DATE,
        },
        attemptCount: {
          type: DataTypes.INTEGER,
        },
      },
      {
        tableName: 'lab11_exercise',
      },
  );

  Exercise.sync();
  return Exercise;
};


