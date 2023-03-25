/* eslint-disable react/prop-types */
import React from "react";
import { navigate } from "@reach/router";

const ExpressionScore = () => {
  const handleNext = () => {
    navigate("/Imagine");
  };

  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">Empathy Building Expression: Score</h2>
      <div className="playthrough__sentence">
        Good Job! You detected the subjects discomfort x/x times
      </div>
      <div className="playthrough__sentence">
        Remember, empathy is important and a keystone of proper development
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleNext}
        key="start"
      >
        Finish Lab
      </button>
    </div>
  );
};

export default ExpressionScore;
