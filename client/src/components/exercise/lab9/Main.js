import React from "react";
import { Router } from "@reach/router";
import PropTypes from "prop-types";

// lab imported dependencies;
import Repair from "./pages/Repair";
import { index as Lab9Constants } from "../../../constants/lab9;";
import { Lab9Context as GameStateContext } from "../lab9/Lab9Context";
/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = (props) => {
  const { user } = props;
  return (
    <div className="bottomSpace">
      <Router className="app">
        <GameStateContext.Provider>
          <Repair path={Lab9Constants.REPAIR} user={user} />
        </GameStateContext.Provider>
      </Router>
    </div>
  );
};
Main.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Main;
