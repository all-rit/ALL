import { createContext } from "react";
const ExerciseStateContext = createContext({
  exerciseState: "",
  setExerciseState: () => {},
  tasks: {},
  setTasks: () => {},
  activeTask: null,
  setActiveTask: () => {},
  openTaskId: null,
  setOpenTaskId: () => {},
});

export default ExerciseStateContext;
