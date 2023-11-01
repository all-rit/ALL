/**
 * RepairService(): This file is responsible for managing all states for routing for
 * interacting and requesting to the database.
 */
import API from "../API";
import { GAME_STATES } from "../../constants/lab9";

const prefix = {
  POST_SUFFIX: `/submit`,
  LAB_PREFIX: `${process.env.REACT_APP_SERVER_URL}/lab8/`,
};
const resources = {
  NAV_REPAIR: `${prefix.LAB_PREFIX}repair/${GAME_STATES.REPAIR_NAV_BAR}`,
  DATE_REPAIR: `${prefix.LAB_PREFIX}repair/${GAME_STATES.REPAIR_NAV_BAR}`,
  ADDRESS_REPAIR: `${prefix.LAB_PREFIX}repair/${GAME_STATES.REPAIR_NAV_BAR}`,
};

const endpoints = {
  GET_NAV_REPAIR: resources.NAV_REPAIR,
  GET_DATE_REPAIR: resources.DATE_REPAIR,
  GET_ADDRESS_REPAIR: resources.ADDRESS_REPAIR,
  POST_NAV_REPAIR: `${resources.NAV_REPAIR}${prefix.POST_SUFFIX}`,
  POST_DATE_REPAIR: `${resources.DATE_REPAIR}${prefix.POST_SUFFIX}`,
  POST_ADDRESS_REPAIR: `${resources.ADDRESS_REPAIR}${prefix.POST_SUFFIX}`,
};

const RepairService = {
  /**
   * submitRepair(): is an async function that is responsible for handling the submission of user input
   * to the database. This depends on calling the fetch api to send a post request to the ALL DB.
   * @param {Object} data payload that is to be secured in the body of the post request.
   * @param {string} route designated route for the backend database.
   * @returns {Number} the id of the repair.
   */
  submitRepair: async (data = {}, route) => {
    try {
      const body = {
        userid: data.userID,
        repair: data.repair,
        isComplete: data.isComplete,
        numRepair: data.numRepair,
      };
      return await API.postWithBody(route, body);
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
  getRepair: async (data = {}, route) => {
    try {
      const body = {
        userid: data.userid,
      };
      const result = await API.get(route, body);
      return result;
    } catch (error) {
      console.error(error);
    }
  },
};

export { RepairService, endpoints };
