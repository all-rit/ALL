import React, { useState } from "react";
import { Router } from "@reach/router";

import { EXERCISE_STATES } from "../../../constants/lab14";
import ExerciseStateContext from "./Lab14Context";

// lab imported dependencies;
// add here

/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );
  // lab state variables here
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
        }}
      >
        <Router className="app">
          {/* elements here */}
          {/* <FormRepair path="/FormRepair" />
          <DatabaseRepair path={"/DatabaseRepair"} />
          <ExerciseIntro default path="/" />
          <GradApplication path="/GraduationApplication" />
          <PreWrongDiploma path="/PreWrongDiploma" />
          <Diploma path="/Diploma" />
          <AlumniNewsletter path="/AlumniNewsletter" name="Test" />
          <PostWrongNewsletter path="/PostWrongNewsletter" />
          <PreDbRepair path={"/PreDbRepair"} />
          <PreCorrectDiploma path="/PreCorrectDiploma" />
          <PostCorrectNewsletter path="/PostCorrectNewsletter" />
          <KeyTakeaways path="/KeyTakeaways" /> */}
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};
export default Main;
