import { React, useState } from "react";
import { navigate } from "@reach/router";

import Encryption from "../components/Encryption";

const CaesarEncryption = () => {
  const [baseMessage, setBaseMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");

  const handleContinue = () => {
    navigate("/Lab14/Exercise/CaesarDecryption");
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

  return (
    <div>
      Caesar Encryption
      <Encryption
        encryptionFunction={encrypt}
        encryptedMessage={encryptedMessage}
        baseMessage={baseMessage}
        setBaseMessage={setBaseMessage}
        minSlider={0}
        maxSlider={25}
      />
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default CaesarEncryption;
