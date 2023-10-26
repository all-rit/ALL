/* eslint-disable react/prop-types */
import React from "react";
import { navigate } from "@reach/router";

const ExpressionScore = (props) => {
  const handleNext = () => {
    navigate("/Imagine/Reading");
  };

  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">Expression Empathy Building: Score</h2>
      <div className="playthrough__sentence__imagine">
        Good Job! You detected the subjects discomfort {props.count} times!
      </div>
      <div className="playthrough__sentence__imagine">
        Remember, empathy is important and a keystone of proper development.
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleNext}
        key="start"
      >
        Continue to Reading
      </button>
    </div>
  );
};

export default ExpressionScore;
