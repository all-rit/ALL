/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import useMainStateContext from "../../../reducers/MainContext";
import { navigate, Router } from "@reach/router";
// import SelectExercise from "./SelectExercise";
import Lab0Context from "./Lab0Context";
import Testing from "./Testing";

const Main = () => {
  const handleNav = (route) => {
    if (route in SECTIONS) {
      actions.updateUserState(EXERCISE_PLAYING);
      setSectionState(SECTIONS[route]);
      updateSectionStatus(
        SECTIONS[route],
        SECTION_STATUSES.SECTION_IN_PROGRESS,
      );
    }

    navigate(`/Lab0/Exercise/${route}`);
  };

  return (
    <>
      <Lab0Context.Provider value={{ handleNav }}>
        <Router className={"tw-p-3"} path={"/Lab0/Exercise/"}>
          <Testing default path={"/*"} />
          {/* <SelectExercise default path={"/*"} /> */}
        </Router>
      </Lab0Context.Provider>
    </>
  );
};

Main.propTypes = {
  user: PropTypes.shape({
    userid: PropTypes.number,
  }),
};

export default Main;
