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
