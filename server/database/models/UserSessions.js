module.exports = (sequelize, DataTypes) => {
  const UserSessions = sequelize.define(
      'UserSessions',
      {
        id: {
          type: DataTypes.BIGINT,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        userId: {
          type: DataTypes.BIGINT,
        },
        jwt: {
          type: DataTypes.TEXT
        },
        issuedAt: {
          type: DataTypes.DATE
        }
      },
      {
        tableName: 'user_sessions'
      },
  );

  UserSessions.sync();
  return UserSessions;
};
