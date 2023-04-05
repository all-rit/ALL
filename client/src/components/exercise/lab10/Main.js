import React from "react";
import { Router } from "@reach/router";
import "../../../assets/stylesheets/main.scss";
import ExerciseStart from "./pages/ExerciseStart";
import ExerciseEnd from "./pages/ExerciseEnd";
import BuildingAI from "./pages/BuildingAI";

const Main = () => {
  return (
    <div className="bottomSpace">
      <Router className="app">
        {/* Exercise Start */}
        <ExerciseStart default path="/" />

        {/* Phase One: Building the AI */}
        <BuildingAI path={"/BuildingAI"} />

        {/* Exercise End */}
        <ExerciseEnd path="/ExerciseEnd" />
      </Router>
    </div>
  );
};

export default Main;
