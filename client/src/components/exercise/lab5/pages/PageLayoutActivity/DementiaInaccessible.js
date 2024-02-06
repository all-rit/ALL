import React, { useState } from "react";
import { navigate } from "@reach/router";
import Timer from "../../components/Timer";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import { time } from "../../../../../constants/lab5";

/**
 * Renders the DementiaInaccessible component.
 * This component displays information about Dementia and includes a timer and a navigation button.
 * @returns {JSX.Element} The rendered DementiaInaccessible component.
 */
const DementiaInaccessible = () => {
  const [timerDone, setTimerDone] = useState(false);
  const componentName = "DementiaInaccessible";

  const handleNav = () => {
    navigate("/Lab5/Exercise/DementiaInaccessibleKnowledgeCheck");
  };

  const timerDoneCallback = () => {
    setTimerDone(true);
  };

  return (
    <div>
      <div className="cognitive_instructions">
        Read the following information about Dementia from w3.org
      </div>
      <div className="cognitive_information">
        {!timerDone ? (
          <div>
            <div className="heading">1.0 Dementia</div>
            <div className="inaccessible">
              Dementia is defined as a severe loss of cognitive abilities that
              disrupts daily life. Symptoms include difficulty remembering
              information, difficulty with organizing thoughts, difficulty
              working within time limits, and visual processing difficulties,
              which can affect the ability to recognize places. Content
              optimized for this group includes large, clear buttons with simple
              graphics and text, limited features, clear, step-by-step
              instructions, and rapid and direct feedback
            </div>
          </div>
        ) : (
          <div className="center">Time Has Expired! Click Next to Proceed</div>
        )}
      </div>
      <div className="flex">
        <Timer seconds={time} timerDone={timerDoneCallback} />
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleNav}
          key="next"
        >
          Next
        </button>
      </div>
      <PageServiceTimer name={componentName} />
    </div>
  );
};

export default DementiaInaccessible;
