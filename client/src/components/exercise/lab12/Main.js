import React, { useState } from "react";
import { Router } from "@reach/router";

import { EXERCISE_STATES } from "../../../constants/lab12";
import ExerciseStateContext from "./Lab12Context";
import FormRepair from "./pages/FormRepair";
import DatabaseRepair from "./pages/DatabaseRepair";

// lab imported dependencies;
import GradApplication from "./components/GradApplication.js";
import Diploma from "./components/Diploma";
import AlumniNewsletter from "./pages/AlumniNewsletter";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [preferredName, setPreferredName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [college, setCollege] = useState("");
  const [major, setMajor] = useState("");
  const [gradTerm, setGradTerm] = useState("");

  return (
    <div className="bottomSpace">
      <ExerciseStateContext.Provider
        value={{
          exerciseState,
          setExerciseState,
          firstName,
          setFirstName,
          lastName,
          setLastName,
          preferredName,
          setPreferredName,
          pronouns,
          setPronouns,
          college,
          setCollege,
          major,
          setMajor,
          gradTerm,
          setGradTerm,
        }}
      >
        <Router className="app">
          <FormRepair path="/FormRepair" />
          <DatabaseRepair path={"/DatabaseRepair"} />
          <ExerciseIntro default path="/" />
          <GradApplication path="/GraduationApplication" />
          <PreWrongDiploma path="/PreWrongDiploma" />
          <Diploma path="/Diploma" />
          {/* TODO: name needs to come from db */}
          <AlumniNewsletter path="/AlumniNewsletter" name="Test" />
          <PostWrongNewsletter path="/PostWrongNewsletter" />
          {/* repair here */}
          <PreCorrectDiploma path="/PreCorrectDiploma" />
          <PostCorrectNewsletter path="/PostCorrectNewsletter" />
          <KeyTakeaways path="/KeyTakeaways" />
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};
export default Main;
