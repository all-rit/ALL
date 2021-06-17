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
    // TeamMembers.sync({
    //     force: true
    // }).then(function(){
    //     TeamMembers.create({
    //         firstName: "Daniel",
    //         lastName: "Krutz",
    //         title: "PI",
    //         imageURL: "https://all.rit.edu/static/media/Professor_Krutz.1ac30542.jpg",
    //         websiteURL: "https://danielkrutz.github.io/",
    //     });
    //     TeamMembers.create({
    //         firstName: "Samuel",
    //         lastName: "Malachowsky",
    //         title: "Co-PI",
    //         imageURL: "https://all.rit.edu/static/media/Professor_Malachowsky.cf390355.jpg",
    //         websiteURL: "http://www.se.rit.edu/~samvse/",
    //     });
    //     TeamMembers.create({
    //         firstName: "Saad",
    //         lastName: "Khan",
    //         title: "Project Manager",
    //         imageURL: "https://all.rit.edu/static/media/Saad_Kahn.0588d381.jpg",
    //         websiteURL: "https://www.linkedin.com/in/saad-khan23/",
    //         datesActive: "2020-2021"
    //     });
    //     TeamMembers.create({
    //         firstName: "Heather",
    //         lastName: "Moses",
    //         title: "Software Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Heather_Moses.16193a57.jpg",
    //         websiteURL: "https://www.linkedin.com/in/heather-moses/",
    //         datesActive: "2020-Present"
    //     });
    //     TeamMembers.create({
    //         firstName: "Chistopher",
    //         lastName: "Savan",
    //         title: "Project Manager",
    //         imageURL: "https://all.rit.edu/static/media/Christopher_Savan.7d22b015.jpg",
    //         websiteURL: "https://www.linkedin.com/in/christophersavan/",
    //         datesActive: "2020-2021"
    //     });
    //     TeamMembers.create({
    //         firstName: "Su",
    //         lastName: "Thit Thazin",
    //         title: "Software Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Su_Thit_Thazin.1837a06b.jpg",
    //         websiteURL: "https://www.linkedin.com/in/suthitthazin/",
    //         datesActive: "2020-Present"
    //     });
    //     TeamMembers.create({
    //         firstName: "Mark",
    //         lastName: "Sternefeld",
    //         title: "Software Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Mark_Sternefeld.403d4119.jpg",
    //         websiteURL: "https://www.linkedin.com/in/mark-ferenc-sternefeld/",
    //         datesActive: "2020-Present"
    //     });
    //     TeamMembers.create({
    //         firstName: "Shantanav",
    //         lastName: "Saurav",
    //         title: "Software Engineer",
    //         imageURL: "https://all.rit.edu/static/media/default_profile_image.d214dfdb.jpg",
    //         websiteURL: "https://www.linkedin.com/in/shantanav/",
    //         datesActive: "2021-Present"
    //     });
    // })
    return TeamMembers;
};