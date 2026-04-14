import React from "react";
import PropTypes from "prop-types";

const LabButton = (props) => {
  // 'key' cannot be a prop
  const { onClick, type, label, _key, disabled, ariaLabel } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      key={_key}
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
  _key: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default LabButton;
