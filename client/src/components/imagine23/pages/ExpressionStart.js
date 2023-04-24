/* eslint-disable react/prop-types */
import React from "react";
import { navigate } from "@reach/router";

const ExpressionStart = ({setCount}) => {
  const handleNext = () => {
    navigate("/Imagine/ExpressionExercise");
    setCount(0);
  };

  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">Expression Empathy Building: Start</h2>
      <div className="playthrough__sentence">
        Next you will watch someone go through the same exercise you did. Can
        you catch the difficulties they express?
      </div>
      <div className="playthrough__sentence">
        There will be a button below the video, press it whenever you believe
        the person experiences discomfort or any negative emotion.
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Start&quot; button to begin this activity!
      </div>

      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleNext}
        key="start"
      >
        Start
      </button>
    </div>
  );
};

export default ExpressionStart;
