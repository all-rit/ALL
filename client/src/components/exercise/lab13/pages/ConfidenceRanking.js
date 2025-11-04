import { React } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

const ConfidenceRanking = () => {
  const handleContinue = () => {
    startExercise();
    navigate("/Lab13/Exercise/AIPanel");
  };

  return (
    <div>
      Confidence Ranking Page
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default ConfidenceRanking;
