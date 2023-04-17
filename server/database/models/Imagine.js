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
          type: DataTypes.INTEGER,
        },
        experientialMain: {
          type: DataTypes.JSON,
        },
        experientialProtanopia: {
          type: DataTypes.JSON,
        },
        discomfortCount: {
          type: DataTypes.INTEGER,
        },
        // avatar: {type: DataTypes.JSON},
        // squad: {type: DataTypes.JSON},
        // lobbyMessages: {type: DataTypes.JSON},
      }, {tableName: 'imagine23'},
  );

  Imagine.sync();
  return Imagine;
};
