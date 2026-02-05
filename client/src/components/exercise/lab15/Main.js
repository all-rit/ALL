import React, { useState } from "react";
import { Router } from "@reach/router";

import { EXERCISE_STATES } from "../../../constants/lab15";
import ExerciseStateContext from "./Lab15Context";

// lab imported dependencies;
import ExerciseIntro from "./pages/ExerciseIntro";
import ModelHallucination from "./pages/ModelHallucination";
import GoodPromptingGuide from "./pages/GoodPromptingGuide";
import ModelRepair from "./pages/ModelRepair";
import ModelWithGrades from "./pages/ModelWithGrades";
import Conclusion from "./pages/Conclusion";
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
    <div className="bottomSpace tw-overflow-y-scroll tw-p-6">
      <ExerciseStateContext.Provider
        value={{ exerciseState, setExerciseState }}
      >
        <Router className="app">
          <ExerciseIntro default path="/" />
          <ModelHallucination path="/model-hallucination" />
          <GoodPromptingGuide path="/good-prompting-guide" />
          <ModelRepair path="/model-repair" />
          <ModelWithGrades path="/model-with-grades" />
          <Conclusion path="/conclusion" />
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};
export default Main;
