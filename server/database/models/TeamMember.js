module.exports = (sequelize, DataTypes) => {
    const TeamMember = sequelize.define(
        'TeamMember',
        {
            teamMemberID: {
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
        { tableName: 'team_member' }
    );
    TeamMember.sync();
    return TeamMember;
};