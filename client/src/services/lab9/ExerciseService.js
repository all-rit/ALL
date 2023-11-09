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
  /**
   * fetchExercise(): is a service function responsible for 
   * retrieving a user's previous state of their exercise. 
   * @param {Number} data the user ID number associated with the 
   * session.
   * @returns {Object} containing information about the user's 
   * currently played exercise.
   */
  fetchExercise: async (data = {}) => {
    try {
      const getRoute = `${endpoints.GET_EXERCISE}/${data.userid}`;
      const response = API.get(getRoute).then((response) => response.json());
      return response;
    } catch (error) {
      console.error(error);
    }
    },
  /**
   * submitExercise(): function that is responsible for sending a 
   * request to the backend updating the state of the game.
   * @param {Object} data payload storing new updated state info
   * @returns status indicating the request was complete.
   */
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
