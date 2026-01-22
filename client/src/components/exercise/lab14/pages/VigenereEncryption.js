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
      Encryption Key
    </Label>
    <Input
      type="text"
      placeholder="Enter Encryption Key Here"
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

  const [error, setError] = useState(false);
  const [validInput, setValidInput] = useState(true);

  const isValidInput = (str) => {
    return /^[A-Za-z\s]+$/.test(str);
  };

  const handleContinue = () => {
    if (!validInput) {
      return;
    } else if (!vigenereEncryptedMessage) {
      setError(true);
    } else {
      navigate("/Lab14/Exercise/VigenereDecryption");
    }
  };

  const encrypt = () => {
    if (isValidInput(vigenereBaseMessage) && isValidInput(vigenereKey)) {
      setValidInput(true);
    } else {
      setValidInput(false);
      setVigenereEncryptedMessage("");
      return;
    }

    const A = "A".charCodeAt(0);
    const a = "a".charCodeAt(0);

    const keyShifts = [];
    for (let char of vigenereKey) {
      if (/[A-Za-z]/.test(char)) {
        let shift = char.toLowerCase().charCodeAt(0) - a;
        keyShifts.push(Number(shift));
      }
    }

    if (keyShifts.length === 0) {
      setVigenereEncryptedMessage(vigenereBaseMessage);
      return;
    }

    let result = "";
    let keyIndex = 0;

    for (let char of vigenereBaseMessage) {
      if (/[A-Za-z]/.test(char)) {
        let shift = keyShifts[keyIndex % keyShifts.length];

        // Uppercase Logic
        if (char >= "A" && char <= "Z") {
          let originalPos = char.charCodeAt(0) - A;
          let newPos = (originalPos + shift) % 26;
          result += String.fromCharCode(newPos + A);
        }
        // Lowercase Logic
        else if (char >= "a" && char <= "z") {
          let originalPos = char.charCodeAt(0) - a;
          let newPos = (originalPos + shift) % 26;
          result += String.fromCharCode(newPos + a);
        }

        keyIndex++;
      } else {
        result += char;
      }
    }

    setVigenereEncryptedMessage(result);
  };

  return (
    <div>
      <h1 className="tw-title tw-text-left">Vigenère Cipher Encryption</h1>
      <p className="tw-body-text tw-text-left tw-py-6">
        In this section, you will encrypt a message using the Vigenère Cipher.
        Enter a base message and choose a key below. Click on the
        &quot;Encrypt&quot; button to see the Vigenère Cipher in action!
      </p>
      <p className="tw-body-text tw-text-left tw-py-2"></p>
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

      <div className="tw-my-2">
        <p
          className={`${!validInput ? "tw-visible" : "tw-invisible"} tw-italic`}
        >
          Error: Please make sure that the message and key boxes have no numeric
          or special characters, and are not empty!
        </p>

        <p className={`${error ? "tw-visible" : "tw-invisible"} tw-italic`}>
          Error: Please presss Encrypt to continue.
        </p>
      </div>

      <LabButton onClick={handleContinue} label={"Next"} />
    </div>
  );
};

export default VigenereEncryption;
