import { React } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

const Entanglement = () => {
  const handleContinue = () => {
    startExercise();
    navigate("/Lab14/Exercise/CaesarCipher");
  };

  return (
    <div>
      Entanglement Page
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default Entanglement;
