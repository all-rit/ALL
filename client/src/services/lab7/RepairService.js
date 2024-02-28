/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import API from "../API";

const endpoints = {
  SUBMIT_REPAIR: "/lab7/repair/submit",
  UPDATE_REPORT: "/lab7/repair/update",
};

const RepairService = {
  submitRepair: (activity, repair) => {
    return API.postWithBody(
      `${process.env.REACT_APP_SERVER_URL}${endpoints.SUBMIT_REPAIR}`,
      { activity, repair },
    );
  },
  updateReport: (repairId, report) => {
    return API.postWithBody(
      `${process.env.REACT_APP_SERVER_URL}${endpoints.UPDATE_REPORT}`,
      { repairId, report },
    );
  },
};

export default RepairService;
