/* eslint-disable no-undef */
import API from "../API";

const endpoints = {
  SUBMIT_REPAIR: "/lab1/repair/submit",
};

const RepairService = {
  submitRepair: (
    availableMessage,
    unavailableMessage,
    availableBackgroundColor,
    unavailableBackgroundColor
  ) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR,
      {
        availableMessage,
        unavailableMessage,
        availableBackgroundColor,
        unavailableBackgroundColor,
      }
    );
  },
};

export default RepairService.js;
