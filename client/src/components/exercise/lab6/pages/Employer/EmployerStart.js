import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const EmployerStart = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleStart = () => {
    navigate("/Lab6/Exercise/FavorableHiringCandidate");
  };

  return (
    <div className="center-div">
      <h2 className="tw-title tw-text-left tw-my-6">
        Exercise Part 2: Employer
      </h2>
      <div className="tw-body-copy tw-text-left tw-my-6">
        In this part of the exercise, you will be looking at applications for
        “MegaCorp” as a hiring manager with an AI assistant to help you pare
        down the applicants. The AI does have an error, see if you can find it.
      </div>
      <div className="tw-body-copy tw-text-left tw-my-6">
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
