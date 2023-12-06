import React, { useState } from "react";
import { Router } from "@reach/router";
import PropTypes from "prop-types";
// lab imported dependencies;
import LocalizationRepair from "../lab9/pages/LocalizationRepair";
import { REPAIR, EXERCISE_STATES } from "../../../constants/lab9";
import GameStateContext from "./Lab9Context";
import Webpage from "../lab9/components/Webpage";
import ExerciseStart from "../lab9/pages/ExerciseStart";
import Discovery from "./pages/Discovery";
import Conclusion from "../lab9/pages/Conclusion";
import FacadeWebpage from "./components/FacadeWebpage";
/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = (props) => {
  const { user } = props;
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT
  );
  return (
    <div className="bottomSpace">
      <GameStateContext.Provider value={{ exerciseState, setExerciseState }}>
        <Router className="app">
          <ExerciseStart path="/*" />
          <FacadeWebpage path="/InitialPage" />
          <Discovery path="/Discovery" />
          <Webpage user={user} path={"/page"} />
          <LocalizationRepair user={user} path={`${REPAIR}/*`} />
          <Conclusion path="/Conclusion" />
        </Router>
      </GameStateContext.Provider>
    </div>
  );
};
Main.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object,
};
export default Main;
