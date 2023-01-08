/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";

const AIReasoning = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const handleContinue = () => {
    navigate("/Lab6/Exercise/AIRepair");
  };

  return (
    <div className="center-div">
      <h2 className="playthrough__title">AI Candidate Reasoning:</h2>
      <div className="playthrough__sentence">
        The reason that the AI was not recommending certain people it should
        have been was because the AI was taking into account whether the
        interviewee was wearing glasses in the image. It had nothing to do with
        the applicants work qualities, the AI was prejudice against what the
        people were wearing in the pictures.
      </div>
      <div className="playthrough__sentence">
        {" "}
        Click the &quot;Continue&quot; button to proceed to the repair section
        to repair the AI!
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleContinue}
        key="confirm"
      >
        Continue To Repair
      </button>
    </div>
  );
};

export default AIReasoning;
