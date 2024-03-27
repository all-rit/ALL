import React, { useState } from "react";
import { Router } from "@reach/router";
// lab imported dependencies;
import Test from "./pages/Test";
import { EXERCISE_STATES } from "../../../constants/lab12";
import GameStateContext from "./Lab12Context";
/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );
  return (
    <div className="bottomSpace">
      <GameStateContext.Provider value={{ exerciseState, setExerciseState }}>
        <Router className="app">
          <Test path="/*" />
        </Router>
      </GameStateContext.Provider>
    </div>
  );
};
export default Main;