/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React from "react";
import { Router } from "@reach/router";
import ExerciseFrame from "./components/ExerciseFrame";

const Main = () => {
  return (
    <div className="bottomSpace">
      <Router className="app">
        <ExerciseFrame path="/StreamSimulation"/>
      </Router>
    </div>
  );
};

export default Main;
