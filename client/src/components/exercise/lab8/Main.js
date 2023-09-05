/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React from "react";
import { Router } from "@reach/router";

import ExerciseStart from "./pages/ExerciseStart";
import BiasDiscovery from "./pages/BiasDiscovery";
import BiasedSimulation from "./pages/BiasedSimulation";
import SentimentAnalysisInfo from "./pages/SentimentAnalysisInfo";
import DataRepair from "./pages/DataRepair";
import Conclusion from "./pages/Conclusion";

// import ChatRoom from "./components/ChatRoom";

const Main = (props) => {
  const { user } = props;
  return (
    <div className="bottomSpace">
      <Router className="app">
        {/* Phase 1: experience biased sentiment analysis in action */}
        <ExerciseStart path="/*" />
        <BiasedSimulation path="/BiasedSimulation" user={user} />
        <BiasDiscovery path="/BiasDiscovery" user={user} />

        {/* Phase 2: repair the biased dataset */}
        <DataRepair path="/DataRepair" user={user} />
        <SentimentAnalysisInfo path="/SentimentAnalysisInfo" />

        <Conclusion path="/Conclusion" />
      </Router>
    </div>
  );
};

export default Main;
