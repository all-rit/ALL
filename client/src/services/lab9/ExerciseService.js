import API from "../API";

const prefix = {
  POST_SUFFIX: `submit`,
  LAB_PREFIX: `${process.env.REACT_APP_SERVER_URL}/lab9`,
};

const resource = {
  EXERCISE: `${prefix.LAB_PREFIX}/exercise`,
};
const endpoints = {
  GET_EXERCISE: resource.EXERCISE,
  POST_EXERCISE: `${resource.EXERCISE}/${prefix.POST_SUFFIX}`,
};
/**
 * ExerciseService is a node function that is responsible for wrapping
 * fetch api calls to the database from the client.
 */

const ExerciseService = {
  fetchExercise: async (data = {}) => {
    try {
      const getRoute = `${endpoints.GET_EXERCISE}/${data.userid}`;
      const response = API.get(getRoute).then((response) => response.json());
      return response;
    } catch (error) {
      console.error(error);
    }
  },
    submitExercise: async (data) => {
    try {
        const body = {
            userID: data.userid,
            isAddressComplete: data.isAddressComplete,
            isDateComplete: data.isDateComplete,
            isNavComplete: data.isNavComplete,
        };
        const response = await API.postWithBody(endpoints.POST_EXERCISE, body);
        return response.status;
    } catch (error) {
        console.error(error);
    }
  },
};
export { ExerciseService };
