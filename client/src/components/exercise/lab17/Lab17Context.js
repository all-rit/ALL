import { createContext } from "react";
const ExerciseStateContext = createContext({
  exerciseState: "",
  setExerciseState: () => {},
  tasks: {},
  setTasks: () => {},
  score: 0,
  activeTask: null,
  setActiveTask: () => {},
  openTaskId: null,
  setOpenTaskId: () => {},
});

export default ExerciseStateContext;
