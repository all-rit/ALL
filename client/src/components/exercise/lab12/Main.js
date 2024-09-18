import React, { useState } from "react";
import { Router } from "@reach/router";

import AlumniNewsletter from "./pages/AlumniNewsletter";
import { EXERCISE_STATES } from "../../../constants/lab12";
import GameStateContext from "./Lab12Context";
import FormRepair from "./pages/FormRepair";
import DatabaseRepair from "./pages/DatabaseRepair";
import GradApplication from "./components/GradApplication.js";
import Diploma from "./components/Diploma";
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
          <FormRepair path="/FormRepair" />
          <DatabaseRepair path={"/DatabaseRepair"} />
          <ExerciseIntro path="/" />
          <Diploma path="/diploma" />
          <GradApplication path="/GraduationApplication" />
          <PreWrongDiploma path="/PreWrongDiploma" />
          <PostWrongNewsletter path="/PostWrongNewsletter" />
          <PreCorrectDiploma path="/PreCorrectDiploma" />
          <PostCorrectNewsletter path="/PostCorrectNewsletter" />
          <KeyTakeaways path="/KeyTakeaways" />
          {/* TODO: name needs to come from db */}
          <AlumniNewsletter path="/AlumniNewsletter" name="Test" />
        </Router>
      </GameStateContext.Provider>
    </div>
  );
};
export default Main;
