import API from "../API";

const endpoints = {
  SUBMIT_REPAIR: "/lab7/repair/submit",
  UPDATE_REPORT: "/lab7/repair/update",
};

const RepairService = {
  submitRepair: (activity, repair) => {
    return API.postWithBody(
      `${import.meta.env.VITE_SERVER_URL}${endpoints.SUBMIT_REPAIR}`,
      { activity, repair },
    );
  },
  updateReport: (repairId, report) => {
    return API.postWithBody(
      `${import.meta.env.VITE_SERVER_URL}${endpoints.UPDATE_REPORT}`,
      { repairId, report },
    );
  },
};

export default RepairService;
