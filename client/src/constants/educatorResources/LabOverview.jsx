import CreateAGroup from "../../assets/images/educator_resources/CreateAGroup.png";
import DeleteModal from "../../assets/images/educator_resources/DeleteModal.png";
import SignIn from "../../assets/images/educator_resources/SignInExample.png";
import StudentSearch from "../../assets/images/educator_resources/SearchForStudent.png";
import UpdateGroup from "../../assets/images/educator_resources/UpdateGroupModal.png";
import JoinGroup from "../../assets/images/educator_resources/JoinGroupModal.png";
import StudentProgress from "../../assets/images/educator_resources/MonitorStudentProgress.png";
import AssignedLabs from "../../assets/images/educator_resources/MyLabs.png";
import About from "../../assets/images/educator_resources/About.png";
import Reading from "../../assets/images/educator_resources/Reading.png";
import Exercise from "../../assets/images/educator_resources/Exercise.png";
import Reinforcement from "../../assets/images/educator_resources/Reinforcement.png";
import Quiz from "../../assets/images/educator_resources/Quiz.png";
import Labs from "../../assets/images/educator_resources/Labs.png";
export const LAB_OVERVIEW = [
  {
    id: 0,
    title: "Lab Overview",
    description:
      "Each of our labs follows a consistent workflow, starting with an 'About' section that provides a brief introduction to the topic. From there, participants delve into an informative Reading section, which covers essential concepts like Color Blindness or AI biases. After absorbing key information, participants engage with an interactive exercise designed to both educate and foster empathy for those affected by the topic. Following the exercise, participants watch 2-3 videos in the Reinforcement section to reinforce their understanding. The lab concludes with a quiz to test their newfound knowledge. Below are detailed descriptions of each section.",
    image: Labs,
  },
  {
    id: 1,
    title: "Lab About Section",
    description:
      "The About section introduces the lab's core objectives and technical content relevant to the topic. It outlines the lab activities and prepares participants for what lies ahead, ensuring they are ready to engage fully with the material.",
    image: About,
  },
  {
    id: 2,
    title: "Lab Reading Section",
    description:
      "In the Reading section, participants gain a deeper understanding of the lab topic through key definitions, data visualizations, and real-world examples. This section also explores the impact of the topic on various internet users, with additional resources available for those who wish to further expand their knowledge.",
    image: Reading,
  },
  {
    id: 3,
    title: "Lab Exercise Section",
    description:
      "The Exercise section is the heart of the lab, offering a hands-on interactive scenario where participants confront accessibility challenges or poorly trained AI/ML models. Participants are tasked with 'repairing' these components using different languages, such as ReactJS, NodeJS, and MySQL in our custom code editor. Once corrected, they can reattempt the task using the repaired component, gaining both practical skills and a deeper understanding of the topic.",
    image: Exercise,
  },
  {
    id: 4,
    title: "Lab Reinforcement Section",
    description:
      "The Reinforcement section offers additional learning opportunities through 2-3 educational videos. These videos showcase real-life examples of poor web accessibility and its impact on users. This section solidifies the participant’s knowledge and ensures they retain the key concepts from the reading and exercise.",
    image: Reinforcement,
  },
  {
    id: 5,
    title: "Lab Quiz Section",
    description:
      "To conclude, participants are tested in a 5-question quiz that draws from the reading, exercise, and reinforcement videos. Upon completion, participants receive a certificate that includes their quiz score and completion date, serving as a formal acknowledgment of their newly acquired skills.",
    image: Quiz,
  },
];

export const COMING_SOON = "coming soon";

export const GROUP_OVERVIEW = [
  {
    id: 0,
    title: "Signing into User Profile",
    description:
      "In order to create and use our group feature, you must log in using our Google login functionality in the navigation bar at the top of the screen. Once you click the Sign In button, you will be presented a modal that will allow you to log in using your Google account. Don't worry, we only need first name, the first initial of the last name, your email and your profile picture. Once you complete the login process, you will be redirected back to the page you were originally on.",
    image: SignIn,
  },
  {
    id: 1,
    title: "Creating a Group",
    description:
      "To create an instructing group, scroll to the bottom of the profile page, and you will find your current instructing groups, along with a button labeled 'Start a New Group'. Once you click this button, you will be presented a form to select group name, color of the group, and finally a list of labs to be assigned to the group. Once you're satisfied with your group, click the 'Create Group' button at the bottom of the modal, and you will see the newly created group in the 'View Your Instructing Groups' section.",
    image: CreateAGroup,
  },
  {
    id: 2,
    title: "Updating a Group",
    description:
      "To update a group, if you've already created instructing groups, scroll to the 'View Your Instructing Groups' section of your profile page. You will find an 'Edit/View Group' button on the lab card. By clicking this button, you'll be presented a modal similar to when you created the group before. Once you are satisfied with your changes, click the 'Update Group' button at the bottom of the modal, and the group will automatically update.",
    image: UpdateGroup,
  },
  {
    id: 3,
    title: "Joining a Group",
    description:
      "To join a group, you must have a unique group code that is automatically produced when a group is created. This code is found on the top of every group card in your 'View Your Instructing Groups' section. Simply copy this code, and have your students click the 'Join a New Group' button in the middle of the profile page. This will open a modal that allows the student to input the given group code, and join the group.",
    image: JoinGroup,
  },
  {
    id: 4,
    title: "Monitor Student Progress",
    description:
      "To monitor student progress, navigate to the 'View Your Instructor Groups' section, click the 'Student Progress' button on a group. This will bring up a list of the labs assigned to the group. When you click a lab, you will see a list of the students assigned to this group, along with lab progress, quiz score, and the date of section completion.",
    image: StudentProgress,
  },
  {
    id: 5,
    title: "View Assigned labs",
    description:
      "As a student, to view your assigned labs, you have multiple options. You may investigate the labs in the 'My Labs' section, that are split up into Not Started, In Progress, and Completed tabs. The other option is to scroll to 'View Your Enrolled Student Groups' section and click the card of the group you have been assigned to. This will bring up a modal that includes all of the labs you have been assigned.",
    image: AssignedLabs,
  },
  {
    id: 6,
    title: "Searching for Labs",
    description:
      "To search for a specific lab in your assigned labs, you can simply use the search bar in the 'My Labs' section. Enter your query and click the magnifying glass icon to the right of the input and you will see your search results!",
    image: AssignedLabs,
  },
  {
    id: 7,
    title: "Search for Students",
    description:
      "As an instructor, so search for a specific student in a group, scroll to the 'View Your Instructor Groups' section, and click the desired groups 'Student Progress' button. Once you select the lab you wish to see student progress of, a list of students and a search bar will appear where you can search for a particular student.",
    image: StudentSearch,
  },
  {
    id: 8,
    title: "Deleting a Group",
    description:
      "To delete a group, simply scroll to the 'View Your Instructor Groups' section and locate the X icon at the top right of the group card. On clicking this icon, you will be presented a modal that confirms if you wish to complete the deletion. On completion, the group will disappear from your instructing groups.",
    image: DeleteModal,
  },
];
