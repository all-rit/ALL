import { createContext } from "react";
const ExerciseStateContext = createContext({
  exerciseState: "",
  setExerciseState: () => {},
  caesarBaseMessage: "",
  setCaesarBaseMessage: () => {},
  caesarEncryptedMessage: "",
  setCaesarEncryptedMessage: () => {},
  vigenereBaseMessage: "",
  setVigenereBaseMessage: () => {},
  vigenereKey: "",
  setVigenereKey: () => {},
  vigenereEncryptedMessage: "",
  setVigenereEncryptedMessage: () => {},
  rsaBaseMessage: "",
  setRsaBaseMessage: () => {},
  rsaEncryptedMessage: "",
  setRsaEncryptedMessage: () => {},
});

export default ExerciseStateContext;
