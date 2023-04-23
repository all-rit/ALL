/* eslint-disable no-undef */
import API from "../API";

const endpoints = {
  SUBMIT_REPAIR: "/lab8/repair/submit",
  GET_REPAIR: "/lab8/repair/",
};

const RepairService = {
  submitRepair: (userId, repair) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR,
      {
        userId,
        repair,
      }
    );
  },
  getUserRepair: (userId) => {
    return API.get(
      process.env.REACT_APP_SERVER_URL + endpoints.GET_REPAIR + `${userId}`
    ).then((response) => response.json());
  },
};

export default RepairService;
