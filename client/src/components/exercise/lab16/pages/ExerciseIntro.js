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
    navigate("/Lab16/Exercise/Game");
  };

  return (
    <div className="center-div">
      <h1 className="tw-title tw-text-left">Exercise Start</h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-6">
          Welcome to ALL's Tic-Tac-Toe tournament! You will be competing against an AI with a remote teammate. 
          The team with the highest score wins! The AI will be 'X' and your team will be 'O'. 
          Use your mouse or touchpad to click the box that you want to place the 'O' in. 
        </p>
        <p className="tw-body-text tw-text-left">
          Your teammate will be playing their own round against the AI. Take turns to fill the board! 
          First to match 3 of their letter in any direction: horizontal, vertical and diagonal, scores a point. 
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
