import React, { useState, useContext, useEffect } from "react";
import { navigate } from "@reach/router";
import ExerciseStateContext from "../Lab14Context";
import Decryption from "../components/Decryption";
import LabButton from "../../../all-components/LabButton";

const CaesarDecryption = () => {
  const [classicAttempts, setClassicAttempts] = useState(0);
  const [classicBoxElements, setClassicBoxElements] = useState([]);
  const [quantumAttempts, setQuantumAttempts] = useState(0);
  const [quantumBoxElements, setQuantumBoxElements] = useState([]);

  const { caesarBaseMessage, caesarEncryptedMessage, caesarShiftAmount } =
    useContext(ExerciseStateContext);

  useEffect(() => {
    if (caesarEncryptedMessage === "") {
      handleReturn();
    }
  }, []);

  const handleReturn = () => {
    navigate("/Lab14/Exercise/CaesarEncryption");
  };

  const handleContinue = () => {
    navigate("/Lab14/Exercise/VigenereIntro");
  };

  const encrypt = (baseMessage, shiftValue) => {
    shiftValue = parseInt(shiftValue);

    if (shiftValue == 0) {
      return baseMessage;
    }

    let encryptedString = "";
    for (let i = 0; i < baseMessage.length; i++) {
      let char = baseMessage[i];

      if (char >= "A" && char <= "Z") {
        // Uppercase
        let code = char.charCodeAt(0) - 65;
        let shifted = (code + shiftValue) % 26;
        encryptedString += String.fromCharCode(shifted + 65);
      } else if (char >= "a" && char <= "z") {
        // Lowercase
        let code = char.charCodeAt(0) - 97;
        let shifted = (code + shiftValue) % 26;
        encryptedString += String.fromCharCode(shifted + 97);
      } else {
        // Non alphabet char
        encryptedString += char;
      }
    }
    return encryptedString;
  };

  const decimalToBinary = (num) => {
    return (num >>> 0).toString(2);
  };

  const decrypt = () => {
    // update the classic and quantum boxes with decryption process
    // update state of graph bars accordingly

    // Classic
    const classicArray = [];
    for (let i = caesarShiftAmount - 1; i >= 0; i--) {
      classicArray.push({
        text: encrypt(caesarBaseMessage, i),
        binary: [decimalToBinary(i)],
      });
    }
    setClassicAttempts(parseInt(caesarShiftAmount));
    setClassicBoxElements(classicArray);

    // Quantum
    const quantumArray = [];
    let attempts = Math.max(1, Math.floor(Math.sqrt(caesarShiftAmount)));
    let binarySize = Math.min(Math.floor(25 / attempts), 5);

    for (let i = attempts; i > 0; i--) {
      const binaryArray = [];
      for (let x = binarySize - 1; x >= 0; x--) {
        binaryArray.push(decimalToBinary(i * x));
      }

      quantumArray.push({
        text: encrypt(caesarBaseMessage, i - 1),
        binary: binaryArray,
      });
    }
    setQuantumAttempts(attempts);
    setQuantumBoxElements(quantumArray);
  };

  return (
    <div>
      <h1 className="tw-title tw-text-left">Caesar Cipher Decryption</h1>
      <p className="tw-body-text tw-text-left tw-py-4">
        Below, you will see the encrypted message from the previous section. Use
        the Caesar decryption function to decrypt the message back to its
        original form, and observe how the classic and quantum decryption
        processes differ in terms of attempts and efficiency!
      </p>
      <p className="tw-body-text tw-text-left tw-py-2">
        The chart in the middle visualizes the decryption attempts made by both
        classic and quantum methods. As you proceed with the decryption, pay
        attention to how many attempts each method takes to successfully decrypt
        the message.
      </p>
      <p className="tw-body-text tw-text-left tw-py-4">
        At the very bottom, you&apos;ll see a graph that visualizes the number
        of attempts taken by both classic and quantum methods to decrypt the
        message. Notice how quantum decryption requires fewer attempts due to
        its ability to process multiple possibilities simultaneously. This is
        superposition in action!
      </p>
      <Decryption
        encryptedMessage={caesarEncryptedMessage}
        baseMessage={caesarBaseMessage}
        decryptionFunction={decrypt}
        classicAttempts={classicAttempts}
        classicBoxElements={classicBoxElements}
        quantumAttempts={quantumAttempts}
        quantumBoxElements={quantumBoxElements}
      >
        <div className="tw-mt-10 tw-flex tw-justify-center tw-gap-16">
          <LabButton onClick={handleReturn} label={"Re-do Encryption"} />
          <LabButton onClick={handleContinue} label={"Next"} />
        </div>
      </Decryption>
    </div>
  );
};

export default CaesarDecryption;
