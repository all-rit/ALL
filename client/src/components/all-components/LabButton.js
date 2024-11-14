import React from "react";
import PropTypes from "prop-types";

const LabButton = (props) => {
  const { onClick, type, label, key, disabled } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      key={key}
      className="btn tw-text-black tw-bg-[#d3d3d3] tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-lg btn-xl text-uppercase tw-max-h-[5rem] tw-min-w-[4rem] tw-max-w-[20rem]"
      disabled={disabled}
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
};

export default LabButton;
