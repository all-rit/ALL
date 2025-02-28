import React, { useState } from "react";
import PropTypes from "prop-types";
import useMainStateContext from "../../../reducers/MainContext";
import { navigate, Router } from "@reach/router";
import Lab0Context from "./Lab0Context";
import { SECTIONS } from "../../../constants/lab0/index";
import { EXERCISE_PLAYING } from "../../../constants/index";
import ProgressService from "src/services/lab0/ProgressService";
import StartExercise from "./StartExercise";

const Main = (props) => {
  const { user } = props;
  const { actions } = useMainStateContext();
  const [section, setSectionState] = useState({});

  const handleNav = (route) => {
    if (route in SECTIONS) {
      actions.updateUserState(EXERCISE_PLAYING);
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
