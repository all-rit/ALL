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
            learningObjectives: { type: DataTypes.JSON },
            authors: { type: DataTypes.TEXT },
            labURL: { type: DataTypes.TEXT },
            copyrightAttributes: { type: DataTypes.TEXT },
            about: { type: DataTypes.TEXT },
            reading: { type: DataTypes.JSON },
            reinforcement: {type: DataTypes.JSON},
            quiz: {type: DataTypes.JSON},
            isActive: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
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
    //         learningObjectives: ["LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that is deaf and hard of hearing and their needs for accessible software (Knowledge)","LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for people with difficulties with sound and speech (Analysis)","LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)","LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility to sound and speech (Comprehension)"],
    //         authors: "Jan Guillermo, Saad Khan, Heather Moses, Manali Chakraborty, Komal Sorte, Sakshi Karnawat",
    //         labURL: "https://all.rit.edu/Lab1/",
    //         thumbnailImageURL: "/ear.jpg",
    //         about:"In this lab, you will learn why it is important to create software that is accessible to users with hearing impairments. You will learn how organizations like the National Association of the Deaf (NAD) fought for easier access for hearing impaired individuals, increase your understanding through an interactive module about hearing impairments, view related media to reinforce the topic, and take a quiz to test your knowledge. Click "Next" to start!",
    //         reading: "",
    //         reinforcement:"[{"title":"Audio Cues","link":"https://www.youtube.com/embed/vU_Di8EtF3M"},{"title":"Audio Cues Lecture","link":"https://www.youtube.com/embed/Wlf8A0w66o0"}]"
    //         quiz:"",
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Color Blindness",
    //         labShortName: "Color Blindness",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about designing the web for color blind individuals.",
    //         fullDescription: "This lab explores accessibility issues involving color blindness. This will be introduced to the user through a simulated color blind lens. The user will then be asked to navigate through the exercise with the lens activated and once without. The user will then be asked to implement accessible colors that will allow every user to have the same experience.",
    //         learningObjectives: ["LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that is colorblind, the types of colorblindness that they have, and their needs for accessible use of software (Knowledge)","LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for those who are colorblind (Analysis)","LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)","LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility to colorblindness (Comprehension)"],
    //         authors: "Scott Frauenknecht",
    //         labURL: "https://all.rit.edu/Lab2/",
    //         thumbnailImageURL: "/colorblindness.jpg",
    //         about:"In this lab, you will learn about why it is important to create software that is accessible to users with visual impairments. You will learn about different color vision deficiencies, increase your understanding through an interactive module about visual impairments, view related media to reinforce the topic, and take aquiz to test your knowledge. Click "Next" to start!",
    //         reading: "",
    //         reinforcement:"[{"title":"Color Blindness Testimony","link":"https://www.youtube.com/embed/d6KKsmmOKEI"},{"title":"Color Contrast Lecture","link":"https://www.youtube.com/embed/zrl0CW8m-Qk"}]"
    //         quiz:"",
    //     });
    //     Labs.create({
    //         labName: "Accessibility with Screen Readers",
    //         labShortName: "Screen Readers",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about screen readers.",
    //         fullDescription: "This lab will introduce the different types of vision impairments and the importance of creating software that is accessible to these users utilizing screen readers. Participants will learn how to design a screen reader-friendly interface. In the exercise portion of the lab, they will encounter an interface that is not screen-reader friendly, and learn how to implement an interface that is navigable by screen readers.",
    //         learningObjectives: ["LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that has vision impairments, and their needs for accessible use of software (Knowledge)","LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for people with vision impairments (Analysis)","LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)","LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility with screen readers (Comprehension)"], 
    //         authors: "Parth Sane, Saad Khan, Heather Moses, Mark Sternefeld, Christopher Savan",
    //         labURL: "https://all.rit.edu/Lab3/",
    //         thumbnailImageURL: "/screen_reader.jpg",
    //         about:"In this lab, you will learn about why it is important to create software that is accessible to users who utilize screenreaders. You will learn about using alt tags, increase your understanding through an interactive module about screenreaders and alt tags, view related media to reinforce the topic, and take a quiz to test your knowledge. Click "Next" to s ",
    //         reading: "",
    //         reinforcement:"[{"title":"Accessibility for Blind/Visually-Impaired Users","link":"https://www.youtube.com/embed/1by5J7c5Vz4"},{"title":"How a blind developer uses accessibility features in Visual Studio","link":"https://www.youtube.com/embed/94swlF55tVc?"}]"
    //         quiz:"",
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Dexterity",
    //         labShortName: "Dexterity",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about designing the web for individuals with motor and dexterity impairments.",
    //         fullDescription: "This lab gives an overview of dexterity impairments and the effects they can have on a person’s ability to use software. In addition, the lab gives several examples of web standards related to dexterity accessibility. Users are immersed in an environment that simulates the experience of a user with a dexterity impairment by having to click a small, moving button. The user then updates the code to make the button large enough to follow accessibility guidelines. Additionally, users also experience filling out a form using only their keyboard. The user then makes updates to the code to make the form accessible to those with dexterity impairments.",
    //         learningObjectives:  ["LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that has dexterity impairments , the types of dexterity impairments that they have, and their needs for accessible use of software (Knowledge)","LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for people with dexterity impairments (Analysis)","LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)","LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility to dexterity (Comprehension)"], 
    //         authors: "Saad Khan, Heather Moses",
    //         labURL: "https://all.rit.edu/Lab4/",
    //         thumbnailImageURL: "/hand.jpg",
    //         about:"In this lab, you will learn about why it is important to create software that is accessible to users with dexterity impairments. You will learn about issues related to dexterity, increase your understanding through an interactive module about dexterity impairments, view related media to reinforce the topic, and take a quiz to test your knowledge. Click "Next" to start!",
    //         reading: "",
    //         reinforcement:"[{"title":"Motor Impaired User Review","link":"https://www.youtube.com/embed/yE1S0Biuxcc"},{"title":"Digital Accessibility User Impact: Motor Disabilities","link":"https://www.youtube.com/embed/nnDw7JPJBAE"}]"
    //         quiz:"",
    //     });
    //     Labs.create({
    //         labName: "Accessibility to Cognitive Impairments",
    //         labShortName: "Cognitive Impairments",
    //         category: "Accessibility",
    //         shortDescription: "Learn more about designing the web for users with cognitive impairments.",
    //         fullDescription: "This lab introduces cognitive accessibility challenges. The user will be introduced to common cognitive impairments and what difficulties a person with said impairment would experience. During the exercise portion the user will be brought through certain scenarios that are inaccessible to those with said impairments. The user will then make changes to improve accessibility for said scenario.",
    //         learningObjectives: ["LO1: Knowledge of user significance, characteristics, and needs: Recognize the significance of the population that has cognitive impairments, the types of cognitive impairments that they have, and their needs for accessible use of software (Knowledge)","LO2: Exposure to and analysis of poorly accessible design: Examine a software application that doesn’t properly accommodate accessibility for people with cognitive impairments (Analysis)","LO3: Apply solutions to solve access problems: Use knowledge of accessibility design solutions to construct corrective measures to allow previously inaccessible software to become accessible to appropriate parties (Application)","LO4: Develop further empathy: Relate to individuals who experience difficulties with accessibility to cognitive impairments (Comprehension)"], 
    //         authors: "Saad Kahn",
    //         labURL: "https://all.rit.edu/Lab5/",
    //         thumbnailImageURL: "/cognitiveimpairment.jpg",
    //         about:"In this lab, you will learn about why it is important to create software that is accessible to users who face cognitive impairments. You will learn about using clear descriptive headings, handling time driven notifications, and creating informative form responses. Afterwards, you will view related media to reinforce the topic and take a quiz to test your knowledge. Click "Next" to start!",
    //         reading: "",
    //         reinforcement:"[{"title":"Dyslexia & Web Accessibility","link":"https://www.youtube.com/embed/9XiHhQikNrY"},{"title":"Cognitive Disabilities - An Introduction to Accessibility and Inclusive Design","link":"https://www.youtube.com/embed/OknYVKtn-Cc"}]"
    //         quiz:"",
    //     });
    // })
    return Labs;
};