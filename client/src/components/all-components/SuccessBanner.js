import React from "react";
import PropTypes from "prop-types";

const SuccessBanner = (props) => {
  const { message } = props;

  return (
    <div
      className={"tw-flex tw-w-full tw-h-16 tw-items-center tw-justify-center"}
    >
      <div
        className={
          "tw-flex tw-w-3/4 tw-bg-success tw-shadow tw-items-center tw-justify-center tw-rounded-lg tw-p-5"
        }
      >
        <p className={"tw-text-center tw-text-white"}>{message}</p>
      </div>
    </div>
  );
};

SuccessBanner.propTypes = {
  message: PropTypes.string,
};

export default SuccessBanner;
