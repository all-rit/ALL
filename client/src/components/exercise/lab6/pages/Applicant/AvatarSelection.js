import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import GridImages from "../../../../all-components/GridImages";
import ExerciseService from "../../../../../services/lab6/ExerciseService";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const AvatarSelection = () => {
  const { actions } = useMainStateContext();

  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

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
