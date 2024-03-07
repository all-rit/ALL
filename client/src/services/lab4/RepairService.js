/* eslint-disable no-undef */
import API from "../API";

const endpoints = {
  SUBMIT_REPAIR_BUTTON: "/lab4/repair/submit/button",
  SUBMIT_REPAIR_SKIP: "/lab4/repair/submit/skip",
  SUBMIT_REPAIR_HINT: "/lab4/repair/submit/hint",
};

const RepairService = {
  submitRepairButton: (height, width) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR_BUTTON,
      {
        height,
        width,
      },
    );
  },
  submitRepairSkip: (skiptomain) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR_SKIP,
      {
        skiptomain,
      },
    );
  },
  submitRepairHint: (tabindex) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR_HINT,
      {
        tabindex,
      },
    );
  },
};

export default RepairService;
