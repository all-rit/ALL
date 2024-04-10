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
    navigate(`/Lab12/Exercise/`); // WHATEVER THE LINK IS TO THE FIRST AINSLEY INPUT FORM (wrong pronouns)
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          In the following exercise you are applying for graduation at ALL
          University. Please enter your personal information in a small form.
          This information will appear on your diploma and we will see how to
          improve the questionnaire. Click “Start” to begin!
        </p>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Continue to Exercise&quot; button.
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="start"
        >
          Continue to Exercise
        </button>
      </div>
    </div>
  );
};

export default ExerciseIntro;
