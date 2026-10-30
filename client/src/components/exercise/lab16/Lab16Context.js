import { createContext,  } from "react";

const ExerciseStateContext = createContext({
    exerciseState: "",
    setExerciseState: () => {},
    teammateId : 0,
    setTeammateID: () => {}
})


export default ExerciseStateContext
