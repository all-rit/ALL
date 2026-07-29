module.exports = (sequelize, DataTypes) => {
  const GroupLabs = sequelize.define(
      'GroupLabs',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        groupID: DataTypes.INTEGER,
        labID: DataTypes.INTEGER,
        isActive: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
      },
      {tableName: 'group_labs'},
  );
  GroupLabs.sync();

  return GroupLabs;
};
