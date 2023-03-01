/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import API from "../API";

const endpoints = {
  SUBMIT_REPORT: "/lab7/exercise/report",
};

const ExerciseService = {
  submitRepair: (report, userId) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_REPORT,
      {
        report,
        userId,
      }
    );
  },
};

export default ExerciseService;
