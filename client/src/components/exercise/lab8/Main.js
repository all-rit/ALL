import React from "react";
import { Router } from "@reach/router";

import ExerciseStart from "./pages/ExerciseStart";
import BiasDiscovery from "./pages/BiasDiscovery";
import BiasedSimulation from "./pages/BiasedSimulation";
import SentimentAnalysisInfo from "./pages/SentimentAnalysisInfo";
import DataRepair from "./pages/DataRepair";
import Conclusion from "./pages/Conclusion";

const Main = () => {
  return (
    <div className="bottomSpace">
      <Router className="app">
        {/* Phase 1: experience biased sentiment analysis in action */}
        <ExerciseStart path="/*" />
        <BiasedSimulation path="/BiasedSimulation" />
        <BiasDiscovery path="/BiasDiscovery" />

        {/* Phase 2: repair the biased dataset */}
        <DataRepair path="/DataRepair" />
        <SentimentAnalysisInfo path="/SentimentAnalysisInfo" />

        <Conclusion path="/Conclusion" />
      </Router>
    </div>
  );
};

export default Main;
