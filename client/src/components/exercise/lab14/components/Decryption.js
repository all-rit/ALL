import React, { useState } from "react";
import PropTypes from "prop-types";

import { Bar } from "react-chartjs-2";
import OutputBox from "./OutputBox";
import { BarElement, CategoryScale, Chart, LinearScale } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale);

const Decryption = ({
  encryptedMessage,
  decryptionFunction,
  classicAttempts,
  classicBoxElements,
  quantumAttempts,
  quantumBoxElements,
  children,
}) => {
  const [decrypted, setDecrypted] = useState(false);

  const graphData = {
    labels: ["Classical", "Quantum"],
    datasets: [
      {
        label: "Number of Computing Attempts to Solve",
        data: [classicAttempts, quantumAttempts],
        minBarLength: 3,
        backgroundColor: ["#face35", "#0d28bc"],
        borderWidth: 1,
        yAxisID: "y",
      },
    ],
  };

  const graphOptions = {
    title: {
      display: true,
      text: "Decryption Attempts Comparison",
      fontSize: 20,
      fontColor: "#212529",
    },
    scales: {
      y: {
        min: 0,
        max: Math.max(25, classicAttempts),
      },
    },
  };

  const handleDecrypt = () => {
    decryptionFunction();
    setDecrypted(true);
  };

  const formatNumber = (num) => {
    if (Math.abs(num) >= 1e12) {
      return num.toExponential(2);
    }
    return num.toLocaleString();
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center">
      {/* Spacer block */}
      <div className="tw-mt-10" />

      {/* Decrypt section */}
      <div className="tw-flex tw-flex-row tw-gap-x-16 tw-gap-y-4 tw-flex-wrap tw-justify-center">
        <div className="tw-flex tw-flex-col">
          <h5 className="tw-font-poppins tw-text-lg tw-font-semibold tw-mb-4">
            Encrypted Message
          </h5>
          <p className="tw-flex tw-overflow-x-auto tw-overflow-y-hidden tw-items-center tw-justify-start tw-bg-[#face3580] tw-w-[20rem] tw-h-[4rem] tw-text-center tw-p-4 tw-cursor-default">
            {encryptedMessage}
          </p>
        </div>
        <div className="tw-flex tw-flex-col">
          <h5 className="tw-font-poppins tw-text-lg tw-font-semibold tw-mb-4 tw-opacity-0">
            spacer
          </h5>
          <button
            className="tw-bg-white hover:tw-bg-labYellow tw-border-[2px] tw-border-solid tw-p-4 tw-h-full tw-rounded-lg tw-transition-colors tw-duration-300"
            onClick={handleDecrypt}
          >
            Decrypt Message
          </button>
        </div>
      </div>

      {/* Spacer block */}
      <div className="tw-mt-10" />

      {/* Only show below after button is pressed */}
      {decrypted ? (
        <div className="tw-flex tw-flex-col tw-items-center">
          {/* Output box section */}
          <div className="tw-flex tw-flex-row tw-justify-center tw-w-full tw-flex-wrap tw-gap-y-16">
            <OutputBox
              title="Classical Computer"
              boxElements={classicBoxElements}
            />
            <OutputBox
              title="Quantum Computer"
              boxElements={quantumBoxElements}
            />
          </div>

          {/* Spacer block */}
          <div className="tw-mt-10" />

          {/* Summary section */}
          <p className="tw-text-center tw-max-w-2xl tw-text-lg">
            In this example, a classical computer took{" "}
            {formatNumber(classicAttempts)} attempt(s) to decrypt the message,
            while a quantum computer only took {formatNumber(quantumAttempts)}{" "}
            attempt(s)!
          </p>

          {/* Spacer block */}
          <div className="tw-mt-10" />

          {/* Graph section */}
          <div className="tw-w-full tw-max-w-144">
            <Bar
              data={graphData}
              options={graphOptions}
              width={600}
              height={400}
            />
          </div>

          {/* Comparison section */}
          <div className="tw-flex tw-justify-center tw-items-center">
            <p className="tw-text-center tw-max-w-2xl tw-text-lg">
              In this example, a quantum computer was{" "}
              {formatNumber(
                Math.round((classicAttempts / quantumAttempts) * 100) / 100,
              )}{" "}
              times faster than a classical computer!
            </p>
          </div>
          <div>{children}</div>
        </div>
      ) : (
        <p>Press the Decrypt Message button to see the results!</p>
      )}
    </div>
  );
};

Decryption.propTypes = {
  baseMessage: PropTypes.string,
  encryptedMessage: PropTypes.string,
  decryptionFunction: PropTypes.func,
  classicAttempts: PropTypes.number,
  classicBoxElements: PropTypes.array,
  quantumAttempts: PropTypes.number,
  quantumBoxElements: PropTypes.array,
  children: PropTypes.element.isRequired,
};

export default Decryption;
