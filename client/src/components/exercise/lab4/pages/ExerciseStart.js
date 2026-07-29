import React from "react";
import { navigate } from "@reach/router";
import AppInstructions from "../components/AppInstructions";

const ExerciseStart = () => {
  const handleSubmit = () => {
    navigate("/Lab4/Exercise/SmallTarget");
  };

  const instructions = "The next page will begin the exercise.";
  return (
    <div className={"tw-p-10 tw-h-full"}>
      <h2 className={"tw-title tw-text-left"}> Exercise Start</h2>
      <AppInstructions instructions={instructions} />
      <div className={"tw-h-full tw-flex-col tw-align-middle"}>
        <button
          onClick={handleSubmit}
          className={"btn tw-bg-primary-blue tw-text-white hover:tw-shadow-md"}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default ExerciseStart;
