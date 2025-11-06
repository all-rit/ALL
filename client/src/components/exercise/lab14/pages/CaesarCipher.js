import { React, useState } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

import Decryption from "../components/Decryption";

const CaesarCipher = () => {
  const [classicAttempts, setClassicAttempts] = useState(0);
  const [quantumAttempts, setQuantumAttempts] = useState(0);

  const handleContinue = () => {
    startExercise();
    navigate("/Lab14/Exercise/RSA");
  };

  const decrypt = () => {
    // update the classic and quantum boxes with decryption process
    // update state of graph bars accordingly

    setClassicAttempts(13);
    setQuantumAttempts(5);
  };

  return (
    <div>
      Caesar Cipher Page
      <Decryption
        encryptedMessage={"encryptedMessage"}
        baseMessage={"baseMessage"}
        decryptionFunction={decrypt}
        classicAttempts={classicAttempts}
        quantumAttempts={quantumAttempts}
      />
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default CaesarCipher;
