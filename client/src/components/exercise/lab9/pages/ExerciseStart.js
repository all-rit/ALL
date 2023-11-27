import { navigate } from "@reach/router";
import React from "react";

const ExerciseStart = () => {
  const handleStart = () => {
    // navigate to the webpage
    navigate("/Lab9/Exercise/page");
  };

  return (
    <>
      <div className="center-div">
        <div className="guidance margin-bottom-2">
          <p className="playthrough__sentence">
            Welcome to ALL University! ALL University’s primary campus is
            located in the US, but there are also several satellite campuses
            around the world, including the United Kingdom, Japan, and Dubai.
            ALL University’s website was built for the US campus, but they want
            to expand their website to be accessible to their satellite campuses
            as well.
          </p>
          <p className="playthrough__sentence">
            In this exercise, you will assist ALL University in localizing their
            website to be accessible to various locales. On the next page, you
            will see ALL University’s current website. See if you can spot the
            inaccessible, un-localized areas of the website.
          </p>
        </div>
      </div>
      <p className="playthrough__sentence">
        Click the &apos;<span className={"tw-font-bold"}>Start</span>&apos;
        button to begin!
      </p>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleStart}
        key="start"
      >
        Start
      </button>
    </>
  );
};

export default ExerciseStart;
