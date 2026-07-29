module.exports = (sequelize, DataTypes) => {
  const Schools = sequelize.define(
      'Schools',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        schoolName: {type: DataTypes.TEXT},
        imageURL: {type: DataTypes.TEXT},
        websiteURL: {type: DataTypes.TEXT},
      },
      {tableName: 'participating_schools'},
  );

  Schools.sync();
  return Schools;
};

