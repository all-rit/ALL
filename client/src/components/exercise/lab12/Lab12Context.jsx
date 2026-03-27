import { createContext } from "react";
const ExerciseStateContext = createContext({
  exerciseState: "",
  setExerciseState: () => {},
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
  preferredName: "",
  setPreferredName: () => {},
  pronouns: "",
  setPronouns: () => {},
  college: "",
  setCollege: () => {},
  major: "",
  setMajor: () => {},
  gradTerm: "",
  setGradTerm: () => {},
});

export default ExerciseStateContext;
