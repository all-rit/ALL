import React, { useState } from "react";
import { Router } from "@reach/router";

import { EXERCISE_STATES } from "../../../constants/lab17";
import ExerciseStateContext from "./Lab17Context";

import ExerciseIntro from "./pages/ExerciseIntro";
import Conclusion from "./pages/Conclusion";
import Game from "./pages/Game";
import ChatRoom from "./pages/ChatRoom";

const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );

  return (
    <div className="bottomSpace tw-p-6">
      <ExerciseStateContext.Provider
        value={{
          exerciseState,
          setExerciseState,
        }}
      >
        <Router className="app">
          <ExerciseIntro default path="/" />
          <Game path="/Game" />
          <ChatRoom path="/ChatRoom" />
          <Conclusion path="/Conclusion" />
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};

export default Main;
