import React from "react";
import PropTypes from "prop-types";

const LabButton = (props) => {
  const { onClick, type, label, key, disabled } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      key={key}
      className="btn tw-bg-[#d3d3d3] tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-lg btn-xl text-uppercase"
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
