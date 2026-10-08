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
   <div className="center-div">
      <h1 className={"tw-title tw-text-left"}> Exercise Complete </h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-3">
          You have completed the exercise for Deepfake Lab. Some of your
          key takeaways from this lab should include:
        </p>
        <ul>
          <li className={"tw-body-text"}>
            Understand what deepfakes are and their ethical implications
          </li>
          <li className={"tw-body-text"}>
            Reflect on how deepfakes affect people emotionally and ethically when someone is targeted
          </li>
        </ul>
      </div>
      <button
        className="center-div btn btn-primary text-black btn-xl text-uppercase"
        onClick={handleFinish}
        key="start"
      >
        Continue
      </button>
    </div>
  );
};

export default Conclusion;
