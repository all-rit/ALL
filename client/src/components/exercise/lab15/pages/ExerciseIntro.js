import React from "react";
import useMainStateContext from "src/reducers/MainContext";

import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "src/constants/index";
import { ExerciseService } from "../../../../services/lab15/ExerciseService";

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
  return <button onClick={handleContinue}>Start Exercise</button>;
};

export default ExerciseIntro;
