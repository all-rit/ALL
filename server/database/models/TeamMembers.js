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
      },
      {tableName: 'team_members'},
  );

  TeamMembers.sync();
  // TeamMembers.sync({
  //     force: true
  // }).then(function(){
  //     TeamMembers.create({
  //         firstName: "Saad",
  //         lastName: "Khan",
  //         title: "Project Manager",
  //         imageURL: "/Saad_Khan.jpg",
  //         socials: [{"link":"https://www.linkedin.com/in/saad-khan23/","network":"linkedin"},
  //         //websiteURL: "https://www.linkedin.com/in/saad-khan23/",
  //         //network: "linkedin",
  //         // work: { type: DataTypes.TEXT },
  //         datesActive: "2019-2021",
  //          isActive: false
  //     });
  //     TeamMembers.create({
  //         firstName: "Heather",
  //         lastName: "Moses",
  //         title: "Full Stack Engineer",
  //         imageURL: "/Heather_Moses.jpg",
  //         socials: [{"link":"https://www.linkedin.com/in/heather-moses/","network":"linkedin"}],
  //         //websiteURL: "https://www.linkedin.com/in/heather-moses/",
  //         //network: "linkedin",
  //         // work: { type: DataTypes.TEXT },
  //         datesActive: "2020-Present"
  //     });
  //     TeamMembers.create({
  //         firstName: "Christopher",
  //         lastName: "Savan",
  //         title: "Full Stack Engineer",
  //         imageURL: "/Christopher_Savan.jpg",
  //         socials: [{"link":"https://www.linkedin.com/in/christophersavan/","network":"linkedin"}],
  //         //websiteURL: "https://www.linkedin.com/in/christophersavan/",
  //         //network: "linkedin",
  //         // work: { type: DataTypes.TEXT },
  //         datesActive: "2020-2021",
  //          isActive: false
  //     });
  //     TeamMembers.create({
  //         firstName:  "Su Thit",
  //         lastName: "Thazin",
  //         title: "Full Stack Engineer",
  //         imageURL: "/Su_Thit_Thazin.jpg",
  //         socials: [{"link":"https://www.linkedin.com/in/suthitthazin/","network":"linkedin"}],
  //         //websiteURL: "https://www.linkedin.com/in/suthitthazin/",
  //         //network: "linkedin",
  //         // work: { type: DataTypes.TEXT },
  //         datesActive: "2020-Present"
  //     });
  //     TeamMembers.create({
  //         firstName: "Mark",
  //         lastName: "Sternefeld",
  //         title: "Full Stack Engineer",
  //         imageURL: "/Mark_Sternefeld.jpg",
  //         socials: [{"link":"https://www.linkedin.com/in/mark-ferenc-sternefeld/","network":"linkedin"}],
  //         //websiteURL: "https://www.linkedin.com/in/mark-ferenc-sternefeld/",
  //         //network: "linkedin",
  //         // work: { type: DataTypes.TEXT },
  //         datesActive: "2020-Present"
  //     });
  //     TeamMembers.create({
  //         firstName: "Shantanav",
  //         lastName: "Saurav",
  //         title: "Full Stack Engineer",
  //         imageURL: "/Shantanav_Saurav.jpg",
  //         socials: [{"link":"https://www.linkedin.com/in/shantanav/","network":"linkedin"}],
  //         //websiteURL: "https://www.linkedin.com/in/shantanav/",
  //         //network: "linkedin",
  //         // work: { type: DataTypes.TEXT },
  //         datesActive: "2021-Present"
  //     });
  //     TeamMembers.create({
  //         firstName: "Bashir",
  //         lastName: "Jaji",
  //         title: "Full Stack Engineer",
  //         imageURL: "/Bashir_Jaji.jpg",
  //         socials: [{"link":"https://www.linkedin.com/in/jaji-bashir-oluwatobiloba-768a52108/","network":"linkedin"}],
  //         //websiteURL: "https://www.linkedin.com/in/jaji-bashir-oluwatobiloba-768a52108/",
  //         //network: "linkedin",
  //         // work: { type: DataTypes.TEXT },
  //         datesActive: "2021-Present"
  //     });
  //     TeamMembers.create({
  //         firstName: "Andreas",
  //         lastName: "Leonard-Calcano",
  //         title: "Full Stack Engineer",
  //         imageURL: "/Andreas_Leonard_Calcano.jpg",
  //         socials: [{"link":"https://www.linkedin.com/in/andres-leonard-calcano/","network":"linkedin"}],
  //         //websiteURL: "https://www.linkedin.com/in/andres-leonard-calcano/",
  //         //network: "linkedin",
  //         // work: { type: DataTypes.TEXT },
  //         datesActive: "2021-Present"
  //     });
  // })
  return TeamMembers;
};
