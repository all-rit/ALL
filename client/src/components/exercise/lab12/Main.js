import React, { useState } from "react";
import { Router } from "@reach/router";
// lab imported dependencies;
import Test from "./pages/Test";
import { EXERCISE_STATES } from "../../../constants/lab12";
import GameStateContext from "./Lab12Context";
import ExerciseIntro from "./pages/Explanations/ExerciseIntro";
import PreWrongDiploma from "./pages/Explanations/PreWrongDiploma";
import PostWrongNewsletter from "./pages/Explanations/PostWrongNewsletter";
import PreCorrectDiploma from "./pages/Explanations/PreCorrectDiploma";
import PostCorrectNewsletter from "./pages/Explanations/PostCorrectNewsletter";
import KeyTakeaways from "./pages/Explanations/KeyTakeaways";

/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );
  return (
    <div className="bottomSpace">
      <GameStateContext.Provider value={{ exerciseState, setExerciseState }}>
        <Router className="app">
          <Test path="/*" />
          <ExerciseIntro path="/ExerciseIntro"/>
          <PreWrongDiploma path="/PreWrongDiploma"/>
          <PostWrongNewsletter path="/PostWrongNewsletter"/>
          <PreCorrectDiploma path="/PreCorrectDiploma"/>
          <PostCorrectNewsletter path="/PostCorrectNewsletter"/>
          <KeyTakeaways path="/KeyTakeaways"/>
        </Router>
      </GameStateContext.Provider>
    </div>
  );
};
export default Main;
