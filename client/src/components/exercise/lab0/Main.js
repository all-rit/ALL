import React, { useState } from "react";
import PropTypes from "prop-types";
import { navigate, Router } from "@reach/router";
import Lab0Context from "./Lab0Context";
import StartExercise from "./StartExercise";
import ProgressService from "src/services/lab0/ProgressService";
import { SECTIONS } from "../../../constants/lab0/index";

const Main = (props) => {
  const { user } = props;
  const [section, setSectionState] = useState({});

  const handleNav = (route) => {
    if (route in SECTIONS) {
      setSection(route);
    }

    navigate(`/Lab0/Exercise/${route}`);
  };

  const setSection = (sectionName) => {
    setSectionState(SECTIONS[sectionName]);
  };

  const updateSectionStatus = (sectionStatus) => {
    ProgressService.submitProgress(
      user.userid,
      SECTIONS[section].category,
      section.name,
      sectionStatus,
    );
  };

  return (
    <>
      <Lab0Context.Provider
        value={{ section, setSection, updateSectionStatus, handleNav }}
      >
        <Router className={"tw-p-3"}>
          <StartExercise default path={"/*"} />
          <StartExercise path={"/Continue"} verb="Continue" />
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
