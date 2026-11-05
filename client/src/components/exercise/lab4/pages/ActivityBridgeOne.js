import React from "react";
import { navigate } from "@reach/router";

const ActivityBridgeOne = () => {
  const handleSubmit = () => {
    navigate("/Lab4/Exercise/FormSkipToMainBroken");
  };

  return (
    <div className="tw-p-4">
      <h2 className="tw-title tw-text-left tw-my-6">Activity Bridge</h2>
        <p className="tw-body-text tw-text-left">
          This page is meant to act as a bridge between the previous and next activity. Are you ready to move on to the next activity?
        </p>
      <button class="btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-xl btn-xl text-uppercase tw-m-10" onClick={handleSubmit}>Next</button>
    </div>
  );
};
//navigate will be changed, pass in the url via prop, make duplicate reuse components.
export default ActivityBridgeOne;
