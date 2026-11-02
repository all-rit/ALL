import { createContext } from "react";
const ExerciseStateContext = createContext({
  exerciseState: "",
  setExerciseState: () => {},
  tasks: {},
  setTasks: () => {},
  activeTask: null,
  setActiveTask: () => {},
});

export default ExerciseStateContext;
