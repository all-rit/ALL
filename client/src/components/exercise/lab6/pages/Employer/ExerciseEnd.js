import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "src/constants/index";
import LabButton from "../../../../all-components/LabButton";

const ExerciseEnd = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  const handleFinish = () => {
    navigate("/Lab6/Reinforcement");
  };

  const handleRepair = () => {
  actions.updateUserState(EXERCISE_PLAYING);
  navigate("/Lab6/Exercise/AIRepair");
  };

  return (
    <div className="center-div">
      <h2 className={"tw-title tw-text-left tw-my-6"}> Exercise Complete </h2>
      <div className="tw-body-text tw-text-left tw-my-6">
        You have completed the exercise! Hopefully you have a better
        understanding of the ethics behind AI!
      </div>
      <div className="tw-body-text tw-text-left tw-my-6">
        Want to try out different weighted values and hire more candidates?
        Click the &quot;Update Repair&quot; button.
      </div>
      <div className="tw-body-text tw-text-left tw-my-6">
        Otherwise click the &quot;Finish Exercise&quot; button to complete this
        exercise!
      </div>
      <div className="tw-flex tw-justify-center tw-gap-x-3">
        <LabButton
          label={"Update Repair"}
          onClick={handleRepair}
          key="repair"
        />
        <LabButton
          label={"Finish Exercise"}
          onClick={handleFinish}
          key="start"
        />
      </div>
    </div>
  );
};

export default ExerciseEnd;
