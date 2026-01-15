import React from "react";
import PropTypes from "prop-types";

import { FormGroup, Input, Label } from "reactstrap";
import LabButton from "src/components/all-components/LabButton";

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
        <LabButton onClick={encryptionFunction} label={"Encrypt"}></LabButton>
      </div>

      {/* Encrypted Message */}
      <div className="tw-flex tw-flex-row tw-gap-x-16 tw-gap-y-4 tw-flex-wrap tw-justify-center">
        <div className="tw-flex tw-flex-col">
          <h5 className="tw-font-poppins tw-text-lg tw-font-semibold tw-mb-4">
            Encrypted Message
          </h5>
          <div className="tw-w-[20rem] tw-min-h-[4rem] tw-p-4">
            <p className="tw-bg-[#face3580] tw-overflow-x-auto tw-border-[2px] tw-border-solid tw-px-6 tw-py-3 tw-rounded-lg tw-font-semibold">
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
  children: PropTypes.element.isRequired,
};

export default Encryption;
