import React, { useState } from "react";
import { navigate, Router } from "@reach/router";
import SelectExercise from "./SelectExercise";
import Lab0Context from "./Lab0Context";
import { EXERCISE_STATES } from "../../../constants/lab0";
import { default as DragDropGame } from "../../all-components/DragAndDrop/DragAndDrop";

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
          <SelectExercise default path={"/*"} />
          {/*<DragDropGame default path={"/test"} />*/}
        </Router>
      </Lab0Context.Provider>
      <div className="tw-bg-gray-200 tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen">
        <DragDropGame />
      </div>
    </>
  );
};

export default Main;
