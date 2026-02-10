import { React } from "react";
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
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <p>Conclusion</p>
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
