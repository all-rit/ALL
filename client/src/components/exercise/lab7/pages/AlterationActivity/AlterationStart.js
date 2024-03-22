import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { MathComponent } from "mathjax-react";
import { EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";

/**
 * Renders the start page for the Alteration activity.
 * This page provides an introduction to the activity and allows the user to start the quiz.
 *
 * @returns {JSX.Element} The rendered AlterationStart component.
 */
const AlterationStart = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleStart = () => {
    navigate("/Lab7/Exercise/AlterationQuiz");
  };

  return (
    <>
      <div className="center-div">
        <div className="guidance margin-bottom-2">
          <p className="playthrough__sentence">
            In this part of the exercise, you will be looking at different
            versions of the utility equation that you edited in the last
            activity.
          </p>
          <div>
            <p className="playthrough__sentence">
              In machine learning, a <b>utility equation</b> is used to assign
              values to certain actions that the AI system can take. A
              simplified version of a utility equation can be written as:
            </p>
            <MathComponent
              tex={String.raw`Utility = \frac{Reward\;Value}{Cost\;Value}`}
            />
            <p className="playthrough__sentence">
              The goal of a <b>utility equation</b> is to get more reward,
              despite the cost or higher utility.
            </p>
          </div>
          <p className="playthrough__sentence">
            To assess your understanding and grasp of the material, you will be
            given the original utility equation that was provided and a new
            equation. You will then be asked to compare them and their impact on
            the autonomous system.
          </p>
        </div>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleStart}
          key="continue"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default AlterationStart;
