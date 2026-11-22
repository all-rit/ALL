import React from "react";
import useMainStateContext from "src/reducers/MainContext";

import { navigate } from "@reach/router";
import { useEffect } from "react";
import { EXERCISE_PLAYING } from "src/constants/index";
import { ExerciseService } from "../../../../services/lab16/ExerciseService";

const ExerciseIntro = () => {
  const { actions, state } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const startExercise = async () => {
    const body = {
      userid: state.main.user.userid,
      isExerciseComplete: false,
      hasViewed: true,
    };
    await ExerciseService.submitExercise(body);
  };

  const handleContinue = () => {
    startExercise();
    navigate("/Lab16/Exercise/GameRegistration");
  };

  return (
    <div className="center-div">
      <h1 className="tw-title tw-text-left">Exercise Start</h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-6">
          Welcome to ALL's Guess The Flag tournament!  
          You and your teammate will work together to identify as many flags as possible. 
          Each player gets 1 minute to guess the flags.
        </p>
        <p className="tw-body-text tw-text-left">
          Your scores will be combined to create your team's total score. 
          The team with the highest combined score at the end of the tournament wins! 
          Good luck!
        </p>
      </div>
      <div className="tw-body-text tw-text-center tw-pb-6">
        Click the <strong>Start</strong> button to begin the exercise!
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
