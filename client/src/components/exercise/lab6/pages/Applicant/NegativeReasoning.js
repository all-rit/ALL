import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const NegativeReasoning = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate("/Lab6/Exercise/AIAnalysisQuestions");
  };

  return (
    <div className="center-div">
      <h2 className="playthrough__title">Why you were not chosen:</h2>
      <div className="playthrough__sentence">
        The reason you were not selected was because there were an overwhelming
        number of applicants and an AI was used to pare down the number of
        applications. Under normal circumstances a human would have made the
        decisions.
      </div>

      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleContinue}
        key="confirm"
      >
        Continue
      </button>
    </div>
  );
};

export default NegativeReasoning;
