// link to image: https://stock.adobe.com/images/guide-color-chart-wheel-on-white-background/275745557?prev_url=detail
// license: https://stock.adobe.com/license-terms
import color_wheel from "../../../../assets/images/landingpage/lab_thumbnails/colorblindness.jpg";
// link to image: https://stock.adobe.com/images/closeup-photo-of-ear-with-hearing-aid/265660167?prev_url=detail
// license: https://stock.adobe.com/license-terms
import ear from "../../../../assets/images/landingpage/lab_thumbnails/ear.jpg";
// link to image: https://unsplash.com/photos/G66K_ERZRhM
// license: https://unsplash.com/license
import cognitive from "../../../../assets/images/landingpage/lab_thumbnails/cognitiveimpairment.jpg";
// link to image: https://unsplash.com/photos/4MoIpDcSlr4
// license: https://unsplash.com/license
import braille from "../../../../assets/images/landingpage/lab_thumbnails/screen_reader.jpg";
// link to image: https://burst.shopify.com/photos/hand-one-up?q=hand+pointing+up
// license: https://burst.shopify.com/licenses/shopify-some-rights-reserved
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
        image: color_wheel
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