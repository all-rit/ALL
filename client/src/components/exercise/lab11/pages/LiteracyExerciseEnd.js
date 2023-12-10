import { navigate } from "@reach/router";
import React, { useEffect } from "react";

import { LAB_ID } from "../../../../constants/lab11";
import UserLabService from "../../../../services/UserLabService";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "src/constants/index";

const LiteracyExerciseEnd = () => {
  const { actions, state } = useMainStateContext();

  const handleFinish = () => {
    actions.updateUserState(EXERCISE_IDLE);
    UserLabService.complete_exercise(LAB_ID);
    if (state.main.user?.firstname !== null && state.main.user !== null) {
      UserLabService.user_complete_exercise(state.main.user.userid, LAB_ID);
    }
    navigate("/Lab11/Reinforcement");
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleTryAgain = () => {
    navigate("/Lab11/Exercise/InformationLetterFogIndexFormula");
  };

  return (
    <div className="center-div">
      <h3>Congratulations - you have completed the Literacy exercise!</h3>
      <p className="playthrough__sentence">
        In conclusion, the Fog Index is a useful tool to determine the
        readability of text. Remember to consider your audience and the best
        reading level for your audience when writing text.
      </p>
      <p className="playthrough__sentence">
        Click the &quot;Try Again&quot; button to experiment with your Fog Index
        Calulator.
      </p>
      <p className="playthrough__sentence">
        Otherwise click the &quot;Finish Exercise&quot; button to complete this
        exercise!
      </p>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-second btn-xl text-uppercase  leftButton"
          onClick={handleTryAgain}
          key="repair"
        >
          Try Again
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

export default LiteracyExerciseEnd;
