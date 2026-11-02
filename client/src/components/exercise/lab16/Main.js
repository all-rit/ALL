import React, { useState } from "react";
import { Router } from "@reach/router";

import { EXERCISE_STATES } from "../../../constants/lab16";
import ExerciseStateContext from "./Lab16Context";

// lab imported dependencies;
import ExerciseIntro from "./pages/ExerciseIntro";
import Conclusion from "./pages/Conclusion";
import Game from "./pages/Game";
import ChatRoom from "./pages/ChatRoom";
import ScorePage from "./pages/ScorePage";
import TeammateDeepfake from "./pages/TeammateDeepfake";
import DeepfakeGenerator from "./pages/DeepfakeGenerator";
import GameRegistration from "./pages/GameRegistration";
import MeetTeammate from "./pages/MeetTeammate";

/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );

  const [teammateId, setTeammateID] = useState(0);

  return (
    <div className="bottomSpace tw-overflow-y-scroll tw-p-6">
      <ExerciseStateContext.Provider
      value={{
        exerciseState,
        setExerciseState,
        teammateId,
        setTeammateID
      }}
      >
        <Router className="app">
          <ExerciseIntro default path="/" />
          <GameRegistration path="/GameRegistration"/>
          <MeetTeammate path="/MeetTeammate"/>
          <Game path="/Game" />
          <ScorePage path="/ScorePage"/>
          <TeammateDeepfake path="/TeammateDeepfake"/>
          <ChatRoom path="/ChatRoom" />
          <DeepfakeGenerator path="/DeepfakeGenerator"/>
          <Conclusion path="/Conclusion" />
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};
export default Main;
