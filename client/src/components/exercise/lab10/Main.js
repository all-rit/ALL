import React from "react";
import { Router } from "@reach/router";
import "../../../assets/stylesheets/main.scss";
import ExerciseStart from "./pages/ExerciseStart";
import ExerciseEnd from "./pages/ExerciseEnd";
import BuildingAI from "./pages/BuildingAI";
import TrainingAI from "./pages/TrainingAI";
import AISimulation from "./pages/AISimulation";
import BuildingAIRepair from "./pages/BuildingAIRepair";
import TrainingAIRepair from "./pages/TrainingAIRepair";
import UpdatedTrainingAI from "./pages/UpdatedTrainingAI";
import AIExplanation from "./pages/AIExplanation";
import SecondTrainingAI from "./pages/SecondTrainingAI";
import SecondAISimulation from "./pages/SecondAISimulation";

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
        <UpdatedTrainingAI path={"/UpdatedTrainingAI"} />

        {/* Phase Three: AI Simulation */}
        <AISimulation path={"/AISimulation"} />
        <AIExplanation path={"/AISimulation/Explanation"} />

        {/* Phase Four: Training the AI Part 2 */}
        <SecondTrainingAI path={"/SecondTrainingAI"} />

        {/* Phase Five: AI Simulation Part 2 */}
        <SecondAISimulation path={"/SecondAISimulation"} />

        {/* Exercise End */}
        <ExerciseEnd path="/ExerciseEnd" />
      </Router>
    </div>
  );
};

export default Main;
