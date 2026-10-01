import React from "react";
import useMainStateContext from "src/reducers/MainContext";
import UserLabService from "../../../../services/UserLabService";
import { EXERCISE_IDLE } from "src/constants/index";
import { LAB_ID } from "../../../../constants/lab16";
import { navigate } from "@reach/router";

const Conclusion = () => {
  const { actions, state } = useMainStateContext();

  const handleFinish = async () => {
    actions.updateUserState(EXERCISE_IDLE);
    await navigate("/Lab16/Reinforcement");
    await UserLabService.complete_exercise(LAB_ID);
    if (state.main.user?.firstname !== null && state.main.user !== null) {
      await UserLabService.user_complete_exercise(
        state.main.user.userid,
        LAB_ID,
      );
    }
  };

  return (
    <div>
      <h1 className="tw-title tw-text-left">Deepfake Conclusion!</h1>
      <div className="tw-body-text tw-text-center tw-pb-6">
        Click the <strong>Continue</strong> button to move on the the
        Reinforcement Section!
      </div>
      <div className="center-div">
        <button
          className="center-div btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleFinish}
          key="start"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Conclusion;
