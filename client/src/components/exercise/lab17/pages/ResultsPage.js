import React from "react";
import useMainStateContext from "src/reducers/MainContext";
import NumberLine from "../components/NumberLine";

import { navigate } from "@reach/router";
import { useEffect } from "react";
import { EXERCISE_PLAYING } from "src/constants/index";
import { ExerciseService } from "../../../../services/lab17/ExerciseService";

const ResultsPage = () => {
  // number line for the number of points the user has, and the highest they could've gotten

  const handleContinue = () => {
    startExercise();
    navigate("/Lab17/Exercise/QvCGameStage");
  };

  return (
    <div className="center-div">
      <h1 className="tw-title tw-text-left">Results Page</h1>
      <div className="tw-body-text tw-text-left tw-py-3">
        These are your results from your choices in tasks.
      </div>

      <NumberLine
        value={50}
        min={0}
        max={100}
        label=""
      >
      </NumberLine>

      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="continue"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
