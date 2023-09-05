/* eslint-disable no-undef */
import API from "../API";

const endpoints = {
  SUBMIT_REPAIR: "/lab8/exercise/submit",
  GET_REPAIR: "/lab8/exercise/",
};

const ExerciseService = {
  submitRepair: (data = {}) => {
    const body = {
      userId: data.userid,
      repair: data.repair,
      isComplete: data.isComplete,
    }
    return API.postWithBody(`${process.env.REACT_APP_SERVER_URL}${endpoints.SUBMIT_REPAIR}`, body);
  },
  getUserRepair: (userId) => {
    return API.get(
      `${process.env.REACT_APP_SERVER_URL}${endpoints.GET_REPAIR}${userId}`
    ).then((response) => response.json());
  },
};

export default ExerciseService;
