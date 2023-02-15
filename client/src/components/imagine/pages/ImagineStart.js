/* eslint-disable react/prop-types */
import React from "react";
import { navigate } from "@reach/router";

const ImagineStart = (props) => {
  const { linkNum } = props;
  const handleNext = () => {
    navigate("/Imagine" + linkNum + "/AvatarSelection");
  };

  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">Empathy Building Exercise: Start</h2>
      <div className="playthrough__sentence">
        You are going to be participating in an Empathy Building exercise in where you will
        experience how a poorly designed app might cause someone with a Color-Blindness deficiency discomfort or annoyance.
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

export default ImagineStart;
