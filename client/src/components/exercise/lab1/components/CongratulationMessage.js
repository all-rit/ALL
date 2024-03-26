import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a congratulatory message component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.message - The congratulatory message to display.
 * @returns {JSX.Element} The congratulation message component.
 */
const CongratulationMessage = ({ message }) => {
  return <div className="exercise__congratulation">{message}</div>;
};

CongratulationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
export default CongratulationMessage;
