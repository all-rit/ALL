module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('ExerciseLab9',
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
        isAddressComplete: {
          type: DataTypes.BOOLEAN,
        },
        isDateComplete: {
          type: DataTypes.BOOLEAN,
        },
        isNavComplete: {
          type: DataTypes.BOOLEAN,
        },
        attemptTime: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: 'lab9_exercise',
      },
  );

  Exercise.sync();
  return Exercise;
};


