import { createContext } from "react";
const GameStateContext = createContext({
  exerciseState: "",
  setExerciseState: () => {},
});

export default GameStateContext;
