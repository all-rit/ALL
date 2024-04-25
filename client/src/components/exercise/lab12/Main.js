import React, { useState } from "react";
import { Router } from "@reach/router";
// lab imported dependencies;
import { EXERCISE_STATES } from "../../../constants/lab12";
import ExerciseStateContext from "./Lab12Context";
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
  // state to track repair
  const [repairComplete, setRepairComplete] = useState(false);

  return (
    <div className="bottomSpace">
      <ExerciseStateContext.Provider
        value={{
          exerciseState,
          setExerciseState,
          repairComplete,
          setRepairComplete,
        }}
      >
        <Router className="app">
          <ExerciseIntro path="/" />
          <GradApplication path="/GraduationApplication" />
          <PreWrongDiploma path="/PreWrongDiploma" />
          <Diploma path="/Diploma" />
          <PostWrongNewsletter path="/PostWrongNewsletter" />
          <FormRepair path="/FormRepair" />
          <DatabaseRepair path="/DatabaseRepair" />
          {/* go to grad application again */}
          <PreCorrectDiploma path="/PreCorrectDiploma" />
          {/* go to diploma again */}
          {/* go to newsletter again */}
          <PostCorrectNewsletter path="/PostCorrectNewsletter" />
          <KeyTakeaways path="/KeyTakeaways" />
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};
export default Main;
