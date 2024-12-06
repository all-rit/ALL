import React from "react";
import PropTypes from "prop-types";

const RepairUpdateButton = (props) => {
  const { onClick, disabled } = props;
  return (
    <div className={"tw-w-full tw-flex tw-justify-center"}>
      <button
        disabled={disabled}
        onClick={onClick}
        type="submit"
        className="btn btn-xl tw-bg-success tw-text-white tw-my-6 tw-w-full tw-shadow-lg hover:tw-bg-hoverSuccess"
      >
        Update
      </button>
    </div>
  );
};

RepairUpdateButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default RepairUpdateButton;
