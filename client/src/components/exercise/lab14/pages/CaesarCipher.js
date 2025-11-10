import React, { useState } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";
import Encryption from "../components/Encryption";

const CaesarCipher = () => {
  const [baseMessage, setBaseMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");

  const handleContinue = () => {
    startExercise();
    navigate("/Lab14/Exercise/RSA");
  };

  const Encrypt = (baseMessage, shiftValue) => {
    if (shiftValue == 0) {
      setEncryptedMessage(baseMessage);
      return baseMessage;
    }

    const messageArray = baseMessage.split("");
    const encryptedArray = new Array(messageArray.length);
    for (let i = 0; i < messageArray.length; i++) {
      const letter = messageArray[i];
      const newPlacement = (i + shiftValue) % messageArray.length;
      encryptedArray[newPlacement] = letter;
    }

    const encryptedString = encryptedArray.join("");
    setEncryptedMessage(encryptedString);
    return encryptedString;
  };

  return (
    <div>
      Caesar Cipher Page
      <Encryption
        encryptionFunction={Encrypt}
        encryptedMessage={encryptedMessage}
        baseMessage={baseMessage}
        setBaseMessage={setBaseMessage}
      />
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default CaesarCipher;
