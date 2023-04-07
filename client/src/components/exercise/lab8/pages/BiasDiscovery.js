/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import { navigate } from "@reach/router";
import React from "react";

const BiasDiscovery = () => {
  const handleContinue = () => {
    // TODO: update this to go to the repair section
    navigate("/Lab8/Exercise/BiasDiscovery");
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <h2 className="playthrough__title">Did You Notice?</h2>

        <div className="playthrough__sentence">
          You may have noticed that some chat messages appeared to be{" "}
          <b>appropriate</b>, but the AI thought they were inappropriate and
          recommended them to be <b>removed</b>! The AI was trained on a set of
          data that contained both appropriate and inappropriate messages, so
          why did the AI make these mistakes?
        </div>
{/* equitable, representative */}
        <div className="playthrough__sentence">
          When the data used to train AI is not representative of ,{" "}
          <b>selection bias</b> can occur. In other words, selection bias occurs
          when some data is <b>overrepresented</b> and other data is{" "}
          <b>underrepresented</b> in a dataset. In this situation, the dataset
          contained too many inappropriate messages relating to *topic being
          biased against*, so the AI learned that all messages related to *topic
          being biased against* are inappropriate.
        </div>
      </div>
      <div className="playthrough__sentence">
        To update the dataset and repair the selection bias, click{" "}
        <b>Continue”</b>.
      </div>

      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleContinue}
        key="continue"
      >
        Continue
      </button>
    </div>
  );
};

export default BiasDiscovery;
