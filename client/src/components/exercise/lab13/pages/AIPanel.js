import { React } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

const AIPanel = () => {
  const handleContinue = () => {
    startExercise();
    navigate("/Lab13/Exercise/HaloExplination");
  };

  return (
    <div>
      AI Panel Page
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default AIPanel;
