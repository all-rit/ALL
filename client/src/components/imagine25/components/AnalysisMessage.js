import React from "react";
import LabButton from "src/components/all-components/LabButton";
import PropTypes from "prop-types";

const AnalysisMessage = ({
  title,
  message,
  error,
  acknowledged,
  setAcknowledged,
}) => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <div
        className={
          (error
            ? "tw-bg-[#FFDADA] tw-border-[#FF0000] "
            : "tw-bg-[#D0FFC2] tw-border-[#009C05] ") +
          "tw-border-solid tw-border-0 tw-border-l-[1rem] tw-px-4 tw-py-2 tw-w-full tw-my-4"
        }
      >
        <h2 className="tw-text-xl tw-font-bold tw-font-mono tw-text-left">
          {title}
        </h2>
        <p className="tw-font-mono tw-text-left">{message}</p>
      </div>
      <LabButton
        label="Acknowledge Message"
        type="button"
        disabled={acknowledged}
        onClick={() => setAcknowledged(true)}
      />
    </div>
  );
};

AnalysisMessage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  acknowledged: PropTypes.bool.isRequired,
  setAcknowledged: PropTypes.func.isRequired,
};

export default AnalysisMessage;
