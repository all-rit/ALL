import React from "react";
import { navigate } from "@reach/router";
//base url, changing P text based on the exercise, Activity 1 Start(title changes), any other general information
const ActivityBridge = (target, path) => {
  const handleSubmit = () => {
    navigate(path);
  };
  return (
    <div className="tw-p-4">
      <h2 className="tw-title tw-text-left tw-my-6">Activity</h2>
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

export default ActivityBridge;
