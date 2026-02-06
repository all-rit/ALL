import { React } from "react";
import useMainStateContext from "src/reducers/MainContext";
import UserLabService from "../../../../services/UserLabService";
import { EXERCISE_IDLE } from "src/constants/index";
import { LAB_ID } from "../../../../constants/lab13";
import { navigate } from "@reach/router";

const Conclusion = () => {
  const { actions, state } = useMainStateContext();

  const handleFinish = async () => {
    actions.updateUserState(EXERCISE_IDLE);
    await navigate("/Lab13/Reinforcement");
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
      <h1 className={"tw-title tw-text-left"}>Exercise Complete</h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-6">
          Great job! You&apos;ve completed the exercise and now have a stronger
          understanding about how AI bias works.
        </p>
        <div className="tw-body-text tw-text-center tw-pb-6">
          Click the <strong>Finish</strong> button to complete the Exercise!
        </div>
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase"
        onClick={handleFinish}
      >
        Finish
      </button>
    </div>
  );
};

export default Conclusion;
