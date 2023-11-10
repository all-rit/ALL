/* eslint-disable no-unused-vars */

import React, { useState, useContext } from "react";
import { Router, navigate } from "@reach/router";
import PropTypes from "prop-types";
// lab imported dependencies;
import LocalizationRepair from "../lab9/pages/LocalizationRepair";
import { REPAIR, GAME_STATES } from "../../../constants/lab9";
import GameStateContext from "./Lab9Context";
import Webpage from "../lab9/components/Webpage";
/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = (props) => {
  const { user = "" } = props;
  const [exerciseState, setExerciseState] = useState(
    GAME_STATES.EXERCISE_SELECTION_DEFAULT
  );
  return (
    <div className="bottomSpace">
      <GameStateContext.Provider value={{ exerciseState, setExerciseState }}>
        <Router className="app">
          <Webpage path={"/page"} />
          <LocalizationRepair user={user} path={`${REPAIR}/*`} />
          <ContextTester user={user} path={"/Context"} />
        </Router>
      </GameStateContext.Provider>
    </div>
  );
};
Main.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Main;

/**
 * ContextTester is a component that is responsible for basically containing a
 * proof of concept of the transition int utilizing react context and how to modify it.
 * @returns rendered webpage with buttons to navigate.
 */
const ContextTester = () => {
  const { exerciseState, setExerciseState } = useContext(GameStateContext);
  const nav_repair_handler = (event) => setExerciseState(event.target.value);
  const date_repair_handler = (event) => setExerciseState(event.target.value);
  const address_repair_handler = (event) =>
    setExerciseState(event.target.value);
  const setSelection = (event) => setExerciseState(event.target.value);
  return (
    <div>
      <h1>{exerciseState}</h1>
      <div>
        <button value={GAME_STATES.REPAIR_NAV_BAR} onClick={nav_repair_handler}>
          nav bar
        </button>
        <button
          value={GAME_STATES.REPAIR_DATE_REPAIR}
          onClick={date_repair_handler}
        >
          date repair
        </button>
        <button
          value={GAME_STATES.REPAIR_ADDRESS_FORM}
          onClick={address_repair_handler}
        >
          address
        </button>
        <button
          value={GAME_STATES.EXERCISE_SELECTION_DEFAULT}
          onClick={setSelection}
        >
          set selection
        </button>
      </div>
      <button
        onClick={() => navigate(`/Lab9/Exercise${REPAIR}/${exerciseState}`)}
      >
        go to {exerciseState}
      </button>
    </div>
  );
};
