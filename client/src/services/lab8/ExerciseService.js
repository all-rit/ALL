/* eslint-disable no-undef */
import API from "../API";

const endpoints = {
  SUBMIT_REPAIR: "/lab8/exercise/submit",
  GET_REPAIR: "/lab8/exercise/",
};

const ExerciseService = {
  submitRepair: (userId, repair) => {
    return API.postWithBody(
      `${process.env.REACT_APP_SERVER_URL}${endpoints}`,
      {
        userId,
        repair,
      }
    );
  },
  getUserRepair: (userId) => {
    return API.get(
    `${process.env.REACT_APP_SERVER_URL}${endpoints.GET_REPAIR}${userId}`
    ).then((response) => response.json());
  },
};

export default ExerciseService;
