module.exports = (sequelize, DataTypes) => {
  const Imagine = sequelize.define(
      'Imagine23', {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        userid: {
          type: DataTypes.TEXT,
        },
        experientialMain: {
          type: DataTypes.JSON,
        },
        experientialProtanopia: {
          type: DataTypes.JSON,
        },
        discomfortCount: {
          type: DataTypes.JSON,
        },
        preSurvey: {
          type: DataTypes.JSON,
        },
        postSurvey: {
          type: DataTypes.JSON,
        },
        readMoreCount: {
          type: DataTypes.INTEGER,
        },
        readMoreTimeElapsed: {
          type: DataTypes.JSON,
        },
        // avatar: {type: DataTypes.JSON},
        // squad: {type: DataTypes.JSON},
        // lobbyMessages: {type: DataTypes.JSON},
      }, {tableName: 'imagine23'},
  );

  Imagine.sync();
  return Imagine;
};
