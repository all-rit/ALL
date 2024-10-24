import { navigate } from "@reach/router";
import React from "react";
import useScroll from "../../../use-hooks/useScroll";

const LandingPage = () => {
  const handleNext = () => {
    navigate("/Imagine/ExperientialInstructions");
  };
  useScroll();
  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">
        Experiential Empathy Building: Start
      </h2>
      <div className="playthrough__sentence__imagine">
        You are going to be participating in an Empathy Building exercise in
        which you will experience how a poorly designed app might cause someone
        with a Color-Blindness deficiency discomfort or annoyance.
      </div>
      <div className="playthrough__sentence__imagine">
        Click the “Activity” button to begin!
      </div>

      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleNext}
        key="start"
      >
        Activity
      </button>
    </div>
  );
};

export default LandingPage;
