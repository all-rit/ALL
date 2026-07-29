import React from "react";
import { READ_TIME } from "../../../../constants/lab7";
import PropTypes from "prop-types";
import { ModalBody, ModalFooter } from "reactstrap";

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
    <>
      <ModalBody>
        <p className="tw-text-lg">{text}</p>
      </ModalBody>
      <ModalFooter className={"tw-flex tw-flex-col tw-items-start"}>
        <div
          style={{ width: `${calculateWidth()}%` }}
          className={`tw-bg-[#7CB1FF] tw-border-solid tw-rounded tw-py-3 tw-transition-all tw-ease-in-out tw-duration-500`}
        />
        <p className={"tw-font-bold tw-text-lg tw-mx-auto"}>
          Reading Time Left: {seconds - 1} seconds
        </p>
      </ModalFooter>
    </>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  text: PropTypes.element,
  seconds: PropTypes.number,
};
