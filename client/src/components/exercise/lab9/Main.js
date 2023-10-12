import React from "react";
import { Router } from "@reach/router";
import PropTypes from "prop-types";

// lab imported dependencies;
import Repair from "./pages/Repair";
import { REPAIR } from "../../../constants/lab9";
import GameStateContext from "../lab9/Lab9Context";
/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = (props) => {
  const { user } = props;
  return (
    <div className="bottomSpace">
      <GameStateContext.Provider>
        <Router className="app">
          <Repair
            path={REPAIR}
            user={user}
            repairText={["Hello", "My name is bob", "how are you"]}
            fileName={"SentimentAnalysisMessages.js"}
          />
        </Router>
      </GameStateContext.Provider>
    </div>
  );
};
Main.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Main;
