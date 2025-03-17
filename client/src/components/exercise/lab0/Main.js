import React, { useState } from "react";
import PropTypes from "prop-types";
import useMainStateContext from "../../../reducers/MainContext";
import { navigate, Router } from "@reach/router";
import Lab0Context from "./Lab0Context";
import { SECTION_STATUSES, SECTIONS } from "../../../constants/lab0/index";
import { EXERCISE_PLAYING } from "../../../constants/index";
import ProgressService from "src/services/lab0/ProgressService";
import StartExercise from "./StartExercise";
import ALLCardFlip from "src/components/all-components/ALLCardFlip";

const Main = (props) => {
  const { user } = props;
  const { actions } = useMainStateContext();
  const [section, setSectionState] = useState({});

  const updateSectionStatus = (section, sectionStatus) => {
    ProgressService.submitProgress(
      user.userid,
      section.category,
      section.name,
      sectionStatus,
    );
  };

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
      <Lab0Context.Provider value={{ section, updateSectionStatus, handleNav }}>
        <Router className={"tw-p-3"}>
          <StartExercise default path={"/*"} />
          <StartExercise path={"/Continue"} verb="Continue" />
        </Router>
        <ALLCardFlip
          width={3}
          height={3}
          cards={[
            {
              topText: "Test 1",
              imageURL: "/img/lab_thumbnails/wrench.jpg",
              bottomText: "Bottom Text",
              width: 1,
            },
            {
              topText: "Test 2",
              imageURL: "/img/lab_thumbnails/wrench.jpg",
              bottomText: "Bottom Text",
              width: 2,
            },
            {
              topText: "Test 3",
              imageURL: "/img/lab_thumbnails/wrench.jpg",
              bottomText: "Bottom Text",
              width: 2,
            },
            {
              topText: "Test 4",
              imageURL: "/img/lab_thumbnails/wrench.jpg",
              bottomText: "Bottom Text",
              width: 1,
            },
            {
              topText: "Test 5",
              imageURL: "/img/lab_thumbnails/wrench.jpg",
              bottomText: "Bottom Text",
              width: 1,
            },
            {
              topText: "Test 6",
              imageURL: "/img/lab_thumbnails/wrench.jpg",
              bottomText: "Bottom Text",
              width: 2,
            },
          ]}
        />
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
