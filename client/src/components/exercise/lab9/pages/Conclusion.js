import { navigate } from "@reach/router";
import React from "react";

const Conclusion = () => {
  const handleFinish = () => {
    // navigate to the reinforcement section
    navigate("/Lab9/Reinforcement");
  };

  return (
    <>
      <div className="center-div">
        <h2 className="playthrough__title">You Did It!</h2>
        <div className="playthrough__sentence">
          You have completed the exercise for the Accessible to Localization
          Lab. Your takeaways from this exercise should include:
        </div>
        <div className="playthrough__sentence">
          1. Recognize the importance of accessible software for non-English
          speakers.
        </div>
        <div className="playthrough__sentence">
          2. Consider all cultures and locales when designing accessible
          software.
        </div>
        <div className="playthrough__sentence">
          3. Consider all aspects of software during the localization process,
          including color, text, images, and more.
        </div>
      </div>
      <br />
      <div className="playthrough__sentence">
        Click the &#39;Continue&#39; button to continue to the Reinforcement
        section of the lab.
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleFinish}
        key="start"
      >
        Continue
      </button>
    </>
  );
};

export default Conclusion;
