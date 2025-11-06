import { React } from "react";
import PropTypes from "prop-types";

import { Bar } from "react-chartjs-2";
import OutputBox from "./OutputBox";

// import useMainStateContext from "src/reducers/MainContext";
// import ExerciseStateContext from "../Lab14Context";

const Decryption = ({
  encryptedMessage,
  decryptionFunction,
  classicAttempts,
  classicBoxElements,
  quantumAttempts,
  quantumBoxElements,
}) => {
  const graphData = {
    labels: ["Classical", "Quantum"],
    datasets: [
      {
        label: "Number of Computing Attempts to Solve",
        data: [classicAttempts, quantumAttempts], // TODO: Replace with actual data
        backgroundColor: ["#face35", "#0d28bc"],
        borderWidth: 1,
      },
    ],
  };

  const graphOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 25,
          },
        },
      ],
    },
  };

  const handleDecrypt = () => {
    decryptionFunction();
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center">
      {/* Spacer block */}
      <div className="tw-mt-10" />

      {/* Decrypt section */}
      <div className="tw-flex tw-flex-row tw-gap-x-16 tw-gap-4 tw-flex-wrap tw-items-center">
        <div className="tw-flex tw-flex-col tw-gap-2">
          <h5 className="tw-font-poppins tw-justify-start tw-text-lg tw-font-bold">
            Encrypted Message
          </h5>
          <p className="tw-flex tw-items-center tw-justify-start tw-bg-[#face3580] tw-w-[20rem] tw-h-[4rem] tw-text-center tw-p-4">
            {encryptedMessage}
          </p>
        </div>
        <button
          className="tw-bg-white hover:tw-bg-labYellow tw-border-[2px] tw-border-solid tw-p-4 tw-h-full tw-rounded-lg tw-transition-colors tw-duration-300"
          onClick={handleDecrypt}
        >
          Decrypt Message
        </button>
      </div>

      {/* Spacer block */}
      <div className="tw-mt-10" />

      {/* Output box section */}
      <div className="tw-flex tw-flex-row tw-justify-center tw-w-full tw-flex-wrap">
        <OutputBox title="Classical" boxElements={classicBoxElements} />
        <OutputBox title="Quantum" boxElements={quantumBoxElements} />
      </div>

      {/* Spacer block */}
      <div className="tw-mt-10" />

      {/* Graph section */}
      <div>
        <Bar data={graphData} options={graphOptions} width={600} height={400} />
      </div>
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
};

export default Decryption;
