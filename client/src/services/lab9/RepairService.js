/**
 * RepairService(): This file is responsible for managing all states for routing for
 * interacting and requesting to the database.
 */
import API from "../API";

const prefix = {
  POST_SUFFIX: `submit`,
  LAB_PREFIX: `${process.env.REACT_APP_SERVER_URL}/lab9`,
};
const resources = {
  REPAIR: `${prefix.LAB_PREFIX}/repair`,
};

const endpoints = {
  REPAIR: resources.REPAIR,
  POST_REPAIR: `${resources.REPAIR}/${prefix.POST_SUFFIX}`,
};

const RepairService = {
  /**
   * submitRepair(): is an async function that is responsible for handling the submission of user input
   * to the database. This depends on calling the fetch api to send a post request to the ALL DB.
   * @param {Object} data payload that is to be secured in the body of the post request.
   * @param {string} route designated route for the backend database.
   * @returns {Number} the id of the repair.
   */
  submitRepair: async (data = {}) => {
    try {
      const body = {
        userID: data.userid,
        repair: data.repair,
        section: data.section,
        isComplete: data.isComplete,
      };
      return API.postWithBody(endpoints.POST_REPAIR, body);
    } catch (error) {
      console.error(error);
    }
  },
  /**
   * getRepair(): is a function that is responsible for sending a request to get someone's information about
   * their last recorded attempt when making changes in the repair section.
   * @param {Object} data contains user information especially the userid to request correct data.
   * @param {Object} route rout endpoint to ALL DB server
   * @returns {Object} Containing the last state recorded when it was played or repaired
   */
  getRepair: async (data = {}, section) => {
    try {
      const getRoute = `${endpoints.REPAIR}/${data.userid}/${section}`;
      return API.get(getRoute).then((response) => response.json());
    } catch (error) {
      console.error(error);
    }
  },
};

export { RepairService, endpoints };
