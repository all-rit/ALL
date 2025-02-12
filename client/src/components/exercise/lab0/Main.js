import React, { useState } from "react";
import { navigate, Router } from "@reach/router";
import SelectExercise from "./SelectExercise";
import Lab0Context from "./Lab0Context";
import { EXERCISE_STATES } from "../../../constants/lab0";
import ScrumIntroduction from "./DesignLabSection/ScrumActivity/ScrumIntroduction";
import DesignLabIntroduction from "./DesignLabSection/DesignLabIntroduction";
import ScrumBoardActivity from "./DesignLabSection/ScrumActivity/ScrumBoardActivity";
import ScrumVelocityReading from "./DesignLabSection/ScrumActivity/ScrumVelocityReading";

const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );

  const handleNav = (route) => {
    navigate(`/Lab0/Exercise/${route}`);
  };

  return (
    <div>
      <Lab0Context.Provider
        value={{ exerciseState, setExerciseState, handleNav }}
      >
        <Router className={"tw-p-3 tw-h-[40rem]"}>
          <SelectExercise default path={"/*"} />
          <DesignLabIntroduction path={"/DesignLabIntro"} />
          <ScrumIntroduction path={"/ScrumIntro"} />
          <ScrumBoardActivity path={"/ScrumBoardActivity"} />
          <ScrumVelocityReading path={"/ScrumVelocityReading"} />
        </Router>
      </Lab0Context.Provider>
    </div>
  );
};

export default Main;
