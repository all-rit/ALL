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
            websiteURL: { type: DataTypes.TEXT },
            network: { type: DataTypes.TEXT },
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
    //         imageURL: "https://all.rit.edu/static/media/Professor_Krutz.1ac30542.jpg",
    //         websiteURL: "https://danielkrutz.github.io/",
    //         network: "sharethis",
    //         // work: { type: DataTypes.TEXT },
    //         // datesActive: { type: DataTypes.TEXT }
    //     });
    //     Professors.create({
    //         firstName: "Samuel",
    //         lastName: "Malachowsky",
    //         title: "Co-PI",
    //         imageURL: "https://all.rit.edu/static/media/Professor_Malachowsky.cf390355.jpg",
    //         websiteURL: "https://www.se.rit.edu/~samvse/",
    //         network: "sharethis",
    //         // work: { type: DataTypes.TEXT },
    //         // datesActive: { type: DataTypes.TEXT }
    //     });
    // })
    return Professors;
};