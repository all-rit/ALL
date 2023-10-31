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
  submitRepair: async (data = {}, route) => {
    const body = {
      userID: data.userID,
      repair: data.repair,
      isComplete: data.isComplete,
      numRepair: data.numRepair,
    };
    return await API.postWithBody(route, body);
  },
  getRepair: async (data = {}, route) => {
    const body = {
      userID: data.userid,
    };
    return await API.get(route, body);
  },
};

export { RepairService, endpoints };
