/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React from "react";
import { Router } from "@reach/router";
import ExerciseStart from "./pages/ExerciseStart";
import ExerciseFrame from "./components/ExerciseFrame";
import BiasDiscovery from "./pages/BiasDiscovery";

const Main = () => {
  return (
    <div className="bottomSpace">
      <Router className="app">
        <ExerciseStart path="/*" />
        <ExerciseFrame path="/StreamSimulation" />
        <BiasDiscovery path="/BiasDiscovery" />
      </Router>
    </div>
  );
};

export default Main;
