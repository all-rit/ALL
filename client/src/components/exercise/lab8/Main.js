/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React from "react";
import { Router } from "@reach/router";

import ExerciseStart from "./pages/ExerciseStart";
import BiasDiscovery from "./pages/BiasDiscovery";
import BiasedSimulation from "./pages/BiasedSimulation";
import DataRepair from "./pages/DataRepair";

// import ChatRoom from "./components/ChatRoom";

const Main = () => {
  return (
    <div className="bottomSpace">
      <Router className="app">
        <ExerciseStart path="/*" />
        <BiasedSimulation path="/BiasedSimulation" />
        <BiasDiscovery path="/BiasDiscovery" />

        {/* Repair Section */}
        <DataRepair path="/DataRepair" />
      </Router>
    </div>
  );
};

export default Main;
