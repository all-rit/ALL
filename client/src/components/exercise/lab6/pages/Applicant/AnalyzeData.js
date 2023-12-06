import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import Spinner from "../../../../../common/Spinner/Spinner";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const AnalyzeData = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
    setTimeout(function () {
      handleContinue();
    }, 5000);
  }, []);

  const handleContinue = () => {
    navigate("/Lab6/Exercise/NegativeReasoning");
  };

  return (
    <div className="center-div">
      <h2 className="playthrough__title">
        Reviewing your application, please be patient...
      </h2>
      <div className="landingpage__row">
        <Spinner />
      </div>
    </div>
  );
};

export default AnalyzeData;
