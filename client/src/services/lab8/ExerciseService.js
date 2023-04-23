/* eslint-disable no-undef */
import API from "../API";

const endpoints = {
  SUBMIT_INITIAL_MODERATION_CHOICES:
    "/lab8/exercise/initial-moderation-choices",
  SUBMIT_FINAL_MODERATION_CHOICES: "/lab8/exercise/final-moderation-choices",
};

const ExerciseService = {
  submitMessageChoices: (choices) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL +
        endpoints.SUBMIT_INITIAL_MODERATION_CHOICES,
      {
        choices,
      }
    );
  },
  submitFinalMessageChoices: (choices) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL +
        endpoints.SUBMIT_FINAL_MODERATION_CHOICES,
      {
        choices,
      }
    );
  },
};

export default ExerciseService;
