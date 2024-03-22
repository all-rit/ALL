import React, { useState } from "react";
import ReactPlayer from "react-player";
import { navigate } from "@reach/router";
import ImagineService from "../../../services/ImagineService";
import PropTypes from "prop-types";

const ExpressionExercise2 = (props) => {
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
          reactPlayer.current.getCurrentTime(),
        ).toFixed(5),
      },
    ]);
    setCount(count + 1);
  };

  const handleNext = () => {
    const body = { userID: userID, study: timeStamps };
    ImagineService.postStudy(body);
    navigate("/Imagine/ExpressionScore");
  };

  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">
        Expression Empathy Building: Exercise 2
      </h2>
      {showContine == null && (
        <div className="playthrough__sentence__imagine">
          Remember, if you believe you see discomfort, hit the button!
        </div>
      )}
      {showContine == false && (
        <>
          <div className="playthrough__sentence__imagine">
            {count} discomfort detected.
          </div>
        </>
      )}
      <div className="tw-p-1 tw-flex tw-justify-center">
        {!showContine && (
          <ReactPlayer
            ref={reactPlayer}
            width="960px"
            height="615px"
            url="https://www.youtube.com/watch?v=2cVChTeNPn8"
            onStart={() => {
              setShowContinue(false);
            }}
            onEnded={() => {
              setShowContinue(true);
              handleNext();
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

ExpressionExercise2.propTypes = {
  setCount: PropTypes.func,
  count: PropTypes.number,
  userID: PropTypes.string,
};

export default ExpressionExercise2;
