import React from "react";
import { Router } from "@reach/router";
import { ExerciseStateProvider } from "./Lab13Context";

import ExerciseIntroduction from "./pages/ExerciseIntroduction";
import ConfidenceRanking from "./pages/ConfidenceRanking";
import AIPanel from "./pages/AIPanel.js";
import Conclusion from "./pages/Conclusion.js";
import IDEExercise from "./pages/IDEExercise";
import IDEIntroduction from "./pages/IDEIntroduction";

/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = () => {
  return (
    <div className="bottomSpace tw-overflow-y-scroll tw-p-6">
      <ExerciseStateProvider>
        <Router className="app">
          <ExerciseIntroduction default path="/" />
          <ConfidenceRanking path="/ConfidenceRanking" />
          <AIPanel path="/AIPanel" />
          <IDEIntroduction path="/IDEIntroduction" />
          <IDEExercise path="/IDEExercise" />
          <Conclusion path="/Conclusion" />
        </Router>
      </ExerciseStateProvider>
    </div>
  );
};
export default Main;
