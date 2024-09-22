// Exercise Instructions (Page #1)

import React from "react";
import useMainStateContext from "src/reducers/MainContext";
import { navigate } from "@reach/router";
import { useEffect } from "react";
import { EXERCISE_PLAYING } from "src/constants/index";
import { ExerciseService } from "../../../../../services/lab12/ExerciseService";

const ExerciseIntro = () => {
  const { actions, state } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const startExercise = async () => {
    const body = {
      userid: state.main.user.userid,
      isFormRepairComplete: false,
      isDatabaseRepairComplete: false,
      hasViewed: true,
    };
    await ExerciseService.submitExercise(body);
  };
  const handleContinue = () => {
    startExercise();
    navigate("/Lab12/Exercise/GraduationApplication");
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          You just graduated from ALL University! Congratulations on completing
          your degree! Now that you have finished, you will apply for graduation
          and transition from being a student to an alum.
        </p>
        <p className="playthrough__sentence">
          In this exercise, you will enter your personal information in a short
          form. This information will appear on your diploma as well as an
          alumni newsletter. Then, we will see how to improve the form.
        </p>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Start&quot; button to begin the exercise!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="start"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default ExerciseIntro;
