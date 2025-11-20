import React from "react";
import useMainStateContext from "src/reducers/MainContext";
import { navigate } from "@reach/router";
import { useEffect } from "react";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "src/constants/index";

const ExerciseIntro = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  const handleContinue = () => {
    actions.updateUserState(EXERCISE_PLAYING);
    navigate("/Lab14/Exercise/Superposition");
  };

  return (
    <div className="center-div">
      <h1 className={"tw-title tw-text-left"}>Exercise Start</h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-6">
          Congrats! You are a quantum researcher at ALL Research and
          Development. You are tasked with looking into how quantum computing
          can improve everyday tasks, specifically with ciphers and data
          security.
        </p>
        <p className="tw-body-text tw-text-left">
          In this exercise, you will work with quantum concepts such as
          superposition and entanglement to see how they can be applied to
          encrypting and decrypting messages using the Caesar and RSA ciphers.
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
