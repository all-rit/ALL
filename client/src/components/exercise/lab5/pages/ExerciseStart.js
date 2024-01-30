import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "src/constants/index";

/**
 * Renders the ExerciseStart component.
 * This component displays a start button and a description of the exercise.
 * Clicking the start button updates the user state and navigates to the DyslexiaAccessible page.
 */
const ExerciseStart = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  const handleStart = () => {
    actions.updateUserState(EXERCISE_PLAYING);
    navigate("/Lab5/Exercise/DyslexiaAccessible");
  };

  return (
    <React.Fragment>
      <div className="center-div">
        <div className="guidance margin-bottom-2">
          We will explore a series of cognitive antipatterns that especially
          challenge cognitively impaired individuals. After each antipattern we
          will learn and correct our code to make it more accessible. Finally,
          we will view the updated experience. Click &quot;Start&quot; to begin!
        </div>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleStart}
          key="start"
        >
          Start
        </button>
      </div>
    </React.Fragment>
  );
};

export default ExerciseStart;
