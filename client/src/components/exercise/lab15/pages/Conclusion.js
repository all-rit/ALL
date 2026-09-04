import React from "react";
import useMainStateContext from "src/reducers/MainContext";
import UserLabService from "../../../../services/UserLabService";
import { EXERCISE_IDLE } from "src/constants/index";
import { LAB_ID } from "../../../../constants/lab15";
import { navigate } from "@reach/router";

const Conclusion = () => {
  const { actions, state } = useMainStateContext();

  const handleFinish = async () => {
    actions.updateUserState(EXERCISE_IDLE);
    await navigate("/Lab15/Reinforcement");
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
          You have completed the exercise for AI Hallucinations. Some of your
          key takeaways from this lab should include:
        </p>
        <ul>
          <li className={"tw-body-text"}>
            AI models can generate false or misleading information known as
            hallucinations, caused by factors such as training data quality,
            model architecture, and prompt design.
          </li>
          <li className={"tw-body-text"}>
            Vague and ambiguous prompts can lead to increased hallucinations.
          </li>
          <li className={"tw-body-text"}>
            Clear and specific prompts can help reduce hallucinations and
            improve the accuracy of AI-generated responses.
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
