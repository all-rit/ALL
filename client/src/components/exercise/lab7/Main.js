import React from "react";
import { Router } from "@reach/router";
import "../../../assets/stylesheets/main.scss";

import ExerciseStart from "./pages/ExerciseStart";
import AISimulation from "./pages/Simulation/AISimulation";
import SimulationSummary from "./pages/Simulation/SimulationSummary";
import BadAIExplanation from "./pages/Simulation/BadAIExplanation";
import AICodeRepair from "./pages/ImproveAICode/AICodeRepair";
import ImprovedAISimulation from "./pages/ImproveAICode/ImprovedAISimulation";
import AlterationStart from "./pages/AlterationActivity/AlterationStart";
import AlterationQuiz from "./pages/AlterationActivity/AlterationQuiz";
import ExerciseEnd from "./pages/ExerciseEnd";

const Main = () => {
  return (
    <div className="bottomSpace">
      <Router className="app">
        <ExerciseStart default path="/*" />

        {/* Phase 1: Simulation */}
        <AISimulation path="/AISimulation" />
        <SimulationSummary path="/SimulationSummary" />
        <BadAIExplanation path="/BadAIExplanation" />

        {/* Phase 2: Improve AI Code Repair */}
        <AICodeRepair path="/AICodeRepair" />
        <ImprovedAISimulation path="/ImprovedAISimulation" />

        {/* Phase 3: Alteration Activity */}
        <AlterationStart path="/AlterationStart" />
        <AlterationQuiz path="/AlterationQuiz" />

        <ExerciseEnd path="/ExerciseEnd" />
      </Router>
    </div>
  );
};

export default Main;
