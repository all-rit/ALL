import { createContext } from "react";

const ExerciseStateContext = createContext({
<<<<<<< Updated upstream
  exerciseState: "",
  setExerciseState: () => {},
});
=======
    exerciseState: "",
    setExerciseState: () => {},
    teammateId : 0,
    setTeammateID: () => {},
    //store user-chosen team name
    teamName: "",
    setTeamName: () => {}
})
>>>>>>> Stashed changes

export default ExerciseStateContext;
