import React, { useState } from "react";
import { Router } from "@reach/router";
// lab imported dependencies;
import { EXERCISE_STATES } from "../../../constants/lab12";
import GameStateContext from "./Lab12Context";
import FormRepair from "./pages/FormRepair";
import DatabaseRepair from "./pages/DatabaseRepair";
import Diploma from "./components/Diploma";

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
          <FormRepair path="/FormRepair" />
          <DatabaseRepair path={"/DatabaseRepair"} />
          <Diploma path="/diploma" />
        </Router>
      </GameStateContext.Provider>
    </div>
  );
};
export default Main;
