import { React, useState, useContext } from "react";
import { navigate } from "@reach/router";
import ExerciseStateContext from "../Lab14Context";
import Decryption from "../components/Decryption";
import LabButton from "../../../all-components/LabButton";

const RSADecryption = () => {
  const [error, setError] = useState(false);
  const [classicAttempts, setClassicAttempts] = useState(0);
  const [classicBoxElements, setClassicBoxElements] = useState([]);
  const [quantumAttempts, setQuantumAttempts] = useState(0);
  const [quantumBoxElements, setQuantumBoxElements] = useState([]);
  const [decryptionCompleted, setDecryptionCompleted] = useState(false);

  const { rsaBaseMessage, rsaEncryptedMessage, rsaShiftValue } =
    useContext(ExerciseStateContext);

  const handleContinue = () => {
    if (decryptionCompleted) {
      navigate("/Lab14/Exercise/Conclusion");
    } else {
      setError(true);
    }
  };

  const decrypt = () => {
    const classicAttempts = Math.pow(
      2,
      Math.floor(parseInt(rsaShiftValue) / 2),
    );
    const quantumAttempts = Math.pow(parseInt(rsaShiftValue), 3);

    setClassicAttempts(classicAttempts);
    setQuantumAttempts(quantumAttempts);

    setClassicBoxElements([
      { text: `Total Attempts: ${classicAttempts}`, binary: [] },
    ]);
    setQuantumBoxElements([
      { text: `Total Attempts: ${quantumAttempts}`, binary: [] },
    ]);

    setDecryptionCompleted(true);
  };

  return (
    <div>
      <h1 className="flex justify-start tw-title tw-text-left">
        RSA Decryption
      </h1>
      <p className="tw-body-text tw-text-left tw-py-4">
        Below, you will see the encrypted message from the previous section. Use
        the RSA decryption function to decrypt the message back to its original
        form, and observe the number of attempts the classic and quantum
        decryption take to decrypt the message!
      </p>
      <p className="tw-body-text tw-text-left tw-py-2">
        The chart in the middle tell how many attempts each version took to
        decrypt At the very bottom, you will see a graph that visualizes the
        number of attempts taken by both classic and quantum methods to decrypt
        the message. Notice how at high shift values, quantum decryption
        requires fewer time due to its ability to process multiple possibilities
        simultaneously. This is superposition in action!
      </p>

      <Decryption
        encryptedMessage={rsaEncryptedMessage}
        baseMessage={rsaBaseMessage}
        decryptionFunction={decrypt}
        classicAttempts={classicAttempts}
        classicBoxElements={classicBoxElements}
        quantumAttempts={quantumAttempts}
        quantumBoxElements={quantumBoxElements}
      />

      <h1 className="tw-title tw-text-left tw-mt-4">RSA: Theory vs. Reality</h1>
      <p className="tw-body-text tw-text-left tw-py-4">
        The attempt counts shown above are theoretical estimates based on
        established cryptography research. While quantum computers may need to
        repeat an algorithm a small number of times, the number of attempts
        remains very low. In theory, quantum computers could implement Shor’s
        algorithm and break RSA encryption in a matter of minutes. In practice,
        however, today’s quantum computers are not powerful enough to break the
        large RSA keys used on the internet. So far, quantum devices have only
        factored a 90-bit integer, which is incredibly small compared to the
        2048 used in real-world applications. This is due to the high cost,
        instability, and difficulty of scaling quantum hardware. As a result,
        despite its theoretical vulnerability, RSA encryption remains secure
        with current technology.
      </p>

      <div className="tw-mt-10">
        <LabButton onClick={handleContinue} label={"Next"} />
      </div>

      <p
        className={`${error ? "tw-visible" : "tw-invisible"} tw-text-red-600 tw-italic`}
      >
        Error: Please decrypt the message to continue.
      </p>
    </div>
  );
};

export default RSADecryption;
