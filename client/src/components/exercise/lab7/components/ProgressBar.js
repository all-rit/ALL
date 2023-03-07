import React from "react";
import { READ_TIME } from "../../../../constants/lab7";
import PropTypes from "prop-types";

const ProgressBar = ({ text, seconds }) => {
  /**
   * Calculates the width of the progress bar, utilizing the current seconds, and the starting seconds.
   *
   * @returns {number} width of the progress bar
   */
  const calculateWidth = () => {
    return (((seconds - 1) * 1000) / (READ_TIME - 1000)) * 100;
  };

  return (
    <div className={"tw-space-y-6"}>
      <div>
        <p className="tw-text-lg">{text}</p>
      </div>
      <div className={"tw-flex tw-flex-col"}>
        <div
          style={{ width: `${calculateWidth()}%` }}
          className={`tw-bg-[#7CB1FF] tw-border-solid tw-rounded tw-py-3 tw-transition-all tw-ease-in-out tw-duration-500`}
        />
        <p className={"tw-font-bold tw-text-lg tw-mx-auto"}>
          Reading Time Left: {seconds - 1} seconds
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  text: PropTypes.string,
  seconds: PropTypes.number,
};
