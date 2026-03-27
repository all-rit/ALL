import { createContext } from "react";

const Lab0Context = createContext({
  section: {},
  updateSectionStatus: () => {},
  handleNav: () => {},
  setLabIdeasComplete: () => {},
  experientialExerciseComplete: false,
  setExperientialExerciseComplete: () => {},
  sprintPlanningComplete: false,
  setSprintPlanningComplete: () => {},
  newCategoryName: "",
  setNewCategoryName: () => {},
  newLabTopics: [],
  setNewLabTopics: () => {},
});

export default Lab0Context;
