import { createContext } from "react";
const ExerciseStateContext = createContext({
  exerciseState: "",
  setExerciseState: () => {},
  baseMessage: "",
  setBaseMessage: () => {},
  encryptedMessage: "",
  setEncryptedMessage: () => {},
  shiftValue: 0,
  setShiftValue: () => {},
});

export default ExerciseStateContext;
