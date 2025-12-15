import React from "react";
import PropTypes from "prop-types";

import { FormGroup, Input, Label } from "reactstrap";

const Encryption = ({
  encryptionFunction,
  encryptedMessage,
  baseMessage,
  setBaseMessage,
  children,
}) => {
  const handleMessageChange = (e) => {
    setBaseMessage(e.target.value);
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
            placeholder="Input Message Here"
            value={baseMessage}
            onChange={handleMessageChange}
            className="tw-flex tw-bg-[#f2f0eb] tw-p-4 tw-border-2 tw-border-black tw-border-solid tw-px-6 tw-py-3 tw-rounded-lg tw-font-semibold focus:tw-border-black focus:tw-outline-none tw-w-[20rem] tw-h-[4rem]"
          />
        </FormGroup>
        {children}
      </div>

      {/* Button */}
      <div className="tw-flex tw-flex-col tw-items-center">
        <button
          className="tw-bg-labYellow tw-px-6 tw-py-3 tw-rounded-lg tw-font-semibold tw-duration-300"
          onClick={encryptionFunction}
        >
          Encrypt
        </button>
      </div>

      {/* Encrypted Message */}
      <div className="tw-flex tw-flex-row tw-gap-x-16 tw-gap-y-4 tw-flex-wrap tw-justify-center">
        <div className="tw-flex tw-flex-col">
          <h5 className="tw-font-poppins tw-text-lg tw-font-semibold tw-mb-4">
            Encrypted Message
          </h5>
          <p className="tw-flex tw-items-center tw-justify-start tw-bg-[#face3580] tw-w-[20rem] tw-h-[4rem] tw-text-center tw-p-4 tw-border-[2px] tw-border-solid tw-px-6 tw-py-3 tw-rounded-lg tw-font-semibold">
            {encryptedMessage}
          </p>
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
  children: PropTypes.element.isRequired,
};

export default Encryption;
