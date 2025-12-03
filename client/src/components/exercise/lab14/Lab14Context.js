import { createContext } from "react";
const ExerciseStateContext = createContext({
  exerciseState: "",
  setExerciseState: () => {},
  caesarBaseMessage: "",
  setCaesarBaseMessage: () => {},
  caesarEncryptedMessage: "",
  setCaesarEncryptedMessage: () => {},
  caesarShiftAmount: 0,
  setCaesarShiftAmount: () => {},
  rsaBaseMessage: "",
  setRsaBaseMessage: () => {},
  rsaEncryptedMessage: "",
  setRsaEncryptedMessage: () => {},
});

export default ExerciseStateContext;
