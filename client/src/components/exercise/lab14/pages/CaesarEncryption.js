import { React, useContext, useState, useEffect } from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import ExerciseStateContext from "../Lab14Context";
import Encryption from "../components/Encryption";
import LabButton from "../../../all-components/LabButton";

const InputComponent = ({ shiftValue, setShiftValue, fillPercent }) => {
  const [validInput, setValidInput] = useState(null);

  const handleShiftValueChange = (e) => {
    const value = Number(e.target.value);

    setValidInput(value !== 0);
    setShiftValue(value);
  };

  return (
    <div className="tw-flex-1 tw-relative tw-flex tw-flex-col tw-items-center">
      <span className="tw-font-semibold">Shift</span>
      <div className="tw-flex tw-justify-between tw-w-full">
        <span className="tw-font-semibold">{0}</span>
        <span className="tw-font-semibold">{25}</span>
      </div>

      <input
        type="range"
        min={0}
        max={25}
        onChange={handleShiftValueChange}
        value={shiftValue}
        className="tw-w-full tw-h-3 tw-appearance-none tw-cursor-pointer tw-rounded-none tw-outline-none"
        style={{
          background: `linear-gradient(to right, black ${fillPercent}%, #e5e7eb ${fillPercent}%)`,
        }}
      />
      <p
        className={`tw-mt-4 ${validInput !== false ? "tw-hidden" : "tw-visible"}`}
      >
        Error: Make sure the shift value is not 0 to continue.
      </p>

      {/* Button Style */}
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: black;
            cursor: pointer;
          }
          input[type="range"]::-moz-range-thumb {
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: black;
            cursor: pointer;
          }
        `}
      </style>

      {/* Shift Bubble */}
      <div
        className="tw-absolute tw--top-8 tw-bg-black tw-text-white tw-text-xs tw-px-2 tw-py-1 tw-rounded"
        style={{
          left: `calc(${(shiftValue / 25) * 100}% - 12px)`,
          pointerEvents: "none",
        }}
      >
        {shiftValue}
      </div>
    </div>
  );
};

InputComponent.propTypes = {
  shiftValue: PropTypes.number,
  setShiftValue: PropTypes.func,
  fillPercent: PropTypes.number,
};

const CaesarEncryption = () => {
  const {
    caesarBaseMessage,
    setCaesarBaseMessage,
    caesarEncryptedMessage,
    setCaesarEncryptedMessage,
    setCaesarShiftAmount,
  } = useContext(ExerciseStateContext);

  useEffect(() => {
    setCaesarBaseMessage("");
    setCaesarEncryptedMessage("");
    setCaesarShiftAmount(0);
  }, []);

  const [encrypted, setEncrypted] = useState(false);
  const [shiftValue, setShiftValue] = useState(0);
  const fillPercent = (shiftValue / 25) * 100;

  const handleContinue = () => {
    navigate("/Lab14/Exercise/CaesarDecryption");
  };

  const encrypt = () => {
    let encryptedString = "";
    for (let i = 0; i < caesarBaseMessage.length; i++) {
      let char = caesarBaseMessage[i];

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
    setEncrypted(true);
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
        shiftValueValid={shiftValue !== 0}
      >
        <InputComponent
          shiftValue={shiftValue}
          setShiftValue={setShiftValue}
          fillPercent={fillPercent}
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

export default CaesarEncryption;
