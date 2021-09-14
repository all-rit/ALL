import eye from "../../../../assets/images/landingpage/lab_thumbnails/colorblindness.jpg";
import ear from "../../../../assets/images/landingpage/lab_thumbnails/ear.jpg";
import cognitive from "../../../../assets/images/landingpage/lab_thumbnails/cognitiveimpairment.jpg";
import braille from "../../../../assets/images/landingpage/lab_thumbnails/screen_reader.jpg";
import hand from "../../../../assets/images/landingpage/lab_thumbnails//hand.jpg";
var labInformation = [
    {
        alt:"Deaf and Hard of Hearing Activity Thumbnail",
        lab:1,
        name:"Accessibility to Sound and Speech",
        bio:"Learn about designing the web for the Deaf and Hard-of-Hearing community.",
        image: ear
    },
    {
        alt:"Color Blindness Activity Thumbnail",
        lab:2,
        name:"Accessibility to Color Blindness",
        bio:"Learn more about designing the web for color blind individuals.",
        image: eye
    },
    {
        alt:"Screen Reader Activity Thumbnail",
        lab:3,
        name:"Accessibility with Screen Readers",
        bio:"Learn more about screen readers.",
        image: braille
    },
    {
        alt:"Dexterity activity Thumbnail",
        lab:4,
        name:"Accessibility to Dexterity",
        bio:"Learn more about designing the web for individuals with motor and dexterity impairments.",
        image: hand
    },
    {
        alt:"Cognitive Accessibility Thumbnail",
        lab:5,
        name:"Accessibility to Cognitive Impairments",
        bio:"Learn more about designing the web for users with cognitive impairments.",
        image: cognitive
    },
]
export default labInformation;