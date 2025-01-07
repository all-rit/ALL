import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE } from "src/constants/index";
import LabButton from "../../../all-components/LabButton";

const Conclusion = () => {
  const { actions } = useMainStateContext();

  const handleFinish = () => {
    navigate("/Lab8/Exercise");
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  return (
    <div className="center-div tw-p-6">
      <h1 className={"tw-title tw-text-left tw-my-6"}>Exercise Complete</h1>
      <p className={"tw-body tw-text-left"}>
        Congratulations - you have completed the Algorithmic Bias exercise!
      </p>
      <div className="tw-body-text tw-my-6">
        Click the <strong>&#39;Return to Exercise Start&#39;</strong> button to
        return to the Exercise start page, or scroll down and click the{" "}
        <strong>&#39;Next&#39;</strong> button to continue to the Reinforcement
        section of the lab.
      </div>
      <LabButton
        onClick={handleFinish}
        key="start"
        label={"Return to Exercise Start"}
      />
    </div>
  );
};

export default Conclusion;
