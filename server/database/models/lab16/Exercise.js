
//contains similar setup to Imagine 2026 Lab
module.exports = (sequelize, DataTypes) => {
  const ExerciseLab16 = sequelize.define(
      'ExerciseLab16', {
        exerciseid: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        userid: { 
            type: DataTypes.BIGINT
        },
        isExerciseComplete: {
          type: DataTypes.BOOLEAN,
        },
        hasViewed: {
          type: DataTypes.BOOLEAN,
        },
        attemptTime: {
          type: DataTypes.DATE,
        },
        attemptCount: {
          type: DataTypes.INTEGER,
        },
        chatReply: {
          type: DataTypes.TEXT,
        },
        teammateAssignment: {
          type: DataTypes.TEXT,
        },

    },
    { tableName: "lab16_Exercise" },
  );

  ExerciseLab16.sync();
  return ExerciseLab16;
};
