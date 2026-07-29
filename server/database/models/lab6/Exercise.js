module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define(
      'ExerciseLab6',
      {
        exerciseid: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        usersessionid: {
          type: DataTypes.BIGINT,
        },
        avatar: {type: DataTypes.JSON},
        qualificationquestions: {type: DataTypes.JSON},
        aianalysisquestion: {type: DataTypes.JSON},
        hiredcanidates: {type: DataTypes.JSON},
        aireasoningquestion: {type: DataTypes.JSON},
        fixedhiredcanidates: {type: DataTypes.JSON},
      },
      {tableName: 'lab6_exercise'},
  );
  Exercise.sync();
  return Exercise;
};
