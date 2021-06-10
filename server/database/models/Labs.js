module.exports = (sequelize, DataTypes) => {
    const Labs = sequelize.define(
        'Labs',
        {
            id: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            labName: { type: DataTypes.TEXT },
            category: { type: DataTypes.TEXT },
            learningObjectives: { type: DataTypes.TEXT },
            instructorOnlyInfo: { type: DataTypes.TEXT },
            smallImageURL: { type: DataTypes.TEXT },
            mediumImageURL: { type: DataTypes.TEXT },
            largeImageURL: { type: DataTypes.TEXT },
            thumbnailImageURL: { type: DataTypes.TEXT },
            shortDescription: { type: DataTypes.TEXT },
            fullDescription: { type: DataTypes.TEXT },
            labURL: { type: DataTypes.TEXT },
            copyrightAttributes: { type: DataTypes.TEXT }
        },
        { tableName: 'labs' }
    );
    Labs.sync();
    // Labs.sync({
    //     force: true
    // }).then(function(){
    //     Labs.create({
    //         labName: "Accessibility to Sound and Speech",
    //         category: "Accessibility",
    //         shortDescription: "Learn about designing the web for the Deaf and Hard-of-Hearing community.",
    //         labURL: "https://all.rit.edu/Lab1/"
    //     })
    // })
    return Labs;
};