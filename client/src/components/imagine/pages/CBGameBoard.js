/* eslint-disable react/prop-types */
import React from "react";
import { navigate } from "@reach/router";

const CBGameBoard = (props) => {
  const { linkNum } = props;
  const handleNext = () => {
    navigate("Imagine" + linkNum + "/ImagineEnd");
  };

  return (
    <div className="container bottomSpace center-div">
      <button
        className="btn btn-primary text-black btn-x1 text-uppercase"
        onClick={handleNext}
        key="next"
      >
        Next
      </button>
    </div>
  );
};

export default CBGameBoard;
