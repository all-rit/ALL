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
    //         labURL: "https://all.rit.edu/Lab1/",
    //         thumbnailImageURL: "https://all.rit.edu/static/media/ear.70ea9584.jpg"
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Color Blindness",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about designing the web for color blind individuals.",
    //         labURL: "https://all.rit.edu/Lab2/",
    //         thumbnailImageURL: "https://all.rit.edu/static/media/braille.45ad9103.jpg"
    //     });
    //     Labs.create({
    //         labName: "Accessibility with Screen Readers",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about screen readers.",
    //         labURL: "https://all.rit.edu/Lab3/",
    //         thumbnailImageURL: "https://all.rit.edu/static/media/eye.96e74818.jpg"
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Dexterity",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about designing the web for individuals with motor and dexterity impairments.",
    //         labURL: "https://all.rit.edu/Lab4/",
    //         thumbnailImageURL: "https://all.rit.edu/static/media/hand.f673a19e.jpg"
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Cognitive Impairments",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about designing the web for users with cognitive impairments.",
    //         labURL: "https://all.rit.edu/Lab5/",
    //         thumbnailImageURL: "https://all.rit.edu/static/media/cognitiveimpairment.0805e6e7.jpg"
    //     });
    // })
    return Labs;
};