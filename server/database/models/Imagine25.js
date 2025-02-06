module.exports = (sequelize, DataTypes) => {
  const Imagine25 = sequelize.define(
      'Imagine25', {
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
      }, {tableName: 'imagine25'},
  );

  Imagine25.sync();
  return Imagine25;
};
