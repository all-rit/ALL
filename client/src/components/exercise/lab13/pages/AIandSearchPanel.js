import { React } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

const AIandSearchPanel = () => {
  const handleContinue = () => {
    startExercise();
    navigate("/Lab13/Exercise/TruthBiasExplination");
  };

  return (
    <div>
      AI and Search Panel Page
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default AIandSearchPanel;
