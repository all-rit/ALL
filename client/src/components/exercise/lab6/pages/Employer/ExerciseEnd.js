import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "src/constants/index";

const ExerciseEnd = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

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
