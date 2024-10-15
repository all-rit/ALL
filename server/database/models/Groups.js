/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const Groups = sequelize.define(
      'Groups',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        instructorUserID: {type: DataTypes.INTEGER},
        groupName: {type: DataTypes.TEXT},
        createdDate: {type: DataTypes.DATE},
        color: {type: DataTypes.TEXT},
        isActive: {type: DataTypes.BOOLEAN},
        code: {
          type: DataTypes.TEXT,
          unique: {
            args: true,
            msg: 'Class code is not unique!',
          },
        },
      },
      {tableName: 'groups'},
  );
  Groups.sync();

  return Groups;
};
