module.exports = (sequelize, DataTypes) => {
  const Professors = sequelize.define(
      'Professors',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        firstName: {type: DataTypes.TEXT},
        lastName: {type: DataTypes.TEXT},
        title: {type: DataTypes.TEXT},
        affiliation: {type: DataTypes.TEXT},
        imageURL: {type: DataTypes.TEXT},
        socials: {type: DataTypes.JSON},
        aboutme: {type: DataTypes.TEXT},
        // websiteURL: { type: DataTypes.TEXT },
        // network: { type: DataTypes.TEXT },
        work: {type: DataTypes.TEXT},
        datesActive: {type: DataTypes.TEXT},
      },
      {tableName: 'professors'},
  );
  Professors.sync();
  return Professors;
};
