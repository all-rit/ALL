import { React, useState, useContext, useEffect } from "react";
import { navigate } from "@reach/router";
import ExerciseStateContext from "../Lab14Context";
import Decryption from "../components/Decryption";
import LabButton from "../../../all-components/LabButton";

const VigenereDecryption = () => {
  const [classicAttempts, setClassicAttempts] = useState(0);
  const [classicBoxElements, setClassicBoxElements] = useState([]);
  const [quantumAttempts, setQuantumAttempts] = useState(0);
  const [quantumBoxElements, setQuantumBoxElements] = useState([]);

  const { vigenereBaseMessage, vigenereKey, vigenereEncryptedMessage } =
    useContext(ExerciseStateContext);

  useEffect(() => {
    if (vigenereEncryptedMessage === "") {
      handleReturn();
    }
  }, []);

  const handleReturn = () => {
    navigate("/Lab14/Exercise/VigenereEncryption");
  };

  const handleContinue = () => {
    navigate("/Lab14/Exercise/RSAIntro");
  };

  const encode = (baseMessage, shiftValue) => {
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

    const MAX_CLASSIC_ATTEMPTS = 25;
    const MAX_QUANTUM_ATTEMPTS = Math.floor(
      Math.pow(MAX_CLASSIC_ATTEMPTS, 0.5),
    );

    // Classic
    const classicArray = [];
    const classicAttempts = Math.pow(26, vigenereKey.length);

    for (let i = Math.min(classicAttempts, MAX_CLASSIC_ATTEMPTS); i > 0; i--) {
      classicArray.push({
        text: encode(vigenereBaseMessage, i),
        binary: [
          decimalToBinary(Math.min(classicAttempts, MAX_CLASSIC_ATTEMPTS) - i),
        ],
      });
    }
    classicArray.push({
      text: `+ ${classicAttempts - MAX_CLASSIC_ATTEMPTS} more`,
      binary: ["0"],
    });
    setClassicBoxElements(classicArray);
    setClassicAttempts(classicAttempts);

    // Quantum
    const quantumArray = [];
    const quantumAttempts = Math.floor(Math.pow(classicAttempts, 0.5));

    for (let i = Math.min(quantumAttempts, MAX_QUANTUM_ATTEMPTS); i > 0; i--) {
      const binaryArray = [];
      for (let x = 5; x > 0; x--) {
        binaryArray.push(decimalToBinary(i * x));
      }

      quantumArray.push({
        text: encode(vigenereBaseMessage, i),
        binary: binaryArray,
      });
    }
    quantumArray.push({
      text: `+ ${quantumAttempts - MAX_QUANTUM_ATTEMPTS} more`,
      binary: ["0"],
    });
    setQuantumBoxElements(quantumArray);
    setQuantumAttempts(quantumAttempts);
  };

  return (
    <div>
      <h1 className="tw-title tw-text-left">Vigenère Decryption</h1>
      <p className="tw-body-text tw-text-left tw-py-4">
        Below, you will see the encrypted message from the previous section. Use
        the Vigenère decryption function to decrypt the message back to its
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
        message. Compare these numbers to the Caesar Cipher from before. Notice
        how quantum decryption requires <i>astronomically</i> fewer attempts
        this time! Since the Vigenère Cipher is far more complex than a
        traditional Caesar Cipher, Quantum is <i>exponentially</i> more
        effective!
      </p>
      <Decryption
        encryptedMessage={vigenereEncryptedMessage}
        baseMessage={vigenereBaseMessage}
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

export default VigenereDecryption;
