import { createContext } from "react";
const ExerciseStateContext = createContext({
  exerciseState: "",
  setExerciseState: () => {},
  caesarBaseMessage: "",
  setCaesarBaseMessage: () => {},
  caesarEncryptedMessage: "",
  setCaesarEncryptedMessage: () => {},
  rsaBaseMessage: "",
  setRsaBaseMessage: () => {},
  rsaEncryptedMessage: "",
  setRsaEncryptedMessage: () => {},
});

export default ExerciseStateContext;
