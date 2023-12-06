import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";

const ExerciseStart = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  const handleStart = () => {
    actions.updateUserState(EXERCISE_PLAYING);
    navigate("/Lab6/Exercise/AvatarSelection");
  };

  return (
    <div className="center-div">
      <h2 className="playthrough__title">Part 1: Applicant</h2>
      <div className="playthrough__sentence">
        In this exercise you will be applying to the company “MegaCorp.” During
        the process you will experience AI-based bias, and be asked to make
        changes to the AI.
      </div>
      <div className="playthrough__sentence">
        Click the “Start” button to begin this exercise!
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleStart}
        key="start"
      >
        Start
      </button>
    </div>
  );
};

export default ExerciseStart;
