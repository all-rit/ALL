import { createContext } from "react";
const GameStateContext = createContext({
  exerciseState: "hello",
  setExerciseState: () => {},
});

export default GameStateContext;
