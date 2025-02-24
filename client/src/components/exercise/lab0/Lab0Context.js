import { createContext } from "react";

const Lab0Context = createContext({
  exerciseState: "",
  setExerciseState: () => {},
  handleNav: () => {},
  labIdeasComplete: false,
  setLabIdeasComplete: () => {},
  experientialExerciseComplete: false,
  setExperientialExerciseComplete: () => {},
  sprintPlanningComplete: false,
  setSprintPlanningComplete: () => {},
});

export default Lab0Context;
