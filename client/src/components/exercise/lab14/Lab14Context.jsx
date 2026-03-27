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
  rsaShiftValue: 1024,
  setRsaShiftValue: () => {},
});

export default ExerciseStateContext;
