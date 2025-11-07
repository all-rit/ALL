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
    <div className="tw-flex tw-flex-col tw-items-center tw-gap-8 tw-mt-20">
      <div className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-w-full tw-max-w-xl tw-gap-10">
        {/* Base Message */}
        <div className="tw-flex-1">
          <FormGroup>
            <Label for="baseMessage">Message</Label>
            <Input
              id="baseMessage"
              name="Message"
              placeholder="Input Message Here"
              value={baseMessage}
              onChange={(e) => setBaseMessage(e.target.value)}
              className="tw-flex tw-items-center tw-justify-start tw-bg-[#f8f6f1] tw-w-[20rem] tw-h-[4rem] tw-text-center tw-p-4 tw-border-[2px] tw-border-solid tw-px-6 tw-py-3 tw-rounded-lg tw-font-semibold "
            />
          </FormGroup>
        </div>

        {/* Slider */}
        <div className="tw-flex-1 tw-flex tw-justify-center">
          <div>
            <span className="text-center w-1/3 tw-justify-left">0</span>
            <p>Shift</p>
            <input
              type="range"
              min="0"
              max="21"
              onChange={(e) => setShiftValue(Number(e.target.value))}
              value={shiftValue}
              className="
                            tw-w-64
                            tw-h-3
                            tw-rounded-none
                            tw-appearance-none
                            tw-cursor-pointer
                            tw-outline-none
                            "
              style={{
                background: `linear-gradient(to right, black ${fillPercent}%, #e5e7eb ${fillPercent}%)`,
              }}
            />
          </div>
        </div>

        {/* Button */}
        <div className="tw-flex tw-flex-col">
          <button
            className="tw-bg-white hover:tw-bg-labYellow tw-border-[2px] tw-border-solid tw-px-6 tw-py-3 tw-rounded-lg tw-font-semibold tw-transition-colors tw-duration-300"
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
