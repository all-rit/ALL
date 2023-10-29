import { navigate } from "@reach/router";
import React from "react";
import Letter from "../components/Letter";

const InformationLetterIntroduction = () => {
  const handleContinue = () => {
    navigate("/Lab11/Exercise/ExerciseEnd");
  };

  return (
    <div className="center-div">
      <div className="playthrough__sentence">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros
        tellus, hendrerit quis iaculis non, blandit eget turpis. Sed at
        tristique ex.
      </div>

      <div className="tw-flex flex-col tw-justify-center">
        <div className="tw-w-full tw-h-auto tw-bg-white tw-rounded-2xl tw-shadow tw-py-5">
          <Letter />
        </div>
      </div>

      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleContinue}
        key="start"
      >
        Next
      </button>
    </div>
  );
};

export default InformationLetterIntroduction;
