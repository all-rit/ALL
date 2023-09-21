module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define(
      'ExerciseLab10',
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
        weights: {
          type: DataTypes.JSON,
        },
      },
      {tableName: 'lab10_exercise'},
  );
  Exercise.sync();
  return Exercise;
};
