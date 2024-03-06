/* eslint-disable no-undef */
import API from "../API";

const endpoints = {
  CREATE_EXERCISE: "/lab1/exercise/start",
  CREATE_ROUND: "/lab1/exercise/round",
  CREATE_CHOICE: "/lab1/exercise/choice",
  END_EXERCISE: "/lab1/exercise/end",
};

const ExerciseService = {
  createExercise: (playthrough) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.CREATE_EXERCISE,
      {
        playthrough,
      }
    );
  },
  createRound: (soundOption) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.CREATE_ROUND,
      {
        soundOption,
      }
    );
  },
  createChoice: (score, hintUsed, boxNumber, correct) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.CREATE_CHOICE,
      {
        score,
        hintUsed,
        boxNumber,
        correct,
      }
    );
  },
  updateEndExerciseScore: (score) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.END_EXERCISE,
      {
        score,
      }
    );
  },
};

export default ExerciseService;
