/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React from "react";
import { Router } from "@reach/router";

import ExerciseStart from "./pages/ExerciseStart";
import BiasDiscovery from "./pages/BiasDiscovery";
import BiasedSimulation from "./pages/BiasedSimulation";

// import ChatRoom from "./components/ChatRoom";

const Main = () => {
  return (
    <div className="bottomSpace">
      <Router className="app">
        <ExerciseStart path="/*" />
        <BiasedSimulation path="/BiasedSimulation" />
        <BiasDiscovery path="/BiasDiscovery" />
      </Router>
    </div>
  );
};

export default Main;
