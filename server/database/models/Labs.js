module.exports = (sequelize, DataTypes) => {
    const Labs = sequelize.define(
        'Labs', {
            id: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            labName: { type: DataTypes.TEXT },
            labShortName: { type: DataTypes.TEXT },
            category: { type: DataTypes.TEXT },
            // instructorOnlyInfo: { type: DataTypes.TEXT },
            // smallImageURL: { type: DataTypes.TEXT },
            // mediumImageURL: { type: DataTypes.TEXT },
            // largeImageURL: { type: DataTypes.TEXT },
            thumbnailImageURL: { type: DataTypes.TEXT },
            shortDescription: { type: DataTypes.TEXT },
            fullDescription: { type: DataTypes.TEXT },
            learningObjectives: { type: DataTypes.TEXT },
            authors: { type: DataTypes.TEXT },
            labURL: { type: DataTypes.TEXT },
            copyrightAttributes: { type: DataTypes.TEXT }
        }, { tableName: 'labs' }
    );
    Labs.sync();
    // Labs.sync({
    //     force: true
    // }).then(function() {
    //     Labs.create({
    //         labName: "Accessibility to Sound and Speech",
    //         labShortName: "Sound & Speech",
    //         category: "Accessibility",
    //         shortDescription: "Learn about designing the web for the Deaf and Hard-of-Hearing community.",
    //         fullDescription: "This lab explores the Perceivable accessibility principle in regards to sound and speech. This principle states that information and elements of the interface must be presented to users in ways they can perceive without loss of information. The lab demonstrates how having only audio cues for a certain objective makes the software inaccessible for users who are deaf or hard of hearing.",
    //         learningObjectives: "<?xml version='1.0' encoding='UTF-8'?><LearningObjectives><LearningObjective>LO1: Recognize the significance of the population that is Deaf and Hard of Hearing and their needs for accessible software (Knowledge)</LearningObjective><LearningObjective>LO2: Examine a software application that doesn’t properly accommodate accessibility to sound and speech (Analysis)</LearningObjective><LearningObjective>LO3: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)</LearningObjective><LearningObjective>LO4: Relate to individuals who experience difficulties with accessibility to sound and speech (Comprehension)</LearningObjective></LearningObjectives>",
    //         authors: "Jan Guillermo, Saad Khan, Heather Moses, Manali Chakraborty, Komal Sorte, Sakshi Karnawat",
    //         labURL: "https://all.rit.edu/Lab1/",
    //         thumbnailImageURL: "https://all.rit.edu/static/media/ear.35160742.jpg"
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Color Blindness",
    //         labShortName: "Color Blindness",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about designing the web for color blind individuals.",
    //         labURL: "https://all.rit.edu/Lab2/",
    //         thumbnailImageURL: "https://all.rit.edu/static/media/colorblindness.41fe47d6.jpg"
    //     });
    //     Labs.create({
    //         labName: "Accessibility with Screen Readers",
    //         labShortName: "Screen Readers",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about screen readers.",
    //         labURL: "https://all.rit.edu/Lab3/",
    //         thumbnailImageURL: "https://all.rit.edu/static/media/screen_reader.709680df.jpg"
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Dexterity",
    //         labShortName: "Dexterity",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about designing the web for individuals with motor and dexterity impairments.",
    //         labURL: "https://all.rit.edu/Lab4/",
    //         thumbnailImageURL: "https://all.rit.edu/static/media/hand.736e9a7f.jpg"
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Cognitive Impairments",
    //         labShortName: "Cognitive Impairments",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about designing the web for users with cognitive impairments.",
    //         labURL: "https://all.rit.edu/Lab5/",
    //         thumbnailImageURL: "https://all.rit.edu/static/media/cognitiveimpairment.1fd4b4a5.jpg"
    //     });
    // })
    return Labs;
};