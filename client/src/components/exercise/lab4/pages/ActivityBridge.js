import React from "react";
import { navigate } from "@reach/router";

const ActivityBridge = () => {
  const handleSubmit = () => {
    navigate("/Lab4/Exercise/FormSkipToMainBroken");
  };

  return (
    <div className="">
      <h1 className="tw-bg-labGray">Header</h1>
      <button onClick={handleSubmit}>Text</button>
    </div>
  );
};

export default ActivityBridge;
