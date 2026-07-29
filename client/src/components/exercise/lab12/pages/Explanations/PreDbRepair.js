// Exercise Instructions (Page #1)

import React from "react";
import { navigate } from "@reach/router";

const PreDbRepair = () => {
  const handleContinue = () => {
    navigate("/Lab12/Exercise/DatabaseRepair");
  };

  return (
    <div className="center-div">
      <h1 className={"tw-title tw-text-left"}> Explanation </h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-6">
          Hm, that doesnt look right. The diploma hasnt changed even though we
          updated the form.
        </p>
        <p className="tw-body-text tw-text-left">
          That’s because we need to update the database table as well to take in
          the newly available preferredName and pronouns values.
        </p>
      </div>
      <div className="tw-body-text tw-text-center tw-pb-6">
        Click the <strong>Start</strong> button to repair the database!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="start"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default PreDbRepair;
