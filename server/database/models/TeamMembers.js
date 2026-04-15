module.exports = (sequelize, DataTypes) => {
  const TeamMembers = sequelize.define(
      'TeamMembers',
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
        imageURL: {type: DataTypes.TEXT},
        socials: {type: DataTypes.JSON},
        // websiteURL: { type: DataTypes.TEXT },
        // network: { type: DataTypes.TEXT },
        work: {type: DataTypes.TEXT},
        datesActive: {type: DataTypes.TEXT},
        isActive: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
        aboutMe: {type: DataTypes.TEXT},
        favoriteLab: {type: DataTypes.INTEGER},
        labCredits: {type: DataTypes.JSON},
      },
      {tableName: 'team_members'},
  );

  TeamMembers.sync();
  return TeamMembers;
};
