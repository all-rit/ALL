import React from "react";
import useMainStateContext from "src/reducers/MainContext";

import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "src/constants/index";
import { ExerciseService } from "../../../../services/lab15/ExerciseService";

import LabButton from "../../../all-components/LabButton";

const ExerciseIntro = () => {
  const { actions, state } = useMainStateContext();

  const startExercise = async () => {
    const body = {
      userid: state.main.user.userid,
      isExerciseComplete: false,
      hasViewed: true,
    };
    actions.updateUserState(EXERCISE_PLAYING);
    await ExerciseService.submitExercise(body);
  };

  const handleContinue = () => {
    startExercise();
    navigate("/Lab15/Exercise/model-hallucination");
  };

  return (
    <>
      <div className="center-div">
        <div className="guidance margin-bottom-2">
          <h1 className={"tw-title tw-text-left"}>Exercise Start</h1>
          <p className="tw-body-text tw-my-6">
            In this exercise, you will explore how ineffective prompting can
            lead to inaccurate AI responses and learn how to refine them. Guided
            by GCSE standards for prompt engineering, you will craft your own
            prompt and receive a real-time grade from the AI agent. To complete
            the exercise, you must iterate on your prompt until it meets the
            passing criteria.
          </p>
        </div>
        <LabButton onClick={handleContinue} key="start" label={"Start"} />
      </div>
    </>
  );
};

export default ExerciseIntro;
