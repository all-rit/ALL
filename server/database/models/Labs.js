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
    //         learningObjectives: "<?xml version='1.0' encoding='UTF-8'?><LearningObjectives><LearningObjective>LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that is deaf and hard of hearing and their needs for accessible software (Knowledge)</LearningObjective><LearningObjective>LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for people with difficulties with sound and speech(Analysis)</LearningObjective><LearningObjective>LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)</LearningObjective><LearningObjective>LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility to sound and speech (Comprehension)</LearningObjective></LearningObjectives>",
    //         authors: "Jan Guillermo, Saad Khan, Heather Moses, Manali Chakraborty, Komal Sorte, Sakshi Karnawat",
    //         labURL: "https://all.rit.edu/Lab1/",
    //         thumbnailImageURL: "/ear.jpg"
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Color Blindness",
    //         labShortName: "Color Blindness",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about designing the web for color blind individuals.",
    //         fullDescription: "This lab explores accessibility issues involving color blindness. This will be introduced to the user through a simulated color blind lens. The user will then be asked to navigate through the exercise with the lens activated and once without. The user will then be asked to implement accessible colors that will allow every user to have the same experience.",
    //         learningObjectives: "<?xml version='1.0' encoding='UTF-8'?><LearningObjectives><LearningObjective>LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that is colorblind, the types of colorblindness that they have, and their needs for accessible use of software (Knowledge)</LearningObjective><LearningObjective>LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for those who are colorblind(Analysis)</LearningObjective><LearningObjective>LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)</LearningObjective><LearningObjective>LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility to colorblindness (Comprehension)</LearningObjective></LearningObjectives>",
    //         authors: "Scott Frauenknecht",
    //         labURL: "https://all.rit.edu/Lab2/",
    //         thumbnailImageURL: "/colorblindness.jpg"
    //     });
    //     Labs.create({
    //         labName: "Accessibility with Screen Readers",
    //         labShortName: "Screen Readers",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about screen readers.",
    //         fullDescription: "This lab will introduce the different types of vision impairments and the importance of creating software that is accessible to these users utilizing screen readers. Participants will learn how to design a screen reader-friendly interface. In the exercise portion of the lab, they will encounter an interface that is not screen-reader friendly, and learn how to implement an interface that is navigable by screen readers.",
    //         learningObjectives: "<?xml version='1.0' encoding='UTF-8'?><LearningObjectives><LearningObjective>LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that has vision impairments, and their needs for accessible use of software (Knowledge)</LearningObjective><LearningObjective>LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for people with vision impairments (Analysis)</LearningObjective><LearningObjective>LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)</LearningObjective><LearningObjective>LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility with screen readers (Comprehension)</LearningObjective></LearningObjectives>", 
    //         authors: "Parth Sane, Saad Khan, Heather Moses, Mark Sternefeld, Christopher Savan",
    //         labURL: "https://all.rit.edu/Lab3/",
    //         thumbnailImageURL: "/screen_reader.jpg"
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Dexterity",
    //         labShortName: "Dexterity",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about designing the web for individuals with motor and dexterity impairments.",
    //         fullDescription: "This lab gives an overview of dexterity impairments and the effects they can have on a person’s ability to use software. In addition, the lab gives several examples of web standards related to dexterity accessibility. Users are immersed in an environment that simulates the experience of a user with a dexterity impairment by having to click a small, moving button. The user then updates the code to make the button large enough to follow accessibility guidelines. Additionally, users also experience filling out a form using only their keyboard. The user then makes updates to the code to make the form accessible to those with dexterity impairments.",
    //         learningObjectives: "<?xml version='1.0' encoding='UTF-8'?><LearningObjectives><LearningObjective>LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that has dexterity impairments , the types of dexterity impairments that they have, and their needs for accessible use of software (Knowledge)</LearningObjective><LearningObjective>LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for people with dexterity impairments (Analysis)</LearningObjective><LearningObjective>LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)</LearningObjective><LearningObjective>LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility to dexterity (Comprehension)</LearningObjective></LearningObjectives>", 
    //         authors: "Saad Khan, Heather Moses",
    //         labURL: "https://all.rit.edu/Lab4/",
    //         thumbnailImageURL: "/hand.jpg"
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Cognitive Impairments",
    //         labShortName: "Cognitive Impairments",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about designing the web for users with cognitive impairments.",
    //         fullDescription: "This lab introduces cognitive accessibility challenges. The user will be introduced to common cognitive impairments and what difficulties a person with said impairment would experience. During the exercise portion the user will be brought through certain scenarios that are inaccessible to those with said impairments. The user will then make changes to improve accessibility for said scenario.",
    //         learningObjectives: "<?xml version='1.0' encoding='UTF-8'?><LearningObjectives><LearningObjective>LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that has cognitive impairments, the types of cognitive impairments that they have, and their needs for accessible use of software (Knowledge)</LearningObjective><LearningObjective>LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for people with cognitive impairments (Analysis)</LearningObjective><LearningObjective>LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)</LearningObjective><LearningObjective>LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility to cognitive impairments (Comprehension)</LearningObjective></LearningObjectives>", 
    //         authors: "Saad Kahn",
    //         labURL: "https://all.rit.edu/Lab5/",
    //         thumbnailImageURL: "/cognitiveimpairment.jpg"
    //     });
    // })
    return Labs;
};