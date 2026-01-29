import React from "react";
import { Router } from "@reach/router";
import { ExerciseStateProvider } from "./Lab13Context";

import ExerciseIntroduction from "./pages/ExerciseIntroduction";
import ConfidenceRanking from "./pages/ConfidenceRanking";
import AIPanel from "./pages/AIPanel.js";
import AIandSearchPanel from "./pages/AIandSearchPanel.js";
import Conclusion from "./pages/Conclusion.js";
import DunningKrugerExplination from "./pages/DunningKrugerExplination";
import HaloExplination from "./pages/HaloExplination";
import IDEExercise from "./pages/IDEExercise";
import IDEIntroduction from "./pages/IDEIntroduction";
import PanelswithIDEFixes from "./pages/PanelswithIDEFixes";
import TruthBiasExplination from "./pages/TruthBiasExplination";

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
          <AIandSearchPanel path="/AIandSearchPanel" />
          <HaloExplination path="/HaloExplination" />
          <DunningKrugerExplination path="/DunningKrugerExplination" />
          <IDEExercise path="/IDEExercise" />
          <IDEIntroduction path="/IDEIntroduction" />
          <PanelswithIDEFixes path="/PanelswithIDEFixes" />
          <TruthBiasExplination path="/TruthBiasExplination" />
          <Conclusion path="/Conclusion" />
          {/*
            // <FormRepair path="/FormRepair" />
            // <DatabaseRepair path={"/DatabaseRepair"} />
            // <ExerciseIntro default path="/" />
            // <GradApplication path="/GraduationApplication" />
            // <PreWrongDiploma path="/PreWrongDiploma" />
            // <Diploma path="/Diploma" />
            // <AlumniNewsletter path="/AlumniNewsletter" name="Test" />
            // <PostWrongNewsletter path="/PostWrongNewsletter" />
            // <PreDbRepair path={"/PreDbRepair"} />
            // <PreCorrectDiploma path="/PreCorrectDiploma" />
            // <PostCorrectNewsletter path="/PostCorrectNewsletter" />
            // <KeyTakeaways path="/KeyTakeaways" />
          */}
        </Router>
      </ExerciseStateProvider>
    </div>
  );
};
export default Main;
