import React, { useState } from "react";
import { Router } from "@reach/router";
// lab imported dependencies;
import LocalizationRepair from "../lab9/pages/LocalizationRepair";
import { REPAIR, EXERCISE_STATES } from "../../../constants/lab9";
import GameStateContext from "./Lab9Context";
import DynamicWebpage from "./components/DynamicWebpage";
import LocalizationExerciseStart from "./pages/LocalizationExerciseStart";
import LocalizationDiscovery from "./pages/LocalizationDiscovery";
import LocalizationExerciseEnd from "./pages/LocalizationExerciseEnd";
import StaticWebpage from "./components/StaticWebpage";
/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT
  );
  return (
    <div className="bottomSpace">
      <GameStateContext.Provider value={{ exerciseState, setExerciseState }}>
        <Router className="app">
          <LocalizationExerciseStart path="/*" />
          <StaticWebpage path="/InitialPage" />
          <LocalizationDiscovery path="/Discovery" />
          <DynamicWebpage path={"/page"} />
          <LocalizationRepair path={`${REPAIR}/*`} />
          <LocalizationExerciseEnd path="/Conclusion" />
        </Router>
      </GameStateContext.Provider>
    </div>
  );
};
export default Main;
