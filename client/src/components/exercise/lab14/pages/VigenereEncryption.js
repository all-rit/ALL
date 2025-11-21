import { React, useContext, useState } from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import ExerciseStateContext from "../Lab14Context";
import Encryption from "../components/Encryption";
import LabButton from "../../../all-components/LabButton";
import { Input, Label } from "reactstrap";

const InputComponent = ({ vigenereKey, setVigenereKey }) => (
  <div className="tw-flex-1 tw-relative tw-flex tw-flex-col tw-items-center">
    <Label for="baseMessage" className="tw-font-semibold">
      Shift Key
    </Label>
    <Input
      type="text"
      placeholder="Shift Key Here"
      onChange={(e) => setVigenereKey(e.target.value)}
      value={vigenereKey}
      className="tw-flex tw-items-center tw-justify-start tw-bg-[#f2f0eb] tw-p-4 tw-border-2 tw-border-black tw-border-solid tw-px-6 tw-py-3 tw-rounded-lg tw-font-semibold focus:tw-border-black focus:tw-outline-none tw-w-[20rem] tw-h-[4rem]"
    />
  </div>
);

InputComponent.propTypes = {
  vigenereKey: PropTypes.string,
  setVigenereKey: PropTypes.func,
};

const VigenereEncryption = () => {
  const {
    vigenereBaseMessage,
    setVigenereBaseMessage,
    vigenereKey,
    setVigenereKey,
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
      >
        <InputComponent
          vigenereKey={vigenereKey}
          setVigenereKey={setVigenereKey}
        />
      </Encryption>
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
