/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import { navigate } from "@reach/router";

const ImagineEnd = (props) => {
  // const {linkNum} = props;
  // const handleNext= ()=>{
  //     navigate("/Imagine"+linkNum);
  // }

  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">Tic-Tac-Toe: End</h2>
      <div className="playthrough__sentence">
        Congratulations! You've played your first game against an AI! Thanks for
        playing!
      </div>
      <div className="playthrough__sentence">
        You are off to a great start and are quickly climbing the ranks!
      </div>

      <h2 className="playthrough__title">
        Please ask the supervisor for your Post-Survey.
      </h2>

      {/* <button
              className="btn btn-primary text-black btn-xl text-uppercase "
              onClick = {handleNext}
              key="start"
            >
                Continue
            </button> */}
    </div>
  );
};

export default ImagineEnd;
