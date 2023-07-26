import earImage from '../../assets/images/educators/ear.jpg'
import colorblindImage from '../../assets/images/educators/colorblindness.jpg'
import screenreaderImage from '../../assets/images/educators/screen_reader.jpg'
import handImage from '../../assets/images/educators/hand.jpg'
import congitiveImage from '../../assets/images/educators/cognitiveimpairment.jpg'
import ethicsImage from '../../assets/images/educators/ethicsai.jpg'
import aicsecImage from '../../assets/images/educators/aicybersecurity.jpg'

export default [
  {
    image: earImage,
    labName: 'Lab 1: Accessibility to Sound and Speech',
    labBody: 'This lab explores the Perceivable accessibility principle in ' +
      'regards to sound and speech. This principle states that information ' +
      'and elements of the interface must be presented to users in ways they ' +
      'can perceive without loss of information. The lab demonstrates how ' +
      'having only audio cues for a certain objective makes the software ' +
      'inaccessible for users who are deaf or hard of hearing.',
    lectureSlides: '',
    videoLink: ''
  },
  {
    image: colorblindImage,
    labName: 'Lab 2: Accessibility to Color Blindness',
    labBody: 'This lab explores accessibility issues involving color blindness. ' +
      'This will be introduced to the user through a simulated color blind lens.' +
      ' The user will then be asked to navigate through the exercise with ' +
      'the lens activated and once without. The user will then be asked to ' +
      'implement accessible colors that will allow every user to have the same ' +
      'experience.',
    lectureSlides: '',
    videoLink: ''
  },
  {
    image: screenreaderImage,
    labName: 'Lab 3: Accessibility with Screen Readers',
    labBody: 'This lab will introduce the different types of vision impairments ' +
      'and the importance of creating software that is accessible to these users' +
      ' utilizing screen readers. Participants will learn how to design a screen ' +
      'reader-friendly interface. In the exercise portion of the lab, they will ' +
      'encounter an interface that is not screen-reader friendly, and learn how to ' +
      'implement an interface that is navigable by screen readers.',
    lectureSlides: '',
    videoLink: ''
  },
  {
    image: handImage,
    labName: 'Lab 4: Accessibility to Dexterity',
    labBody: 'This lab gives an overview of dexterity impairments and the effects ' +
      'they can have on a person’s ability to use software. In addition, the lab gives ' +
      'several examples of web standards related to dexterity accessibility. Users are immersed ' +
      'in an environment that simulates the experience of a user with a dexterity impairment ' +
      'by having to click a small, moving button. The user then updates the code to make the ' +
      'button large enough to follow accessibility guidelines. Additionally, users also ' +
      'experience filling out a form using only their keyboard. The user then makes updates to ' +
      'the code to make the form accessible to those with dexterity impairments.',
    lectureSlides: '',
    videoLink: ''
  },
  {
    image: congitiveImage,
    labName: 'Lab 5: Accessibility to Cognitive Impairments',
    labBody: 'This lab introduces cognitive accessibility challenges. The user will be introduced ' +
      'to common cognitive impairments and what difficulties a person with said impairment would ' +
      'experience. During the exercise portion the user will be brought through certain scenarios ' +
      'that are inaccessible to those with said impairments. The user will then make changes to ' +
      'improve accessibility for said scenario.',
    lectureSlides: '',
    videoLink: ''
  },
  {
    image: ethicsImage,
    labName: 'Lab 6: Ethics of AI',
    labBody: 'This lab introduces the ethics behind AI. The user will be introduced to what goes into' +
      ' the development of an AI and what needs to be done to make it ethical. The exercise portion ' +
      'will bring the user through multiple scenarios where the AI has a bias against certain groups. ' +
      'The user will then be asked about the issues bias brings and asks the user to make changes to ' +
      'the AI.',
    lectureSlides: '',
    videoLink: ''
  },
  {
    image: aicsecImage,
    labName: 'Lab 7: AI in Cybersecurity',
    labBody: 'This lab will provide participants with a fundamental understanding of the core aspects of ' +
      'autonomous systems through a cybersecurity lens, which is a significant area of application for AI and ' +
      'Machine Learning. To strengthen this understanding, the participant will progress through a simulation of ' +
      'an autonomous system that will modify the access of sensitive files when security threats are present in the system.',
    lectureSlides: '',
    videoLink: ''
  },
]