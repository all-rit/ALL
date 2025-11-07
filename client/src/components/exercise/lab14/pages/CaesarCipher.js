import { React, useState } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

import Decryption from "../components/Decryption";

const CaesarCipher = () => {
  const [classicAttempts, setClassicAttempts] = useState(0);
  const [classicBoxElements, setClassicBoxElements] = useState([]);
  const [quantumAttempts, setQuantumAttempts] = useState(0);
  const [quantumBoxElements, setQuantumBoxElements] = useState([]);

  const handleContinue = () => {
    startExercise();
    navigate("/Lab14/Exercise/RSA");
  };

  const decrypt = () => {
    // update the classic and quantum boxes with decryption process
    // update state of graph bars accordingly

    setClassicAttempts(13);
    setQuantumAttempts(5);

    setClassicBoxElements([
      { text: "Element1", binary: ["000"] },
      { text: "Element2", binary: ["001"] },
      { text: "Element3", binary: ["010"] },
      { text: "Element4", binary: ["100"] },
    ]);
    setQuantumBoxElements([
      { text: "ElementA", binary: ["000", "001", "010", "100"] },
      { text: "ElementB", binary: ["100", "101", "110"] },
      { text: "ElementC", binary: ["111"] },
    ]);
  };

  return (
    <div>
      Caesar Cipher Page
      <Decryption
        encryptedMessage={"encryptedMessage"}
        baseMessage={"baseMessage"}
        decryptionFunction={decrypt}
        classicAttempts={classicAttempts}
        classicBoxElements={classicBoxElements}
        quantumAttempts={quantumAttempts}
        quantumBoxElements={quantumBoxElements}
      />
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default CaesarCipher;
