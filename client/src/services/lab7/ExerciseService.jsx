import API from '../API';

const endpoints = {
  SUBMIT_REPORT: '/lab7/exercise/report',
};

const ExerciseService = {
  submitRepair: (report, userId) => {
    return API.postWithBody(
      `${import.meta.env.VITE_REACT_APP_SERVER_URL}${endpoints.SUBMIT_REPORT}`,
      {
        report,
        userId,
      },
    );
  },
};

export default ExerciseService;
