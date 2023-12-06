import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { EXERCISE_PLAYING, LAB_ID } from "../../../../constants/lab11";
import UserLabService from "../../../../services/UserLabService";

const LiteracyExerciseEnd = (props) => {
  const { actions, user } = props;

  const handleFinish = () => {
    actions.updateState("EXERCISE_IDLE");
    UserLabService.complete_exercise(LAB_ID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_exercise(user.userid, LAB_ID);
    }
    navigate("/Lab11/Reinforcement");
  };

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, []);

  const handleTryAgain = () => {
    navigate("/Lab11/Exercise/InformationLetterFogIndexFormula");
  };

  return (
    <div className="center-div">
      <h3>Congratulations - you have completed the Literacy exercise!</h3>
      <p className="playthrough__sentence">
        In conclusion, the fog index is a useful tool to determine the
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

LiteracyExerciseEnd.propTypes = {
  actions: PropTypes.object,
  user: PropTypes.object,
};

export default LiteracyExerciseEnd;
