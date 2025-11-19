import { React, useContext, useState } from "react";
import { navigate } from "@reach/router";
import ExerciseStateContext from "../Lab14Context";
import Encryption from "../components/Encryption";
import LabButton from "../../../all-components/LabButton";

const CaesarEncryption = () => {
  const {
    caesarBaseMessage,
    setCaesarBaseMessage,
    caesarEncryptedMessage,
    setCaesarEncryptedMessage,
    setCaesarShiftAmount,
  } = useContext(ExerciseStateContext);

  const [error, setError] = useState(false);

  const handleContinue = () => {
    if (caesarEncryptedMessage) {
      navigate("/Lab14/Exercise/CaesarDecryption");
    } else {
      setError(true);
    }
  };

  const encrypt = (baseMessage, shiftValue) => {
    shiftValue = parseInt(shiftValue);

    if (shiftValue == 0) {
      setCaesarEncryptedMessage(baseMessage);
      return baseMessage;
    }

    let encryptedString = "";
    for (let i = 0; i < baseMessage.length; i++) {
      let char = baseMessage[i];

      if (char >= "A" && char <= "Z") {
        // Uppercase
        let code = char.charCodeAt(0) - 65;
        let shifted = (code + shiftValue) % 26;
        shifted = (shifted + 26) % 26;
        encryptedString += String.fromCharCode(shifted + 65);
      } else if (char >= "a" && char <= "z") {
        // Lowercase
        let code = char.charCodeAt(0) - 97;
        let shifted = (code + shiftValue) % 26;
        shifted = (shifted + 26) % 26;
        encryptedString += String.fromCharCode(shifted + 97);
      } else {
        // Non alphabet char
        encryptedString += char;
      }
    }

    setCaesarShiftAmount(parseInt(shiftValue));
    setCaesarEncryptedMessage(encryptedString);
  };

  return (
    <div>
      <h1 className="tw-title tw-text-left">Caesar Cipher Encryption</h1>
      <p className="tw-body-text tw-text-left tw-py-6">
        In this section, you will encrypt a message using the Caesar Cipher.
        Enter a base message and choose a shift value below. Click on the
        &quot;Encrypt&quot; button to see the Caesar Cipher in action!
      </p>
      <Encryption
        encryptionFunction={encrypt}
        encryptedMessage={caesarEncryptedMessage}
        baseMessage={caesarBaseMessage}
        setBaseMessage={setCaesarBaseMessage}
        minSlider={0}
        maxSlider={25}
      />
      <div className="tw-mt-10">
        <LabButton onClick={handleContinue} label={"Next"} />
      </div>

      <p
        className={`${error ? "tw-visible" : "tw-invisible"} tw-text-red-600 tw-italic`}
      >
        Error: Please Encrypt a valid string to continue
      </p>
    </div>
  );
};

export default CaesarEncryption;
