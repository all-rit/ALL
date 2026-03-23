import { React, useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import ExerciseStateContext from "../Lab14Context";
import Encryption from "../components/Encryption";
import LabButton from "../../../all-components/LabButton";
import { Input, Label } from "reactstrap";

const InputComponent = ({ vigenereKey, setVigenereKey }) => {
  const [validInput, setValidInput] = useState(null);

  const handleShiftValueChange = (e) => {
    const value = e.target.value;
    setVigenereKey(value);

    if (value === "") {
      setValidInput(false);
      return;
    }

    const filteredValue = value.replace(/[^a-zA-Z]/g, "");
    setValidInput(filteredValue === value ? true : false);
  };

  return (
    <div className="tw-flex-1 tw-relative tw-flex tw-flex-col tw-items-center">
      <Label for="baseMessage" className="tw-font-semibold">
        Encryption Key
      </Label>
      <Input
        id="vigenereKey"
        invalid={validInput === false}
        placeholder="Enter Encryption Key Here"
        onChange={handleShiftValueChange}
        value={vigenereKey}
        className="tw-flex tw-items-center tw-justify-start tw-bg-[#f2f0eb] tw-p-4 tw-border-2 tw-border-black tw-border-solid tw-px-6 tw-py-3 tw-rounded-lg tw-font-semibold focus:tw-border-black focus:tw-outline-none tw-w-[20rem] tw-h-[4rem]"
      />
      <p
        className={`tw-w-[20rem] tw-my-2 ${validInput !== false ? "tw-hidden" : ""}`}
      >
        Error: Remove any special characters or numbers from the input, and make
        sure the input box is not empty.
      </p>
    </div>
  );
};

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

  useEffect(() => {
    setVigenereBaseMessage("");
    setVigenereEncryptedMessage("");
    setVigenereKey("");
  }, []);

  const [encrypted, setEncrypted] = useState(false);

  const isValidInput = (str) => {
    if (str === "") {
      return false;
    }
    return /^[A-Za-z]+$/.test(str);
  };

  const handleContinue = () => {
    navigate("/Lab14/Exercise/VigenereDecryption");
  };

  const encrypt = () => {
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
    setEncrypted(true);
  };

  return (
    <div>
      <h1 className="tw-title tw-text-left">Vigenère Cipher Encryption</h1>
      <p className="tw-body-text tw-text-left tw-py-6">
        In this section, you will encrypt a message using the Vigenère Cipher.
        Enter a base message and choose a key below. Click on the
        &quot;Encrypt&quot; button to see the Vigenère Cipher in action!
      </p>
      <p className="tw-body-text tw-text-left tw-py-2">
        Below, the &quot;Encryption Key&quot; input box takes in a word or
        phrase.
      </p>
      <Encryption
        encryptionFunction={encrypt}
        encryptedMessage={vigenereEncryptedMessage}
        baseMessage={vigenereBaseMessage}
        setBaseMessage={setVigenereBaseMessage}
        shiftValueValid={isValidInput(vigenereKey)}
      >
        <InputComponent
          vigenereKey={vigenereKey}
          setVigenereKey={setVigenereKey}
        />
      </Encryption>
      <LabButton
        disabled={!encrypted}
        onClick={handleContinue}
        label={"Next"}
      />
    </div>
  );
};

export default VigenereEncryption;
