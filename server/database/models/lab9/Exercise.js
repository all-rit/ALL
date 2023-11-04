module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define(
      'ExerciseLab9', {
        ExerciseId: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        isAddressComplete: {
          type: DataTypes.BOOLEAN,
        },
        isDateComplete: {
          type: DataTypes.BOOLEAN,
        },
        isNavComplete: {
          type: DataTypes.BOOLEAN,
        },
        isExerciseComplete: {
          type: DataTypes.BOOLEAN,
        },
      }, {
        tableName: 'lab9_exercise',
      },
  );
  Exercise.sync();
  return Exercise;
};
