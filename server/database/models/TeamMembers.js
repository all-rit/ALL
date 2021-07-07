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
            network: { type: DataTypes.TEXT },
            work: { type: DataTypes.TEXT },
            datesActive: { type: DataTypes.TEXT }
        },
        { tableName: 'team_members' }
    );
    TeamMembers.sync();
    // TeamMembers.sync({
    //     force: true
    // }).then(function(){
    //     TeamMembers.create({
    //         firstName: "Saad",
    //         lastName: "Kahn",
    //         title: "Project Manager",
    //         imageURL: "https://all.rit.edu/static/media/Saad_Kahn.0588d381.jpg",
    //         websiteURL: "https://www.linkedin.com/in/saad-khan23/",
    //         network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         // datesActive: { type: DataTypes.TEXT }
    //     });
    //     TeamMembers.create({
    //         firstName: "Heather",
    //         lastName: "Moses",
    //         title: "Full Stack Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Heather_Moses.16193a57.jpg",
    //         websiteURL: "https://www.linkedin.com/in/heather-moses/",
    //         network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         // datesActive: { type: DataTypes.TEXT }
    //     });
    //     TeamMembers.create({
    //         firstName: "Christopher",
    //         lastName: "Savan",
    //         title: "Full Stack Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Christopher_Savan.7d22b015.jpg",
    //         websiteURL: "https://www.linkedin.com/in/christophersavan/",
    //         network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         // datesActive: { type: DataTypes.TEXT }
    //     });
    //     TeamMembers.create({
    //         firstName:  "Su Thit",
    //         lastName: "Thazin",
    //         title: "Full Stack Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Su_Thit_Thazin.1837a06b.jpg",
    //         websiteURL: "https://www.linkedin.com/in/suthitthazin/",
    //         network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         // datesActive: { type: DataTypes.TEXT }
    //     });
    //     TeamMembers.create({
    //         firstName: "Mark",
    //         lastName: "Sternefeld",
    //         title: "Full Stack Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Mark_Sternefeld.403d4119.jpg",
    //         websiteURL: "https://www.linkedin.com/in/mark-ferenc-sternefeld/",
    //         network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         // datesActive: { type: DataTypes.TEXT }
    //     });
    //     TeamMembers.create({
    //         firstName: "Shantanav",
    //         lastName: "Saurav",
    //         title: "Full Stack Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Shantanav_Saurav.10e480ed.jpg",
    //         websiteURL: "https://www.linkedin.com/in/shantanav/",
    //         network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         // datesActive: { type: DataTypes.TEXT }
    //     });
    // })
    return TeamMembers;
};