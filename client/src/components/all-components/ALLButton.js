import React from "react";
import PropTypes from "prop-types";

const ALLButton = (props) => {
  const { label, onClick } = props;

  return (
    <div className={"tw-h-100 tw-m-3"}>
      <button
        className={"tw-border-0 tw-relative tw-p-2 tw-bg-white tw-font-calibri"}
        onClick={onClick}
      >
        {label}
        <div
          className="tw-absolute tw-border-solid tw-border-primary-blue
                tw-border-[0.4rem] tw-right-[-0.5rem] tw-top-[-0.5rem] tw-h-full tw-w-full tw-z-1
                tw-border-l-0 tw-border-b-0 tw-rounded-tr-xl"
        />
        <div
          className={
            "tw-absolute tw-border-solid tw-border-primary-yellow " +
            "tw-border-[0.4rem] tw-left-[-0.5rem] tw-bottom-[-0.5rem] " +
            "tw-w-full tw-h-full tw-z-1 tw-border-t-0 tw-border-r-0 tw-rounded-bl-xl"
          }
        />
      </button>
    </div>
  );
};

ALLButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default ALLButton;
