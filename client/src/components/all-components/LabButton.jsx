import React from "react";
import PropTypes from "prop-types";

const LabButton = (props) => {
  const { onClick, type, label, key, disabled, ariaLabel } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      key={key}
      className="btn tw-text-black tw-bg-primary-yellow tw-shadow-md hover:tw-bg-secondary-gray hover:tw-shadow-lg btn-xl text-uppercase tw-max-h-[5rem] tw-min-w-[4rem] tw-max-w-[20rem] tw-text-nowrap tw-border-none"
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
};

LabButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  key: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default LabButton;
