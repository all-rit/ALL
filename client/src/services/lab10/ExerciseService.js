import API from "../API";

const endpoints = {
  WEIGHTS: "/lab10/exercise/weights",
};

const ExerciseService = {
  retrieveWeights: (userId) => {
    return API.get(
      `${process.env.REACT_APP_SERVER_URL}${endpoints.WEIGHTS}/${userId}`
    );
  },
  submitWeights: (weights, userId) => {
    return API.postWithBody(
      `${process.env.REACT_APP_SERVER_URL}${endpoints.WEIGHTS}`,
      {
        weights,
        userId,
      }
    );
  },
};

export default ExerciseService;
