/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import GridImages from "../../../../all-components/GridImages";
import ExerciseService from "../../../../../services/lab6/ExerciseService";

const AvatarSelection = (props) => {
  const { actions } = props;

  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const confirmSelection = () => {
    if (avatar.length != 0) {
      ExerciseService.submitAvatar(avatar);
      navigate("/Lab6/Exercise/QualificationQuestions");
    }
  };

  return (
    <div className="center-div">
      <h2 className="playthrough__title">
        Welcome to “MegaCorp’s” hiring process!
      </h2>
      <p className="playthrough__sentence">
        To get you started with the hiring process, please pick an avatar you
        most identify with.
      </p>

      <GridImages multi={1} setSelection={setAvatar} />
      {avatar.length != 0 && (
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={confirmSelection}
          key="confirm"
        >
          Confirm Selection
        </button>
      )}
    </div>
  );
};

export default AvatarSelection;
