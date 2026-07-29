import API from "../API";

const prefix = {
  POST_SUFFIX: "submit",
  LAB_PREFIX: `${process.env.REACT_APP_SERVER_URL}/lab12`,
};

const resource = {
  EXERCISE: `${prefix.LAB_PREFIX}/exercise`,
};

const endpoints = {
  GET_EXERCISE: resource.EXERCISE,
  POST_EXERCISE: `${resource.EXERCISE}/${prefix.POST_SUFFIX}`,
};

const ExerciseService = {
  fetchExercise: async (data = {}) => {
    try {
      const getRoute = `${endpoints.GET_EXERCISE}/${data.userid}`;
      return API.get(getRoute).then((response) => {
        return response.json();
      });
    } catch (error) {
      console.error(error);
    }
  },
  submitExercise: async (data) => {
    try {
      const body = {
        userID: data.userid,
        isFormRepairComplete: data.isFormRepairComplete,
        isDatabaseRepairComplete: data.isDatabaseRepairComplete,
        isExerciseComplete: data.isExerciseComplete,
        hasViewed: data.hasViewed,
      };
      const response = await API.postWithBody(endpoints.POST_EXERCISE, body);
      return response.status;
    } catch (error) {
      console.error(error);
    }
  },
};

export { ExerciseService };
