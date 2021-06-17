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
    //         learningObjectives: "Learn how organizations like the National Association of the Deaf (NAD) fought for easier access for hearing impaired individuals, increase your understanding through an interactive module about hearing impairments, watch related videos, and take a quiz to test your knowledge",
    //         shortDescription: "Learn about designing the web for the Deaf and Hard-of-Hearing community.",
    //         fullDescription: "In this lab, you will learn why it is important to create software that is accessible to users with hearing impairments. You will learn how organizations like the National Association of the Deaf (NAD) fought for easier access for hearing impaired individuals, increase your understanding through an interactive module about hearing impairments, watch related videos, and take a quiz to test your knowledge.",
    //         thumbnailImageURL: "https://all.rit.edu/static/media/ear.70ea9584.jpg",
    //         labURL: "https://all.rit.edu/Lab1/"
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Color Blindness",
    //         category: "Accessibility",
    //         learningObjectives:"Learn about different color vision deficiencies, increase your understanding through an interactive module about visual impairments, watch related videos, and take a quiz to test your knowledge",
    //         shortDescription: "Learn more about designing the web for color blind individuals.",
    //         fullDescription:"In this lab, you will learn about why it is important to create software that is accessible to users with visual impairments. You will learn about different color vision deficiencies, increase your understanding through an interactive module about visual impairments, watch related videos, and take a quiz to test your knowledge.",
    //         thumbnailImageURL:"https://all.rit.edu/static/media/eye.96e74818.jpg",
    //         labURL: "https://all.rit.edu/Lab2/"
    //     });
    //     Labs.create({
    //         labName: "Accessibility with Screen Readers",
    //         category: "Accessibility",
    //         learningObjectives:"Learn about using alt tags, increase your understanding through an interactive module about screenreaders and alt tags, watch related videos, and take a quiz to test your knowledge.",
    //         shortDescription: "Learn more about screen readers.",
    //         fullDescription:"In this lab, you will learn about why it is important to create software that is accessible to users who utilize screenreaders. You will learn about using alt tags, increase your understanding through an interactive module about screenreaders and alt tags, watch related videos, and take a quiz to test your knowledge.",
    //         thumbnailImageURL:"https://all.rit.edu/static/media/braille.45ad9103.jpg",
    //         labURL: "https://all.rit.edu/Lab3/"
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Dexterity",
    //         category: "Accessibility",
    //         learningObjectives:"Learn about issues related to dexterity, increase your understanding through an interactive module about dexterity impairments, watch related videos, and take a quiz to test your knowledge",
    //         shortDescription: "Learn more about designing the web for individuals with motor and dexterity impairments.",
    //         fullDescription:"In this lab, you will learn about why it is important to create software that is accessible to users with dexterity impairments. You will learn about issues related to dexterity, increase your understanding through an interactive module about dexterity impairments, watch related videos, and take a quiz to test your knowledge.",
    //         thumbnailImageURL:"https://all.rit.edu/static/media/hand.f673a19e.jpg",
    //         labURL: "https://all.rit.edu/Lab4/"
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Cognitive Impairments",
    //         category: "Accessibility",
    //         learningObjectives:"Learn about using clear descriptive headings, handling time driven notifications, and creating informative form responses. Afterwards, you will watch related videos and take a quiz to test your knowledge.",
    //         shortDescription: "Learn more about designing the web for users with cognitive impairments.",
    //         fullDescription:"In this lab, you will learn about why it is important to create software that is accessible to users who face cognitive impairments. You will learn about using clear descriptive headings, handling time driven notifications, and creating informative form responses. Afterwards, you will watch related videos and take a quiz to test your knowledge.",
    //         thumbnailImageURL:"https://all.rit.edu/static/media/cognitiveimpairment.0805e6e7.jpg",
    //         labURL: "https://all.rit.edu/Lab5/"
    //     });
    // })
    return Labs;
};