import API from "../API";

const endpoints = {
  WEIGHTS: "/lab10/exercise/weights",
};

const ExerciseService = {
  retrieveWeights: (userId) => {
    return API.get(
      `${process.env.REACT_APP_SERVER_URL}${endpoints.WEIGHTS}/${userId}`,
    );
  },
  submitWeights: (weights, session, userId) => {
    return API.postWithBody(
      `${process.env.REACT_APP_SERVER_URL}${endpoints.WEIGHTS}`,
      {
        weights,
        session,
        userId,
      },
    );
  },
};

export default ExerciseService;
