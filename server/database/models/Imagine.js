module.exports = (sequelize, DataTypes) => {
  const Imagine23 = sequelize.define(
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
        section: {
          type: DataTypes.ENUM,
          values: ['experiential',
            'discomfortCountPOC',
            'discomfortCountNonPOC',
            'control'],
        },
        study: {
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
        readingSectionPagePosition: {
          type: DataTypes.JSON,
        },
      }, {tableName: 'imagine23'},
  );

  Imagine23.sync();
  return Imagine23;
};
