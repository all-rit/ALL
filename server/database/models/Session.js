module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define(
      'Session',
      {
        usersessionid: {
          type: DataTypes.BIGINT,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        userid: {
          type: DataTypes.INTEGER,
        },
      },
      {tableName: 'session'},
  );

  Session.sync();
  return Session;
};
