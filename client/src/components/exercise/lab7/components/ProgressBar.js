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
    <div className={"tw-mt-9"}>
      <div className={"tw-mb-9"}>
        <p className="tw-font-bold tw-text-xl">{text}</p>
      </div>
      <div>
        <div
          style={{ width: `${calculateWidth()}%` }}
          className={`tw-bg-[#7CB1FF] tw-rounded tw-py-3 tw-transition-all tw-ease-in-out tw-duration-500`}
        />
        <p className={"tw-font-bold tw-text-xl"}>{seconds - 1}</p>
      </div>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  text: PropTypes.string,
  seconds: PropTypes.number,
};
