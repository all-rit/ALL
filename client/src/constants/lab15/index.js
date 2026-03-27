const LAB_ID = 15;
const EXERCISE_PATH = "/Lab15/Exercise";

const EXERCISE_SELECTION_DEFAULT = "default selection";
const MODEL_REPAIR = "ModelRepair";
const EXERCISE_STATES = {
  EXERCISE_SELECTION_DEFAULT,
  MODEL_REPAIR,
};

// Define what sections exist within the prompt viewer
export const GCSE_SECTIONS = [
  {
    number: 1,
    key: "goal",
    label: "Goal",
    placeholder: "Define what you want the AI to do...",
  },
  {
    number: 2,
    key: "context",
    label: "Context",
    placeholder: "Add the background context the AI needs...",
  },
  {
    number: 3,
    key: "sources",
    label: "Sources",
    placeholder: "Specify any sources to reference (optional)...",
  },
  {
    number: 4,
    key: "expectations",
    label: "Expectations",
    placeholder: "Describe the format, length, or tone of the output...",
  },
];

export const DEFAULT_ACTIVE_KEY = GCSE_SECTIONS[0].key;

export { LAB_ID, EXERCISE_STATES, EXERCISE_PATH };
