/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { navigate } from "@reach/router";
import ImagineService from "../../../services/ImagineService";

const ExpressionExercise = (props) => {
  const { setCount, count, userID } = props;

  const [showContine, setShowContinue] = useState(null);
  const [timeStamps, setTimeStamps] = useState([]);

  const reactPlayer = React.createRef();

  const incrementCount = () => {
    setTimeStamps([
      ...timeStamps,
      {
        discomfortNumber: count + 1,
        timeStamp: Number.parseFloat(
          reactPlayer.current.getCurrentTime()
        ).toFixed(5),
      },
    ]);
    setCount(count + 1);
  };

  const handleNext = () => {
    ImagineService.discomfortCount(userID, timeStamps);
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

      <div className="tw-p-1 tw-flex tw-justify-center">
        {!showContine && (
          <ReactPlayer
            ref={reactPlayer}
            width="760px"
            height="515px"
            url="https://www.youtube.com/watch?v=NpEaa2P7qZI"
            onStart={() => {
              setShowContinue(false);
            }}
            onEnded={() => {
              setShowContinue(true);
            }}
          />
        )}
      </div>
      {showContine == false && (
        <>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase tw-m-3"
            onClick={incrementCount}
          >
            Discomfort Detected
          </button>
          <div className="playthrough__sentence">
            {count} discomfort detected.
          </div>

        </>
      )}

      {showContine && (
        <button
          className="btn btn-primary text-black btn-xl text-uppercase tw-m-4"
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
