import React, { useState } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

import Decryption from "../components/Decryption";
import Encryption from "../components/Encryption";

const CaesarCipher = () => {
  const [baseMessage, setBaseMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");

  const [classicAttempts, setClassicAttempts] = useState(0);
  const [classicBoxElements, setClassicBoxElements] = useState([]);
  const [quantumAttempts, setQuantumAttempts] = useState(0);
  const [quantumBoxElements, setQuantumBoxElements] = useState([]);

  const handleContinue = () => {
    startExercise();
    navigate("/Lab14/Exercise/RSA");
  };

  const encrypt = (baseMessage, shiftValue) => {
    if (shiftValue == 0) {
      setEncryptedMessage(baseMessage);
      return baseMessage;
    }

    let encryptedString = "";
    for (let i = 0; i < baseMessage.length; i++) {
      let char = baseMessage[i];
      let charAscii = char.charCodeAt(0);

      if (charAscii >= 65 && charAscii <= 90) {
        // Uppercase
        let shiftApplied = ((charAscii - 65 + shiftValue + 26) % 26) + 65;
        encryptedString += String.fromCharCode(shiftApplied);
      } else if (charAscii >= 97 && charAscii <= 122) {
        // Lowercase
        let shiftApplied = ((charAscii - 97 + shiftValue + 26) % 26) + 97;
        encryptedString += String.fromCharCode(shiftApplied);
      } else {
        // Non alphabet char
        encryptedString += char;
      }
    }

    setEncryptedMessage(encryptedString);
    return encryptedString;
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
      <div className="tw-flex tw-items-center tw-font-semibold tw-relative">
        <h1>Caesar Cipher</h1>
      </div>
      <p className="tw-flex tw-gap-8 tw-items-center tw-w-full tw-max-w-2xl">
        Caesar Cipher Description
      </p>
      <Encryption
        encryptionFunction={encrypt}
        encryptedMessage={encryptedMessage}
        baseMessage={baseMessage}
        setBaseMessage={setBaseMessage}
        minSlider={0}
        maxSlider={25}
      />
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
