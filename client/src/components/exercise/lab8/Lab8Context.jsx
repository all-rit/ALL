import { createContext } from "react";
const ExerciseStateContext = createContext({
  repairState: false,
  setRepairState: () => {},
  currentMessages: [],
  setCurrentMessages: () => {},
  polaritiesCorrect: false,
  setPolaritiesCorrect: () => {},
});

export default ExerciseStateContext;
