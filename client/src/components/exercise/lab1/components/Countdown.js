import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CongratulationMessage from "./CongratulationMessage";

/**
 * Countdown component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.visible - Determines if the countdown is visible.
 * @param {number} props.time - The remaining time for the countdown.
 * @param {string} props.message - The congratulation message to display.
 * @returns {JSX.Element|null} The Countdown component.
 */
const Countdown = ({ visible, time, message }) => {
  if (!visible) return null;

  return (
    <Fragment>
      <CongratulationMessage message={message} />

      <div className="exercise__countdown">{time}</div>
    </Fragment>
  );
};

Countdown.propTypes = {
  visible: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default Countdown;
