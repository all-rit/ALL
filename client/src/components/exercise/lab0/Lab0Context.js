import { createContext } from "react";

const Lab0Context = createContext({
  exerciseState: "",
  setExerciseState: () => {},
  handleNav: () => {},
  newCategoryName: "",
  setNewCategoryName: () => {},
  newLabTopics: [],
  setNewLabTopics: () => {},
});

export default Lab0Context;
