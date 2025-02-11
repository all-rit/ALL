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
        <DragDropGame
          containerStyle={"tw-flex tw-gap-5 tw-p-5"}
          colStyle={
            "tw-bg-gray-300 tw-p-4 tw-min-w-[200px] tw-min-h-[300px] tw-rounded-lg tw-shadow-md"
          }
          bankStyle={
            "tw-flex tw-gap-2 tw-py-4 tw-min-w-[200px] tw-px-4 tw-border-4 tw-border-dashed tw-border-black tw-rounded-lg tw-mt-5"
          }
          cardStyle={
            "tw-bg-labYellow tw-p-2 tw-my-1 tw-rounded tw-shadow-sm tw-cursor-grab tw-h-10 tw-w-40 tw-text-black"
          }
          msgStyle={""}
        />
      </div>
    </>
  );
};

export default Main;
