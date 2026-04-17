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
            'expression',
            'control'],
        },
        preSurvey: {
          type: DataTypes.JSON,
        },
        teammateChat: {
          type: DataTypes.JSON,
        },
        postSurvey: {
          type: DataTypes.JSON,
        },
        avatar: {
          type: DataTypes.JSON,
        },
        teammateAvatar: {
          type: DataTypes.JSON,
        },
        opponentAvatar: {
          type: DataTypes.JSON,
        },
      },
      {tableName: 'imagine25'},
  );

  Imagine25.sync();
  return Imagine25;
};
