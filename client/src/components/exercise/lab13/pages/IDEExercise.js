import { React } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

const IDEExercise = () => {
  const handleContinue = () => {
    startExercise();
    navigate("/Lab13/Exercise/PanelswithIDEFixes");
  };

  return (
    <div>
      IDE Exercise
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default IDEExercise;
