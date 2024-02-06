import React from "react";
import PropTypes from "prop-types";

/**
 * Represents a popup component that displays a message.
 * @param {Object} props - The properties for the Popup component.
 * @param {string} props.message - The message to be displayed in the popup.
 * @param {boolean} props.error - Indicates whether the popup is an error popup.
 * @param {Function} props.handler - The handler function to be called when the popup is closed.
 * @returns {JSX.Element|null} The rendered Popup component.
 */
const Popup = ({ message, error, handler }) => {
  const close = () => {
    handler("");
  };

  if (message === "") return null;

  return (
    <div className="popup">
      <div className={`popup__content ${error ? "popup__error" : ""}`}>
        <span className="popup__message">{message}</span>
        <span className="popup__close" onClick={close}>
          &times;
        </span>
      </div>
    </div>
  );
};

Popup.propTypes = {
  message: PropTypes.string,
  error: PropTypes.bool,
  handler: PropTypes.func,
};

export default Popup;
