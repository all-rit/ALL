module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
      'Users',
      {
        id: {
          type: DataTypes.BIGINT,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        googleAccountId: {
          type: DataTypes.TEXT,
          unique: true,
        },
        email: {
          type: DataTypes.TEXT
        },
        firstName: { 
          type: DataTypes.TEXT,
        },
        lastInitial: {
          type: DataTypes.CHAR(1)
        },
        pfp: {
          type: DataTypes.TEXT
        }
      },
      {
        tableName: 'users'
      },
  );
  Users.sync();
  return Users;
};
