import { React } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

const RSA = () => {
  const handleContinue = () => {
    startExercise();
    navigate("/Lab14/Exercise/ShorsAlgorithm");
  };

  return (
    <div>
      RSA Page
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default RSA;
