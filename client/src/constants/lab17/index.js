const LAB_ID = 17;
const EXERCISE_PATH = "/Lab17/Exercise";

const EXERCISE_SELECTION_DEFAULT = "default selection";
// section identifier for Lab 17 repair records
const MODEL_REPAIR = "ModelRepair";
const EXERCISE_STATES = {
  EXERCISE_SELECTION_DEFAULT,
  MODEL_REPAIR,
};

const STAGE_1_TASKS = [
  {
    id: "task1",
    title: "Task 1",
    description: "Predict if a patient's symptoms make them likely to have cancer",
    correctChoice: "quantum",
  },
  {
    id: "task2",
    title: "Task 2",
    description: "Forecast the path of an upcoming hurricane",
    correctChoice: "quantum",
  },
  {
    id: "task3",
    title: "Task 3",
    description: "Analyzing millions of satellite images to determine if a field of crops has a rare root disease",
    correctChoice: "classical",
  },
  {
    id: "task4",
    title: "Task 4",
    description: "Analyze a traffic camera’s footage to find the red getaway car from a crime scene",
    correctChoice: "classical",
  },
  {
    id: "task5",
    title: "Task 5",
    description: "Determining if an image is of a cat or a dog",
    correctChoice: ["quantum","classical"],
  },
];

export { LAB_ID, EXERCISE_STATES, EXERCISE_PATH, STAGE_1_TASKS };
