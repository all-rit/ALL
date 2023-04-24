import React from "react";
import { Router } from "@reach/router";
import "../../../assets/stylesheets/main.scss";
import ExerciseStart from "./pages/ExerciseStart";
import ExerciseEnd from "./pages/ExerciseEnd";
import BuildingAI from "./pages/BuildingAI";
import BuildingAIRepair from "./pages/BuildingAIRepair";
import TrainingAI from "./pages/TrainingAI";
import TrainingAIRepair from "./pages/TrainingAIRepair";
import ViewingAIWeightPage from "./pages/ViewingAIWeightPage";
import AIWeightCodeBlock from "./components/AIWeightCodeBlock";

const Main = () => {
  return (
    <div className="bottomSpace">
      <Router className="app">
        {/* Exercise Start */}
        <ExerciseStart default path="/" />

        {/* Phase One: Building the AI */}
        <BuildingAI path={"/BuildingAI"} />
        <BuildingAIRepair path={"/BuildingAI/Repair"} />

        {/* Phase Two: Training the AI */}
        <TrainingAI path={"/TrainingAI"} />
        <TrainingAIRepair path={"/TrainingAI/Repair"} />

        {/* Phase Three: View Current Weight */}
        <AIWeightCodeBlock />
        <ViewingAIWeightPage path={"/ViewWeights"} />

        {/* Exercise End */}
        <ExerciseEnd path="/ExerciseEnd" />
      </Router>
    </div>
  );
};

export default Main;
