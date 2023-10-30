import { createContext } from "react";
const ExerciseStateContext = createContext({
  exerciseState: "",
  setExerciseState: () => {},
  letterContent: "",
  setLetterContent: () => {},
  totalWords: 0,
  setTotalWords: () => {},
  totalSentences: 0,
  setTotalSentences: () => {},
  totalComplexWords: 0,
  setTotalComplexWords: () => {},
  fogIndex: 0,
  setFogIndex: () => {},
});

export default ExerciseStateContext;
