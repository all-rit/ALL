module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define(
      'ExerciseLab7',
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
        playthrough: {type: DataTypes.INTEGER},
        score: {type: DataTypes.INTEGER},
      },
      {tableName: 'lab7_exercise'},
  );
  Exercise.sync();
  return Exercise;
};
