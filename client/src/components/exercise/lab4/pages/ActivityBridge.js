import React from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
//base url, changing P text based on the exercise, Activity 1 Start(title changes), any other general information
const ActivityBridge = (props) => {
  const { target } = props;
  const handleSubmit = () => {
    navigate(target);
  };
  return (
    <div className="tw-p-4">
      <h2 className="tw-title tw-text-left tw-my-6">Activity Bridge</h2>
      <p className="tw-body-text tw-text-left">
        This page is meant to act as a bridge between the previous and next
        activity. Are you ready to move on to the next activity?
      </p>
      <button
        className="btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-xl btn-xl text-uppercase tw-m-10"
        onClick={handleSubmit}
      >
        Next
      </button>
    </div>
  );
};
//navigate will be changed, pass in the url via prop, make duplicate reuse components.

ActivityBridge.propTypes = {
  target: PropTypes.string,
};

export default ActivityBridge;
