/* eslint-disable max-len */
/* eslint-disable no-irregular-whitespace */

module.exports = (sequelize, DataTypes) => {
  const Labs = sequelize.define(
      'Labs', {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        labName: {type: DataTypes.TEXT},
        labShortName: {type: DataTypes.TEXT},
        category: {type: DataTypes.TEXT},
        thumbnailImageURL: {type: DataTypes.TEXT},
        shortDescription: {type: DataTypes.TEXT},
        fullDescription: {type: DataTypes.TEXT},
        learningObjectives: {type: DataTypes.JSON},
        authors: {type: DataTypes.TEXT},
        labURL: {type: DataTypes.TEXT},
        copyrightAttributes: {type: DataTypes.TEXT},
        about: {type: DataTypes.TEXT},
        reading: {type: DataTypes.JSON},
        reinforcement: {type: DataTypes.JSON},
        quiz: {type: DataTypes.JSON},
        difficulty: {type: DataTypes.INTEGER},
        slideshow: {type: DataTypes.TEXT},
        walkthroughVideo: {type: DataTypes.TEXT},
        isActive: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
      }, {tableName: 'labs'},
  );

  Labs.sync();
  return Labs;
};
