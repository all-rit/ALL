/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "../../../../../constants/lab6";

const ExerciseEnd = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_IDLE);
  }, [actions]);

  const handleFinish = () => {
    navigate("/Lab6/Reinforcement");
  };

  const handleRepair = () => {
    actions.updateState(EXERCISE_PLAYING);
    navigate("/Lab6/Exercise/AIRepair");
  };

  return (
    <div className="center-div">
      <div className="playthrough__sentence">
        You have completed the exercise! Hopefully you have a better
        understanding of the ethics behind AI!
      </div>
      <div className="playthrough__sentence">
        Want to try out different weighted values and hire more candidates?
        Click the &quot;Update Repair&quot; button.
      </div>
      <div className="playthrough__sentence">
        Otherwise click the &quot;Finish Exercise&quot; button to complete this
        exercise!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-second btn-xl text-uppercase  leftButton"
          onClick={handleRepair}
          key="repair"
        >
          Update Repair
        </button>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleFinish}
          key="start"
        >
          Finish Exercise
        </button>
      </div>
    </div>
  );
};

export default ExerciseEnd;
