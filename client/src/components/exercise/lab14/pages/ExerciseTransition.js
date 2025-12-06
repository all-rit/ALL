import React from "react";
import { navigate } from "@reach/router";

const ExerciseTransition = () => {
  const handleContinue = () => {
    navigate("/Lab14/Exercise/CaesarIntro");
  };

  return (
    <div className="center-div">
      <div className="tw-body-text tw-text-center tw-pb-6">
        Click the <strong>Start</strong> button to begin the exercise!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="start"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default ExerciseTransition;
