import { React } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

const CaesarCipher = () => {
  const handleContinue = () => {
    startExercise();
    navigate("/Lab14/Exercise/RSA");
  };

  return (
    <div>
      Caesar Cipher Page
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default CaesarCipher;
