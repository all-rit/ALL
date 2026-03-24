import { React } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

const IDEIntroduction = () => {
  const handleContinue = () => {
    startExercise();
    navigate("/Lab13/Exercise/Conclusion");
  };

  return (
    <div>
      AI/Search Panel with IDE Fixes Page
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default IDEIntroduction;
