import { React } from "react";
import useMainStateContext from "src/reducers/MainContext";
import UserLabService from "../../../../services/UserLabService";
import { navigate } from "@reach/router";
import { EXERCISE_IDLE } from "src/constants/index";
import { LAB_ID } from "../../../../constants/lab14";

const Conclusion = () => {
  const { actions, state } = useMainStateContext();

  const handleFinish = async () => {
    actions.updateUserState(EXERCISE_IDLE);
    await navigate("/Lab14/Reinforcement");
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
      Conclusion Page
      <button onClick={handleFinish}>Complete</button>
    </div>
  );
};

export default Conclusion;
