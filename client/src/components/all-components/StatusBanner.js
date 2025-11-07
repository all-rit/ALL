import React from "react";
import PropTypes from "prop-types";

const StatusBanner = (props) => {
  const { style, children } = props;

  return (
    <div
      className={
        "tw-flex tw-w-full tw-h-16 tw-my-6 tw-items-center tw-justify-center"
      }
    >
      <div
        className={`tw-flex tw-w-3/4 tw-shadow tw-items-center tw-justify-center tw-rounded-lg tw-p-5 ${style}`}
      >
        <p className={"tw-text-center tw-body-text tw-text-white"}>
          {children}
        </p>
      </div>
    </div>
  );
};

StatusBanner.propTypes = {
  style: PropTypes.string,
  children: PropTypes.string,
};

export default StatusBanner;
