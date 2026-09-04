import API from "../API";

const endpoints = {
  WEIGHTS: "/lab10/exercise/weights",
};

const ExerciseService = {
  retrieveWeights: (userId) => {
    return API.get(
      `${import.meta.env.VITE_SERVER_URL}${endpoints.WEIGHTS}/${userId}`,
    );
  },
  submitWeights: (weights, session, userId) => {
    return API.postWithBody(
      `${import.meta.env.VITE_SERVER_URL}${endpoints.WEIGHTS}`,
      {
        weights,
        session,
        userId,
      },
    );
  },
};

export default ExerciseService;
