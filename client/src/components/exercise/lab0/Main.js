import React, { useState } from "react";
import { Router } from "@reach/router";
import SelectExercise from "./SelectExercise";
import GameStateContext from "./Lab0Context";
import { EXERCISE_STATES } from "../../../constants/lab0";

const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );

  return (
    <>
      <GameStateContext.Provider value={{ exerciseState, setExerciseState }}>
        <Router className={"tw-p-3"}>
          <SelectExercise default path={"/*"} />
        </Router>
      </GameStateContext.Provider>
    </>
  );
};

export default Main;
