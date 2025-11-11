import React, { useState } from "react";
import { Router } from "@reach/router";

import { EXERCISE_STATES } from "../../../constants/lab13";
import ExerciseStateContext from "./Lab13Context";

// lab imported dependencies;

import ExerciseIntroduction from "./pages/ExerciseIntroduction";
import ConfidenceRanking from "./pages/ConfidenceRanking";
import AIPanel from "./pages/AIPanel.js";
import AIandSearchPanel from "./pages/AIandSearchPanel.js";
import Conclusion from "./pages/Conclusion.js";
import DunningKrugerExplination from "./pages/DunningKrugerExplination";
import HaloExplination from "./pages/HaloExplination";
import IDEExercise from "./pages/IDEExercise";
import IDEIntroduction from "./pages/IDEIntroduction";
import PanelswithIDEFixes from "./pages/PanelswithIDEFixes";
import TruthBiasExplination from "./pages/TruthBiasExplination";

/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [preferredName, setPreferredName] = useState("");
  // const [pronouns, setPronouns] = useState("");
  // const [college, setCollege] = useState("");
  // const [major, setMajor] = useState("");
  // const [gradTerm, setGradTerm] = useState("");

  return (
    <div className="bottomSpace tw-overflow-y-scroll tw-p-6">
      <ExerciseStateContext.Provider
        value={{
          exerciseState,
          setExerciseState,
          // firstName,
          // setFirstName,
          // lastName,
          // setLastName,
          // preferredName,
          // setPreferredName,
          // pronouns,
          // setPronouns,
          // college,
          // setCollege,
          // major,
          // setMajor,
          // gradTerm,
          // setGradTerm,
        }}
      >
        <Router className="app">
          <ExerciseIntroduction default path="/" />
          <ConfidenceRanking path="/ConfidenceRanking" />
          <AIPanel path="/AIPanel" />
          <AIandSearchPanel path="/AIandSearchPanel" />
          <HaloExplination path="/HaloExplination" />
          <DunningKrugerExplination path="/DunningKrugerExplination" />
          <IDEExercise path="/IDEExercise" />
          <IDEIntroduction path="/IDEIntroduction" />
          <PanelswithIDEFixes path="/PanelswithIDEFixes" />
          <TruthBiasExplination path="/TruthBiasExplination" />
          <Conclusion path="/Conclusion" />
          {/* // /* <FormRepair path="/FormRepair" />
          // <DatabaseRepair path={"/DatabaseRepair"} />
          // <ExerciseIntro default path="/" />
          // <GradApplication path="/GraduationApplication" />
          // <PreWrongDiploma path="/PreWrongDiploma" />
          // <Diploma path="/Diploma" />
          // <AlumniNewsletter path="/AlumniNewsletter" name="Test" />
          // <PostWrongNewsletter path="/PostWrongNewsletter" />
          // <PreDbRepair path={"/PreDbRepair"} />
          // <PreCorrectDiploma path="/PreCorrectDiploma" />
          // <PostCorrectNewsletter path="/PostCorrectNewsletter" />
          // <KeyTakeaways path="/KeyTakeaways" /> */}
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};
export default Main;
