/* eslint-disable react/prop-types */
import React from "react";
import { navigate } from "@reach/router";

const ExpressionExercise = (props) => {
  const { setCount, count } = props;
  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleNext = () => {
    navigate("/Imagine/ExpressionScore");
  };

  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">
        Expression Empathy Building: Exercise
      </h2>
      <div className="playthrough__sentence">
        Remember, if you believe you see discomfort, hit the button!
      </div>

      <div className="tw-p-1">
        <iframe
          title={"Expression Exercise"}
          width="660"
          height="415"
          src="https://www.youtube.com/embed/NpEaa2P7qZI"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={false}
        />
      </div>
      <div className="playthrough__sentence">{count} discomfort detected.</div>
      <div className="tw-mb-11">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={incrementCount}
        >
          Discomfort Detected
        </button>
      </div>
      {count > 0 && (
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleNext}
          key="score"
        >
          Continue to Score
        </button>
      )}
    </div>
  );
};

export default ExpressionExercise;
