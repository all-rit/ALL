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
            socials: { type: DataTypes.TEXT },
            // websiteURL: { type: DataTypes.TEXT },
            // network: { type: DataTypes.TEXT },
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
    //         imageURL: "https://all.rit.edu/static/media/Saad_Kahn.80d543d9.jpg",
    //         socials: "<?xml version='1.0' encoding='UTF-8'?><Socials><Social><Link>https://www.linkedin.com/in/saad-khan23/</Link><Network>linkedin</Network></Social></Socials>",
    //         //websiteURL: "https://www.linkedin.com/in/saad-khan23/",
    //         //network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         datesActive: "2019-2021"
    //     });
    //     TeamMembers.create({
    //         firstName: "Heather",
    //         lastName: "Moses",
    //         title: "Full Stack Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Heather_Moses.8d9c585d.jpg",
    //         socials: "<?xml version='1.0' encoding='UTF-8'?><Socials><Social><Link>https://www.linkedin.com/in/heather-moses/</Link><Network>linkedin</Network></Social></Socials>",
    //         //websiteURL: "https://www.linkedin.com/in/heather-moses/",
    //         //network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         datesActive: "2020-Present"
    //     });
    //     TeamMembers.create({
    //         firstName: "Christopher",
    //         lastName: "Savan",
    //         title: "Full Stack Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Christopher_Savan.c3e50382.jpg",
    //         socials: "<?xml version='1.0' encoding='UTF-8'?><Socials><Social><Link>https://www.linkedin.com/in/christophersavan/</Link><Network>linkedin</Network></Social></Socials>",
    //         //websiteURL: "https://www.linkedin.com/in/christophersavan/",
    //         //network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         datesActive: "2020-2021"
    //     });
    //     TeamMembers.create({
    //         firstName:  "Su Thit",
    //         lastName: "Thazin",
    //         title: "Full Stack Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Su_Thit_Thazin.d985d3dd.jpg",
    //         socials: "<?xml version='1.0' encoding='UTF-8'?><Socials><Social><Link>https://www.linkedin.com/in/suthitthazin/</Link><Network>linkedin</Network></Social></Socials>",
    //         //websiteURL: "https://www.linkedin.com/in/suthitthazin/",
    //         //network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         datesActive: "2020-Present"
    //     });
    //     TeamMembers.create({
    //         firstName: "Mark",
    //         lastName: "Sternefeld",
    //         title: "Full Stack Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Mark_Sternefeld.e3a486d4.jpg",
    //         socials: "<?xml version='1.0' encoding='UTF-8'?><Socials><Social><Link>https://www.linkedin.com/in/mark-ferenc-sternefeld/</Link><Network>linkedin</Network></Social></Socials>",
    //         //websiteURL: "https://www.linkedin.com/in/mark-ferenc-sternefeld/",
    //         //network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         datesActive: "2020-Present"
    //     });
    //     TeamMembers.create({
    //         firstName: "Shantanav",
    //         lastName: "Saurav",
    //         title: "Full Stack Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Shantanav_Saurav.e9edd6a4.jpg",
    //         socials: "<?xml version='1.0' encoding='UTF-8'?><Socials><Social><Link>https://www.linkedin.com/in/shantanav/</Link><Network>linkedin</Network></Social></Socials>",
    //         //websiteURL: "https://www.linkedin.com/in/shantanav/",
    //         //network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         datesActive: "2021-Present"
    //     });
    //     TeamMembers.create({
    //         firstName: "Bashir",
    //         lastName: "Jaji",
    //         title: "Full Stack Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Bashir_Jaji.272d46b1.jpg",
    //         socials: "<?xml version='1.0' encoding='UTF-8'?><Socials><Social><Link>https://www.linkedin.com/in/jaji-bashir-oluwatobiloba-768a52108/</Link><Network>linkedin</Network></Social></Socials>",
    //         //websiteURL: "https://www.linkedin.com/in/jaji-bashir-oluwatobiloba-768a52108/",
    //         //network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         datesActive: "2021-Present"
    //     });
    //     TeamMembers.create({
    //         firstName: "Andreas",
    //         lastName: "Leonard-Calcano",
    //         title: "Full Stack Engineer",
    //         imageURL: "https://all.rit.edu/static/media/Andreas_Leonard_Calcano.6daa701f.jpg",
    //         socials: "<?xml version='1.0' encoding='UTF-8'?><Socials><Social><Link>https://www.linkedin.com/in/andres-leonard-calcano/</Link><Network>linkedin</Network></Social></Socials>",
    //         //websiteURL: "https://www.linkedin.com/in/andres-leonard-calcano/",
    //         //network: "linkedin",
    //         // work: { type: DataTypes.TEXT },
    //         datesActive: "2021-Present"
    //     });
    // })
    return TeamMembers;
};