import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "src/constants/index";

const LiteracyExerciseStart = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  const handleStart = () => {
    actions.updateUserState(EXERCISE_PLAYING);
    navigate("/Lab11/Exercise/InformationLetterIntroduction");
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          Welcome to ALL University! In this exercise, you are a student and
          receive an email from ALL University for their family weekend event.
          However, the email is difficult to understand due to the amount of complex
          words, so you are unsure of what events will occur during the family
          weekend event.
        </p>
        <p className="playthrough__sentence">
          In this exercise, you will implement the Fog Index formula, which
          measures readability, by calculating the total number of words, total
          number of sentences, and total number of complex words. Afterwards,
          you will use the Fog Index to edit the email to increase readability.
        </p>
      </div>
      <p className="playthrough__sentence">
        Click the “Start” button to begin this exercise!
      </p>
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

export default LiteracyExerciseStart;
