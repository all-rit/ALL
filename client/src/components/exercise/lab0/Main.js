import React, { useState } from "react";
import PropTypes from "prop-types";
import useMainStateContext from "../../../reducers/MainContext";
import { navigate, Router } from "@reach/router";
// import SelectExercise from "./SelectExercise";
import Lab0Context from "./Lab0Context";
import { EXERCISE_STATES } from "../../../constants/lab0";
import Testing from "./Testing";

const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );

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
      <Lab0Context.Provider
        value={{ exerciseState, setExerciseState, handleNav }}
      >
        <Router className={"tw-p-3"} path={"/Lab0/Exercise/"}>
          <Testing default path={"/*"} />
          {/* <SelectExercise default path={"/*"} /> */}
        </Router>
        <ALLCardFlip
          width={3}
          height={3}
          onAllFlipped={() => setTemp(true)}
          gridStyle={"tw-gap-3"}
          cardStyle={"tw-rounded-[1.2rem]"}
          cards={[
            {
              id: 0,
              width: 1,
              text: "Test 1",
            },
            {
              id: 1,
              width: 2,
              topText: "Test 2",
              imageURL: "/img/lab_thumbnails/wrench.jpg",
            },
            {
              id: 2,
              width: 2,
              imageURL: "/img/lab_thumbnails/wrench.jpg",
              bottomText: "Test 3",
            },
            {
              id: 3,
              width: 1,
              topText: "Test 4",
              imageURL: "/img/lab_thumbnails/wrench.jpg",
              bottomText: "Bottom Text",
            },
            {
              id: 4,
              width: 1,
              topText: "Test 5",
              imageURL: "/img/lab_thumbnails/wrench.jpg",
              bottomText: "Bottom Text",
            },
            {
              id: 5,
              width: 2,
              topText: "Test 6",
              imageURL: "/img/lab_thumbnails/wrench.jpg",
              bottomText: "Bottom Text",
            },
          ]}
        />
        <LabButton
          label="Finished"
          disabled={!temp}
          onClick={() => alert("You flipped all of them, nice!")}
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
