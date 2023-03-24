/* eslint-disable react/prop-types */
import React from "react";
import { navigate } from "@reach/router";

const ExpressionScore = (props) => {
  const { linkNum } = props;
  const handleNext = () => {
    navigate("/Imagine" + linkNum + "/ImagineEnd");
  };

  return (
    <div className="container bottomSpace center-div">
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
