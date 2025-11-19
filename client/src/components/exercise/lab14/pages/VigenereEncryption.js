import { React, useContext, useState } from "react";
import { navigate } from "@reach/router";
import ExerciseStateContext from "../Lab14Context";
import Encryption from "../components/Encryption";
import LabButton from "../../../all-components/LabButton";

const VigenereEncryption = () => {
  const {
    vigenereBaseMessage,
    setVigenereBaseMessage,
    vigenereEncryptedMessage,
    setVigenereEncryptedMessage,
  } = useContext(ExerciseStateContext);

  const [error, setError] = useState("");

  const handleContinue = () => {
    if (vigenereEncryptedMessage) {
      navigate("/Lab14/Exercise/VigenereDecryption");
    } else {
      setError(true);
    }
  };

  const encrypt = () => {
    setVigenereEncryptedMessage("hello"); // TODO: Change
  };

  return (
    <div>
      <h1 className="tw-title tw-text-left">Vigenère Cipher Encryption</h1>
      <p className="tw-body-text tw-text-left tw-py-6">
        In this section, you will encrypt a message using the Vigenère Cipher.
        Enter a base message and choose a key below. Click on the
        &quot;Encrypt&quot; button to see the Vigenère Cipher in action!
      </p>
      <Encryption
        encryptionFunction={encrypt}
        encryptedMessage={vigenereEncryptedMessage}
        baseMessage={vigenereBaseMessage}
        setBaseMessage={setVigenereBaseMessage}
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

export default VigenereEncryption;
