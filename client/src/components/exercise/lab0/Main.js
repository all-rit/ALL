import React, { useState } from "react";
import { navigate, Router } from "@reach/router";
import SelectExercise from "./SelectExercise";
import Lab0Context from "./Lab0Context";
import { EXERCISE_STATES } from "../../../constants/lab0";
import ScrumIntroduction from "./DesignLabSection/ScrumIntroduction";
import DesignLabIntroduction from "./DesignLabSection/DesignLabIntroduction";

const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );

  const handleNav = (route) => {
    navigate(`/Lab0/Exercise/${route}`);
  };

  return (
    <>
      <Lab0Context.Provider
        value={{ exerciseState, setExerciseState, handleNav }}
      >
        <Router className={"tw-p-3"} path={"/Lab0/Exercise/"}>
          <SelectExercise default path={"/"} />
          <DesignLabIntroduction path={"/DesignLabIntro"} />
          <ScrumIntroduction path={"/ScrumIntro"} />
        </Router>
      </Lab0Context.Provider>
    </>
  );
};

export default Main;
