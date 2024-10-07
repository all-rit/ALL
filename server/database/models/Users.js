/* eslint-disable new-cap */
/* eslint-disable no-tabs */
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
      'Users',
      {
        userid: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {type: DataTypes.TEXT},
        lastinitial: {type: DataTypes.CHAR(1)},
        email1: {
          type: DataTypes.TEXT,
          unique: {
            args: true,
            msg: 'Email is not unique!',
          },
        },
        email2: {
          type: DataTypes.TEXT,
          unique: {
            args: true,
            msg: 'Email is not unique!',
          },
        },
        userpfp: { type: DataTypes.TEXT }
      },
      {tableName: 'users'},
  );
  Users.sync();
  // Users.sync({
  // 	force: false
  // }).then(function() {
  // 	Users.create({
  // 		firstname: 'Samuel',
  // 		lastinitial: 'M',
  // 		email1: 'sam@test.com',
  // 	});
  // 	Users.create({
  // 		firstname: 'Su Thit',
  // 		lastinitial: 'T',
  // 		email1: 'stthazi@mock.com',
  // 		email2: 'stthazi2@test.com'
  // 	})
  // 	Users.create({
  // 		firstname: 'John',
  // 		lastinitial: 'D',
  // 		email1: 'johndoe@test.com',
  // 	});
  // 	Users.create({
  // 		firstname: 'Jane',
  // 		lastinitial: 'D',
  // 		email1: 'janedoe@test.com',
  // 	});
  // })
  return Users;
};
