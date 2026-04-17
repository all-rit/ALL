import React from "react";
import PropTypes from "prop-types";
import ALLButton from "src/components/all-components/ALLButton";

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
          "tw-border-solid tw-border-0 tw-border-l-[1rem] tw-px-4 tw-py-1 tw-w-full"
        }
      >
        <h2 className="tw-text-base tw-font-bold tw-font-mono tw-text-left">
          {title}
        </h2>
        <p className="tw-text-base tw-font-mono tw-text-left">{message}</p>
      </div>
      <ALLButton
        className="tw-mt-4"
        label="Acknowledge Message"
        type="button"
        disabled={acknowledged}
        onClick={() => setAcknowledged(true)}
      />
    </div>
  );
};

AnalysisMessage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  error: PropTypes.bool,
  acknowledged: PropTypes.bool,
  setAcknowledged: PropTypes.func,
};

export default AnalysisMessage;
