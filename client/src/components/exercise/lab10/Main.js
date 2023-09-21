import React from "react";
import { Router } from "@reach/router";
import "../../../assets/stylesheets/main.scss";
import ExerciseStart from "./pages/ExerciseStart";
import ExerciseEnd from "./pages/ExerciseEnd";
import BuildingAI from "./pages/BuildingAI";
import TrainingAI from "./pages/TrainingAI";
import AISimulation from "./pages/AISimulation";
import BuildingAIPage from "./pages/BuildingAIPage";
import TrainingAIPage from "./pages/TrainingAIPage";
import UpdatedTrainingAI from "./pages/UpdatedTrainingAI";

const Main = () => {
  return (
    <div className="bottomSpace">
      <Router className="app">
        {/* Exercise Start */}
        <ExerciseStart default path="/" />

        {/* Phase One: Building the AI */}
        <BuildingAI path={"/BuildingAI"} />
        <BuildingAIPage path={"/BuildingAI/Repair"} />

        {/* Phase Two: Training the AI */}
        <TrainingAI path={"/TrainingAI"} />
        <TrainingAIPage path={"/TrainingAI/Repair"} />
        <UpdatedTrainingAI path={"/UpdatedTrainingAI"} />

        {/* Phase Three: AI Simulation */}
        <AISimulation path={"/AISimulation"} />

        {/* Exercise End */}
        <ExerciseEnd path="/ExerciseEnd" />
      </Router>
    </div>
  );
};

export default Main;
