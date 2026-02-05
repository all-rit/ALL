import React, { useState } from "react";
import { Router } from "@reach/router";

import ExerciseStart from "./pages/ExerciseStart";
import BiasDiscovery from "./pages/BiasDiscovery";
import BiasedSimulation from "./pages/BiasedSimulation";
import SentimentAnalysisInfo from "./pages/SentimentAnalysisInfo";
import DataRepair from "./pages/DataRepair";
import Conclusion from "./pages/Conclusion";
import ExerciseStateContext from "./Lab8Context";
import { CHAT_MESSAGES } from "../../../constants/lab8";
import SuccessfulAnalysis from "./pages/SuccessfulAnalysis";

const Main = () => {
  const [repairState, setRepairState] = useState(false);
  const [polaritiesCorrect, setPolaritiesCorrect] = useState(false);
  const [currentMessages, setCurrentMessages] = useState(
    CHAT_MESSAGES.messages,
  );

  return (
    <div>
      <ExerciseStateContext.Provider
        value={{
          repairState,
          setRepairState,
          polaritiesCorrect,
          setPolaritiesCorrect,
          currentMessages,
          setCurrentMessages,
        }}
      >
        <Router>
          {/* Phase 1: experience biased sentiment analysis in action */}
          <ExerciseStart path="/*" />
          <BiasedSimulation path="/BiasedSimulation" />
          <BiasDiscovery path="/BiasDiscovery" />

          {/* Phase 2: repair the biased dataset */}
          <DataRepair path="/DataRepair" />
          <SentimentAnalysisInfo path="/SentimentAnalysisInfo" />
          <SuccessfulAnalysis path={"/SuccessfulAnalysis"} />
          <Conclusion path="/Conclusion" />
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};

export default Main;
