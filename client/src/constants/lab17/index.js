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
    points: 1,
    title: "Cancer Symptom Prediction",
    category: "medical",
    description: "Predict if a patient's symptoms make them likely to have cancer",
    correctChoice: "quantum",
  },
  {
    id: "task2",
    points: 1,
    title: "Hurricane Path Prediction",
    category: "weather",
    description: "Forecast the path of an upcoming hurricane",
    correctChoice: "quantum",
  },
  {
    id: "task3",
    points: 1,
    title: "Satellite Image Processing",
    category: "agriculture",
    description: "Analyzing millions of satellite images to determine if a field of crops has a rare root disease",
    correctChoice: "classical",
  },
  {
    id: "task4",
    points: 1,
    title: "Analyze Traffic Footage",
    category: "security",
    description: "Analyze a traffic camera's footage to find the red getaway car from a crime scene",
    correctChoice: "classical",
  },
  {
    id: "task5",
    points: 1,
    title: "Basic Image Processing",
    category: "",
    description: "Determining if an image is of a cat or a dog",
    correctChoice: "quantum" || "classical",
  },
];

const STAGE_2_TASKS = [
  {
    id: "task6",
    points: 1,
    title: "Infrared Image Processing",
    category: "agriculture",
    description: "Analyzing infrared and standard satellite images of a single field to determine if it has a rare root disease",
    correctChoice: "quantum",
  },
  {
    id: "task7",
    points: 1,
    title: "Find the Getaway Car",
    category: "security",
    description: "Combining traffic footage, rental car data, and phone call logs to find the getaway car from a crime scene",
    correctChoice: "quantum",
  },
  {
    id: "task8",
    points: 1,
    title: "24/7 Forecasts",
    category: "weather",
    description: "Creating forecasts for a 24/7 weather channel",
    correctChoice: "classical",
  },
  {
    id: "task9",
    points: 1,
    title: "Sort Test Scores",
    category: "",
    description: "Sorting the test scores for a high school’s PSATs",
    correctChoice: "classical",
  },
  {
    id: "task10",
    points: 1,
    title: "Quickest Delivery Route",
    category: "deliveries",
    description: "Finding one delivery driver the quickest route home",
    correctChoice: "quantum" || "classical",
  },
];

const STAGE_3_TASKS = [
  {
    id: "task6",
    points: 1,
    title: "High-Res Image Processing",
    category: "agriculture",
    description: "Analyzing high-resolution satellite images of wheat fields to determine an issue with the camera",
    correctChoice: "quantum",
  },
  {
    id: "task7",
    points: 1,
    title: "Optimal Delivery Routes",
    category: "deliveries",
    description: "Finding the optimal route for a fleet of delivery drivers considering traffic, weather, location, etc.",
    correctChoice: "quantum",
  },
  {
    id: "task8",
    points: 1,
    title: "Real-time Security",
    category: "weather",
    description: "Determining if a dog appears on a security camera in real time",
    correctChoice: "classical",
  },
  {
    id: "task9",
    points: 1,
    title: "Predict Similar Symptoms",
    category: "medical",
    description: "Predict if the national database of cancer patients have similar symptoms",
    correctChoice: "classical",
  },
  {
    id: "task10",
    points: 1,
    title: "Credit Card Fraud",
    category: "security",
    description: "Analyzing credit card transactions for fraud in a tourist city",
    correctChoice: "quantum" || "classical",
  },
];
export { LAB_ID, EXERCISE_STATES, EXERCISE_PATH, STAGE_1_TASKS, STAGE_2_TASKS, STAGE_3_TASKS };
