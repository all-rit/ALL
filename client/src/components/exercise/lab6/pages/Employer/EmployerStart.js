/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";

const EmployerStart = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const handleStart = () => {
    navigate("/Lab6/Exercise/FavorableHiringCandidate");
  };

  return (
    <div className="center-div">
      <h2 className="playthrough__title">Part 2: Employer</h2>
      <div className="playthrough__sentence">
        In this part of the exercise, you will be looking at applications for
        “MegaCorp” as a hiring manager with an AI assistant to help you pare
        down the applicants. The AI does have an error, see if you can find it.
      </div>
      <div className="playthrough__sentence">
        Click the “Continue” button to begin the second half of this exercise!
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleStart}
        key="start"
      >
        Continue
      </button>
    </div>
  );
};

export default EmployerStart;
