/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import API from "../API";

const endpoints = {
  SUBMIT_CHOICE: "/lab7/exercise/choice",
  CREATE_SIMULATION: "/AISimulation",
  CREATE_ROUND: "/lab7/exercise/round",
  END_EXERCISE: "/lab7/exercise/end",
};

const ExerciseService = {
  createRound: () => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.CREATE_ROUND
    );
  },

  createSimulation: () => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.CREATE_SIMULATION
    );
  },

  submitChoice: (correct, question, selectedoption, options) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_CHOICE,
      {
        correct,
        question,
        selectedoption,
        options,
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
