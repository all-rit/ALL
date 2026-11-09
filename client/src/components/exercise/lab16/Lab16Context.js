import { createContext,  } from "react";

const ExerciseStateContext = createContext({
  exerciseState: "",
  setExerciseState: () => {},
  teammateId: 0,
  setTeammateID: () => {},
  //store user-chosen team name
  teamName: "",
  setTeamName: () => {},
});

export default ExerciseStateContext
