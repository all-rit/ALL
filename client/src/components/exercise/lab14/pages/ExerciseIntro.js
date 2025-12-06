import React from "react";
import useMainStateContext from "src/reducers/MainContext";

import { navigate } from "@reach/router";
import { useEffect } from "react";
import { EXERCISE_PLAYING } from "src/constants/index";
import { ExerciseService } from "../../../../services/lab14/ExerciseService";

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
    navigate("/Lab14/Exercise/Superposition");
  };

  return (
    <div className="center-div">
      <h1 className={"tw-title tw-text-left"}>Exercise Start</h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-4">
          Congrats! You are a quantum researcher at ALL Research and
          Development. You are tasked with looking into how quantum computing
          can improve everyday tasks, specifically with ciphers and data
          security. In this exercise, you will work with quantum concepts such
          as superposition and entanglement to see how they can be applied to
          encrypting and decrypting messages using the Caesar and RSA ciphers.
        </p>
        <p className="tw-body-text tw-text-left tw-py-2"></p>
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
