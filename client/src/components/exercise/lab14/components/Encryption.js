import React, { useState } from "react";
import PropTypes from "prop-types";

import { FormGroup, Input, Label } from "reactstrap";

const Encryption = ({
  encryptionFunction,
  encryptedMessage,
  baseMessage,
  setBaseMessage,
}) => {
  const [shiftValue, setShiftValue] = useState(0);
  const fillPercent = (shiftValue / 21) * 100;

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-gap-8 tw-mt-20 tw-w-full">
      <div className="tw-flex tw-gap-8 tw-items-center tw-w-full tw-max-w-2xl">
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
            onChange={(e) => setBaseMessage(e.target.value)}
            className="tw-flex tw-items-center tw-justify-start tw-bg-[#f2f0eb] tw-w-[20rem] tw-h-[4rem] tw-text-center tw-p-4 tw-border-2 tw-border-black tw-border-solid tw-px-6 tw-py-3 tw-rounded-lg tw-font-semibold focus:tw-border-black focus:tw-outline-none"
          />
        </FormGroup>

        {/* Slider */}
        <div className="tw-flex-1 tw-relative tw-flex tw-flex-col tw-items-center">
          <span className="tw-font-semibold">Shift</span>
          <div className="tw-flex tw-justify-between tw-w-full">
            <span className="tw-font-semibold">0</span>
            <span className="tw-font-semibold">21</span>
          </div>

          <input
            type="range"
            min="0"
            max="21"
            onChange={(e) => setShiftValue(Number(e.target.value))}
            value={shiftValue}
            className="tw-w-full tw-h-3 tw-appearance-none tw-cursor-pointer tw-rounded-none tw-outline-none"
            style={{
              background: `linear-gradient(to right, black ${fillPercent}%, #e5e7eb ${fillPercent}%)`,
            }}
          />

          {/* Bubble */}
          <div
            className="tw-absolute tw--top-8 tw-bg-black tw-text-white tw-text-xs tw-px-2 tw-py-1 tw-rounded"
            style={{
              left: `calc(${(shiftValue / 21) * 100}% - 12px)`, // -12px to center bubble
            }}
          >
            {shiftValue}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="tw-flex tw-flex-col tw-items-center">
        <button
          className="tw-bg-labYellow tw-px-6 tw-py-3 tw-rounded-lg tw-font-semibold tw-duration-300"
          onClick={() => encryptionFunction(baseMessage, shiftValue)}
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
  encryptionFunction: PropTypes.func.isRequired,
  baseMessage: PropTypes.string.isRequired,
  setBaseMessage: PropTypes.func.isRequired,
  encryptedMessage: PropTypes.string,
};

export default Encryption;
