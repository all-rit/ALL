// Exercise Instructions (Page #1)

import React from "react";
import useMainStateContext from "src/reducers/MainContext";
import { navigate } from "@reach/router";
import { useEffect } from "react";
import { EXERCISE_PLAYING } from "src/constants/index";

const ExerciseIntro = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate(`/Lab12/Exercise/`);  // WHATEVER THE LINK IS TO THE FIRST AINSLEY INPUT FORM (wrong pronouns)
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          You just graduated from ALL University! Congratulations on completing your degree! Now that you have finished, you will apply for graduation and transition from being a student to being an alum. 
        </p>
        <p className="playthrough__sentence">
          In this exercise, you will enter your personal information in a small form. This information will appear on your diploma and we will see how to improve the form. Click the “Start” button to begin this exercise!
        </p>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Start&quot; button to begin the exercise!
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

export default ExerciseIntro;