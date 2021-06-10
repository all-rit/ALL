module.exports = (sequelize, DataTypes) => {
    const TeamMembers = sequelize.define(
        'TeamMembers',
        {
            id: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            firstName: { type: DataTypes.TEXT },
            lastName: { type: DataTypes.TEXT },
            title: { type: DataTypes.TEXT },
            imageURL: { type: DataTypes.TEXT },
            websiteURL: { type: DataTypes.TEXT },
            work: { type: DataTypes.TEXT },
            datesActive: { type: DataTypes.TEXT }
        },
        { tableName: 'team_members' }
    );
    TeamMembers.sync();
    return TeamMembers;
};