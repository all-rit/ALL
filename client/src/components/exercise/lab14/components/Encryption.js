import React, { useState } from "react";
import PropTypes from "prop-types";

import { FormGroup, Input, Label } from "reactstrap";
import LabButton from "src/components/all-components/LabButton";

const Encryption = ({
  encryptionFunction,
  encryptedMessage,
  baseMessage,
  setBaseMessage,
  shiftValueValid,
  children,
}) => {
  const [validInput, setValidInput] = useState(null);

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setBaseMessage(value);

    if (value === "" || value.trim().length == 0) {
      setValidInput(false);
      return;
    }

    const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    setValidInput(filteredValue === value ? true : false);
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-gap-8 tw-mt-20 tw-w-full">
      <div className="tw-flex tw-gap-8 tw-items-start tw-w-full tw-max-w-2xl">
        {/* Base Message */}
        <FormGroup className="tw-flex-full">
          <Label for="baseMessage" className="tw-font-semibold">
            Message
          </Label>
          <Input
            id="baseMessage"
            name="Message"
            invalid={validInput === false}
            placeholder="Input Message Here"
            value={baseMessage}
            onChange={handleMessageChange}
            className="tw-flex tw-bg-[#f2f0eb] tw-p-4 tw-border-2 tw-border-black tw-border-solid tw-px-6 tw-py-3 tw-rounded-lg tw-font-semibold focus:tw-border-black focus:tw-outline-none tw-w-[20rem] tw-h-[4rem]"
          />
          <p
            className={`tw-w-[20rem] tw-my-2 ${validInput !== false ? "tw-hidden" : ""}`}
          >
            Error: Remove any special characters or numbers from the input, and
            make sure the input box is not empty.
          </p>
        </FormGroup>
        {children}
      </div>

      {/* Button */}
      <div className="tw-flex tw-flex-col tw-items-center">
        <LabButton
          disabled={!shiftValueValid || !validInput}
          onClick={encryptionFunction}
          label={"Encrypt"}
        ></LabButton>
      </div>

      {/* Encrypted Message */}
      <div className="tw-flex tw-flex-row tw-gap-x-16 tw-gap-y-4 tw-flex-wrap tw-justify-center">
        <div className="tw-flex tw-flex-col">
          <h5 className="tw-font-poppins tw-text-lg tw-font-semibold tw-mb-4">
            Encrypted Message
          </h5>
          <div className="tw-w-[20rem] tw-min-h-[4rem] tw-p-4">
            <p className="tw-h-[3rem] tw-flex tw-justify-start tw-overflow-y-hidden tw-overflow-x-auto tw-items-center tw-bg-[#face3580] tw-border-[2px] tw-border-solid tw-px-6 tw-py-3 tw-rounded-lg tw-font-semibold tw-cursor-default">
              {encryptedMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Encryption.propTypes = {
  encryptionFunction: PropTypes.func,
  baseMessage: PropTypes.string,
  setBaseMessage: PropTypes.func,
  encryptedMessage: PropTypes.string,
  shiftValueValid: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

export default Encryption;
