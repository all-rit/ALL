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
    description: "Description for Task 1",
    correctChoice: "quantum",
  },
  {
    id: "task2",
    title: "Task 2",
    description: "Description for Task 2",
    correctChoice: "classical",
  },
  {
    id: "task3",
    title: "Task 3",
    description: "Description for Task 3",
    correctChoice: "quantum",
  },
  {
    id: "task4",
    title: "Task 4",
    description: "Description for Task 4",
    correctChoice: "classical",
  },
  {
    id: "task5",
    title: "Task 5",
    description: "Description for Task 5",
    correctChoice: "quantum",
  },
];

export { LAB_ID, EXERCISE_STATES, EXERCISE_PATH, STAGE_1_TASKS };
