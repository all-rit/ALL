import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "src/constants/index";
import PropTypes from "prop-types";

const ExerciseStart = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  const handleStart = () => {
    actions.updateUserState(EXERCISE_PLAYING);
    // navigate to the static faux webpage
    navigate("/Lab9/Exercise/InitialPage");
  };

  return (
    <>
      <div className="center-div">
        <div className="guidance margin-bottom-2">
          <p className="playthrough__sentence">
            Welcome to ALL University! ALL University’s primary campus is
            located in the US, but there are also several satellite campuses
            around the world, including the United Kingdom, Japan, and Dubai.
            The website for ALL University was built for the US campus, but they want
            to expand their website to be accessible to their satellite campuses
            as well.
          </p>
          <p className="playthrough__sentence">
            In this exercise, you will assist ALL University in localizing their
            website to be accessible to various locales. As you proceed through the localization process, you will see your changes reflected on the website for the Dubai campus.
          </p>
          <p className="playthrough__sentence">
          On the next page, you
            will see ALL University’s current website. See if you can spot the
            un-localized parts of the website.
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

ExerciseStart.propTypes = {
  actions: PropTypes.object,
};

export default ExerciseStart;
