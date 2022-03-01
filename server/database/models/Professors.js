module.exports = (sequelize, DataTypes) => {
    const Professors = sequelize.define(
        'Professors',
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
            socials: { type: DataTypes.JSON },
            // websiteURL: { type: DataTypes.TEXT },
            // network: { type: DataTypes.TEXT },
            work: { type: DataTypes.TEXT },
            datesActive: { type: DataTypes.TEXT }
        },
        { tableName: 'professors' }
    );
    Professors.sync();
    // Professors.sync({
    //     force: true
    // }).then(function(){
    //     Professors.create({
    //         firstName: "Daniel",
    //         lastName: "Krutz",
    //         title: "PI",
    //         imageURL: "/Professor_Krutz.jpg",
    //         socials: {"socials":[{"link":"https://danielkrutz.github.io/","network":"sharethis"}]},
    //         //websiteURL: "https://danielkrutz.github.io/",
    //         //network: "sharethis",
    //         // work: { type: DataTypes.TEXT },
    //         // datesActive: { type: DataTypes.TEXT }
    //     });
    //     Professors.create({
    //         firstName: "Samuel",
    //         lastName: "Malachowsky",
    //         title: "Co-PI",
    //         imageURL: "/Professor_Malachowsky.jpg",
    //         socials: {"socials":[{"link":"https://www.se.rit.edu/~samvse/","network":"sharethis"}]},
    //         //websiteURL: "https://www.se.rit.edu/~samvse/",
    //         //network: "sharethis",
    //         // work: { type: DataTypes.TEXT },
    //         // datesActive: { type: DataTypes.TEXT }
    //     });
    // })
    return Professors;
};