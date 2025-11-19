import { React, useState, useContext } from "react";
import { navigate } from "@reach/router";
import ExerciseStateContext from "../Lab14Context";
import Decryption from "../components/Decryption";
import LabButton from "../../../all-components/LabButton";

const VigenereDecryption = () => {
  const [classicAttempts, setClassicAttempts] = useState(0);
  const [classicBoxElements, setClassicBoxElements] = useState([]);
  const [quantumAttempts, setQuantumAttempts] = useState(0);
  const [quantumBoxElements, setQuantumBoxElements] = useState([]);

  const {
    vigenereBaseMessage,
    // vigenereKey,
    vigenereEncryptedMessage,
  } = useContext(ExerciseStateContext);

  const [error, setError] = useState("");
  const [decryptionCompleted, setDecryptionCompleted] = useState(false);

  const handleContinue = () => {
    if (decryptionCompleted) {
      navigate("/Lab14/Exercise/RSAEncryption");
    } else {
      setError(true);
    }
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
    setDecryptionCompleted(true);
  };

  return (
    <div>
      <h1 className="tw-title tw-text-left">Vigenère Decryption</h1>
      <p className="tw-body-text tw-text-left tw-py-4">Lorem impsum</p>
      <Decryption
        encryptedMessage={vigenereEncryptedMessage}
        baseMessage={vigenereBaseMessage}
        decryptionFunction={decrypt}
        classicAttempts={classicAttempts}
        classicBoxElements={classicBoxElements}
        quantumAttempts={quantumAttempts}
        quantumBoxElements={quantumBoxElements}
      />
      <div className="tw-mt-10">
        <LabButton onClick={handleContinue} label={"Next"} />
      </div>

      <p
        className={`${error ? "tw-visible" : "tw-invisible"} tw-text-red-600 tw-italic`}
      >
        Error: Please decrypt the message to continue
      </p>
    </div>
  );
};

export default VigenereDecryption;
