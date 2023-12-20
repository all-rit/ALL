import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE } from "src/constants/index";

const Conclusion = () => {
  const { actions } = useMainStateContext();

  const handleFinish = () => {
    navigate("/Lab8/Exercise");
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  return (
    <div className="center-div">
      <h3>
        Congratulations - you have completed the Algorithmic Bias exercise!
      </h3>
      <div className="playthrough__sentence">
        Click the &#39;Exercise Home&#39; button to return to the Exercise start
        page, or click the &#39;Next&#39; button to continue to the
        Reinforcement section of the lab.
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleFinish}
        key="start"
      >
        Exercise Home
      </button>
    </div>
  );
};

export default Conclusion;
