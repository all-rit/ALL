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
        userid: {
          type: DataTypes.BIGINT,
        },
        report: {
          type: DataTypes.JSON,
        },
      },
      {tableName: 'lab7_exercise'},
  );
  Exercise.sync();
  return Exercise;
};
