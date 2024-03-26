import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Popup = ({ handler, message, error }) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    handler("");
  };

  useEffect(() => {
    if (message !== "") {
      setIsOpen(true);
    }
  }, [message]);

  if (!isOpen) return null;

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
  handler: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

export default Popup;
