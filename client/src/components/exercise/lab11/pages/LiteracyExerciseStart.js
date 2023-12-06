import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "../../../../constants/lab11";
import PropTypes from "prop-types";

const LiteracyExerciseStart = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_IDLE);
  }, []);

  const handleStart = () => {
    actions.updateState(EXERCISE_PLAYING);
    navigate("/Lab11/Exercise/InformationLetterIntroduction");
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          Welcome to ALL University! In this exercise, you are a student and
          receive an email from ALL University for their family weekend event.
          However, the email is incomprehensible due to the amount of complex
          words, so you are unsure of what events will occur during the family
          weekend event.
        </p>
        <p className="playthrough__sentence">
          In this exercise, you will implement the fog index formula, which
          measures readability, by calculating the total number of words, total
          number of sentences, and total number of complex words. Afterwards,
          you will use the fog index to edit the email to increase readability.
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

LiteracyExerciseStart.propTypes = {
  actions: PropTypes.object,
};
export default LiteracyExerciseStart;
