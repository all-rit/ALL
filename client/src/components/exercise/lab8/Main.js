import React from "react";
import { Router } from "@reach/router";
import PropTypes from "prop-types";

import ExerciseStart from "./pages/ExerciseStart";
import BiasDiscovery from "./pages/BiasDiscovery";
import BiasedSimulation from "./pages/BiasedSimulation";
import SentimentAnalysisInfo from "./pages/SentimentAnalysisInfo";
import DataRepair from "./pages/DataRepair";
import Conclusion from "./pages/Conclusion";

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
        <DataRepair path="/DataRepair" user={user} isComplete={false} />
        <SentimentAnalysisInfo path="/SentimentAnalysisInfo" />

        <Conclusion path="/Conclusion" />
      </Router>
    </div>
  );
};

Main.propTypes = {
  user: PropTypes.object,
};

export default Main;
